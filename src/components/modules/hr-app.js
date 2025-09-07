// app/hr360Info.js
"use client";

import Image from "next/image";
import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const HrApp = () => {
  return (
    <section className="relative bg-white py-20">
      <div className="container mx-auto px-14">

        {/* Flex container for 2 columns */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
            {/* Left Column */}
            
           <div className="order-2 lg:order-2 relative w-[300px] sm:w-[400px] lg:w-[500px] mx-auto lg:mx-0">
            <Image
              src="/img/home/intgMobile.webp"
              alt="HR360 Mobile App Illustration"
              width={600}
              height={600}
              className="rounded-2xl object-contain"
            />
          </div>

        
         
          {/* Right Column - Image */}
          <div className="flex-1 space-y-4 lg:space-y-5">

            {/* Headline + paragraph */}
            <div className="text-start">
              <p className="text-3xl lg:text-4xl font-extrabold text-[#0f172a] mt-3 leading-snug">
                HR360 Mobile App
              </p>
              <p className="text-gray-700 text-lg mt-4">
                HR360 delivers a cloud-based HR and payroll system designed to simplify HR tasks, cut down paperwork, and empower both employers and employees with smooth digital tools.
              </p>
            </div>

            {/* Features / Tick Points */}
            {[ 
              "Manage Workforce On-The-Go – Track attendance, payroll, leave approvals, and employee records in real time, from anywhere.",
              "Cloud-Powered HR & Payroll – Experience seamless, fully cloud-based workforce management at your fingertips.",
              "Tailored for Bangladeshi Businesses – Affordable and intuitive solutions crafted for local companies, small or large."
            ].map((item, index) => (
              <div key={index} className="flex gap-4 bg-white p-4 rounded-xl border border-gray-300 ">
                <AiOutlineCheckCircle  className="text-sky-500 w-6 h-6 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}

            {/* CTA / Contact */}
            <div className="mt-8">
              <p className="text-gray-700 text-lg mt-4">
                HR360 is a comprehensive HR and payroll solution that transforms traditional HR processes into smart, automated workflows — helping businesses save time, reduce errors, and support their teams effectively.
              </p>
              
            </div>

          </div>


        </div>
      </div>
    </section>
  );
};

export default HrApp;
