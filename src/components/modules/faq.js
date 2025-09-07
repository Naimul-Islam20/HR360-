"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronDown, Phone, Mail } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "How will my business benefit from HR360's HR Software?",
    answer: (
      <div className="space-y-3">
        <p>
          HR360 streamlines HR operations for businesses in Bangladesh. It boosts
          efficiency, reduces manual admin work, and helps you stay compliant with local
          labor laws.
        </p>
        <p>
          The platform automates payroll, attendance, and employee management so your
          team can focus on strategic growth. It also provides actionable insights so
          everyone can work smarter together.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    question: "What does HR360 HR Software do?",
    answer: (
      <div>
        <p>HR360 is an all‑in‑one HRIS & HRM platform to automate your HR processes.</p>
        <ul className="list-disc pl-5 mt-3 space-y-1">
          <li>Attendance management</li>
          <li>Shift & leave management</li>
          <li>Payroll & tax management</li>
          <li>Expense management</li>
          <li>Employee management & tracking</li>
          <li>Tasks management</li>
          <li>Digital noticeboard & notifications</li>
          <li>Face recognition attendance</li>
          <li>And more</li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    question: "Does HR360's HR Software support payroll?",
    answer: (
      <div className="space-y-3">
        <p>
          Yes. HR360 includes a complete payroll engine with salary structures,
          allowances, deductions, and automated tax calculations.
        </p>
        <p>Generate payslips, process payroll cycles, and export reports in clicks.</p>
      </div>
    ),
  },
  {
    id: 4,
    question: "How do I choose the best HR software in Bangladesh?",
    answer: (
      <div className="space-y-3">
        <p>
          Start by mapping your HR needs (payroll, attendance, self‑service, cloud
          access), then match solutions to your company size and industry.
        </p>
        <p>
          HR360 offers flexible modules and pricing so you pay for what you need and
          scale as you grow.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    question: "Is HR360 the best HR software in Bangladesh?",
    answer: (
      <div>
        <p>
          HR360 is trusted for comprehensive HR & payroll features, a user‑friendly
          interface, and compliance‑focused workflows—making it a top choice for
          organizations in Bangladesh.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    question: "Is HR360 suitable for small businesses?",
    answer: (
      <div>
        <p>
          Absolutely. HR360 serves startups, SMEs, and large enterprises with packages
          tailored to team size and budget.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    question: "How much does HR360 HR Software cost?",
    answer: (
      <div className="space-y-2">
        <p>Pricing varies by organization size:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><span className="font-medium">Tiny:</span> 1 – 25 Employees</li>
          <li><span className="font-medium">Small:</span> 26 – 50 Employees</li>
          <li><span className="font-medium">Mid:</span> 51 – 100 Employees</li>
          <li><span className="font-medium">Large:</span> 100+ Employees</li>
        </ul>
        <p>Check our packages for full details.</p>
      </div>
    ),
  },
  {
    id: 8,
    question: "Can I see a demo of HR360?",
    answer: (
      <div>
        <p>
          Of course! Request a call at <span className="font-semibold">+880 17 1342 8432</span>
          or schedule a meeting—our team will gladly show you around.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    question: "Can HR360 be customized to fit my organization’s needs?",
    answer: (
      <div>
        <p>
          Yes. HR360 is highly customizable. Tell us your processes and we’ll tailor the
          workflows to match. Send us an email and we’ll get back ASAP.
        </p>
      </div>
    ),
  },
  {
    id: 10,
    question: "Is HR360 cloud‑based?",
    answer: (
      <div>
        <p>
          Yes. HR360 is a secure, cloud‑based HR solution with automatic updates and
          enterprise‑grade infrastructure.
        </p>
      </div>
    ),
  },
  {
    id: 11,
    question: "How does HR360 ensure security of employee data?",
    answer: (
      <div>
        <p className="ps-5">
          We prioritize security with strong encryption, role‑based access, and robust
          cloud controls. We also provide free setup and core HR data upload to ensure a
          smooth go‑live.
        </p>
      </div>
    ),
  },
  {
    id: 12,
    question: "Do you provide support?",
    answer: (
      <div className="space-y-2">
        <p>
          Yes. Our professional support team provides onboarding, training, and ongoing
          help when you need it.
        </p>
        <p>Support hotline: <span className="font-semibold">+880 9606 881188</span></p>
      </div>
    ),
  },
  {
    id: 13,
    question: "Do you have a mobile app?",
    answer: (
      <div>
        <p>Yes. HR360 is available on both Android and iOS for on‑the‑go HR.</p>
      </div>
    ),
  },
];

function FaqItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-300 bg-white rounded-2xl overflow-hidden shadow  hover:shadow transition">
      <button
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
      >
        <div className="flex items-start gap-3">
          
          <h3 className="font-semibold text-base md:text-lg leading-snug">{q}</h3>
        </div>
        <ChevronDown className={`shrink-0 transition-transform ${open ? "rotate-180" : "rotate-0"}`} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
          >
            <div className="px-5  pb-5 pt-0 text-gray-700 leading-relaxed">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function HR360Faq() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 via-sky-100 to-white">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-4 pt-16 md:pt-20">
        <div className="text-center space-y-4">
          {/* <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1 shadow-sm">
            <MessageCircle className="h-4 w-4" />
            <span className="text-xs font-medium tracking-wide">We’re here to help</span>
          </div> */}
          <h1 className="text-3xl md:text-5xl text-[#141451] font-extrabold tracking-tight">Frequently Asked Questions</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Still have questions? Contact our team and we’ll respond fast.</p>

          {/* Contact CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
            <a href="tel:+8801713428432" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-sky-200 bg-white shadow hover:shadow-md transition">
              <Phone className="h-4 w-4" /> +880 17 1342 8432
            </a>
            <a href="tel:+8809606881188" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-sky-200 bg-white shadow hover:shadow-md transition">
              <Phone className="h-4 w-4" /> Support: +880 9606 881188
            </a>
            <a href="mailto:hello@hr360.com" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-gray-200 bg-white shadow hover:shadow-md transition">
              <Mail className="h-4 w-4" /> hello@hr360.com
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Grid (1 column) */}
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <div className="grid grid-cols-1  gap-2 md:gap-3">
          {faqs.map((f, i) => <FaqItem key={f.id} q={f.question} a={f.answer} />)}
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-12 md:mt-16">
          <div className="rounded-3xl border border-sky-200 bg-white/70 backdrop-blur-sm p-6 md:p-10 shadow-sm text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Didn’t find what you’re looking for?</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Our specialists can help you map your HR processes and set up HR360 the right way—from payroll to attendance and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-5">
              <a href="tel:+8801713428432" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-sky-600 text-white font-semibold shadow hover:shadow-md hover:bg-sky-700 transition">Talk to Sales</a>
              <a href="mailto:hello@hr360.com" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 border border-gray-300 bg-white font-semibold shadow hover:shadow-md transition">Email Us</a>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
}
