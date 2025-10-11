"use client";

import React from "react";
import Image from "next/image";
import { AiOutlineCheckCircle } from "react-icons/ai";

// Section content array
const payrollSections = [
  {
    heading: "Salary Structure",
    subText: "HR360 can assist you in building salary structure types.",
    list: [
      "Salary structure is needed to be ready to provide the salary.",
      "Salary structure can be ready by creating and processing breakups, also by consolidated structure.",
      "Just create the structure then it will help you to generate salary within seconds."
    ],
    img: "/img/products/payroll/PS2.png",
    imgRight: true
  },
  {
    heading: "Salary Payment",
    subText: "Managers can easily manage salary payment options.",
    list: [
      "Salary can be disbursed by the bank, through cash, or by cheque.",
      "Managers can easily choose any of the available options while disbursing.",
      "Through HR360 employee management software, an admin can add the template format of any bank for salary payment."
    ],
    img: "/img/products/payroll/PS3.png",
    imgRight: false
  },
  {
    heading: "Salary Pay Slip",
    subText: "Employees can view and get their salary slip via HR360 app.",
    list: [
      "When salary is disbursed, employees can get the payslip from an admin or HR.",
      "After salary generation, an employee can get payslip via mail.",
      "HR360 app also allows employees to view their payslip.",
      "Payslip shows all breakdowns related to adjustments, tax, deductions, etc."
    ],
    img: "/img/products/payroll/PS4.png",
    imgRight: true
  },
  {
    heading: "Salary Certificate",
    subText: "Salary certificate can be created easily from HR360.",
    list: [
      "Salary certificate is important for both organization and employees.",
      "From HR360, you can create a customized salary certificate for any employee within seconds."
    ],
    img: "/img/products/payroll/PS5.png",
    imgRight: false
  },
  {
    heading: "Loan Management",
    subText: "HR360 can help you manage employee loans.",
    list: [
      "Employees can apply for advance salary or loan via HR360.",
      "Applications can be approved or rejected by supervisors.",
      "Applications can be submitted via web or mobile app.",
      "Loan can be adjusted with salary or by cash."
    ],
    img: "/img/products/payroll/PS6.png",
    imgRight: true
  }
];

const PayrollPage = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-cyan-100 via-cyan-50 to-white">
      <div className="space-y-20 px-4 md:px-42">

        {/* Hero Section */}
        <div className="flex  pt-16 flex-col md:flex-row items-center gap-6">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <p className="text-base font-medium text-gray-600">Payroll Software</p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tighter -mt-4">
              Smart payroll system featured by HR360
            </h1>
            <p className="text-gray-700 mt-4">
              All in one HR Payroll and Loan management software in Bangladesh. Manage Salary Structure, Salary Payment, Salary Pay Slip, Salary Certificate, Salary Generation, and more. HR360 is the best HR and payroll software company in Bangladesh.
            </p>
            <button className="px-6 py-3 bg-sky-500 text-white font-bold rounded-full hover:bg-sky-600 transition mt-4">
              Contact Us
            </button>
          </div>

          <div className="flex-1 w-full">
            <Image 
              src="/img/products/payroll/PS1.png"
              alt="Payroll Software Illustration"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Sections */}
        {payrollSections.map((sec, idx) => (
          <div key={idx} className="flex flex-col md:flex-row items-center gap-10">
            {/* Text */}
            <div className={`flex-1 space-y-6 text-left ${sec.imgRight ? "order-2 md:order-1" : "order-2 md:order-2"}`}>
              <h2 className="text-4xl font-bold text-gray-900 -mt-2">{sec.heading}</h2>
              <p className="text-gray-700 text-xl ">{sec.subText}</p>
              <ul className="text-gray-700 space-y-4">
                {sec.list.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-300">
                    <AiOutlineCheckCircle className="text-sky-500 w-6 h-6 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className={`flex-1 w-full ${sec.imgRight ? "order-1 md:order-2" : "order-1 md:order-1"}`}>
              <Image 
                src={sec.img}
                alt={sec.heading}
                width={500}
                height={400}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default PayrollPage;
