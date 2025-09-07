"use client";

import React from "react";
import Image from "next/image";
import { AiOutlineCheckCircle } from "react-icons/ai";

// Section Content Array
const taxSections = [
  {
    heading: "Tax Calculation",
    subText: "HR360 will help you to calculate income taxes.",
    list: [
      "HR360 is included with online tax preparation, processing, submission according to the Bangladesh Govt. policy.",
      "It is a system-guided, easy-to-use tax preparation software that will save you time, money, and reduce any potential audits by the government.",
      "Through HR360 you can generate your salary easily with tax.",
      "Using income tax calculation software ensures you only pay the necessary taxes.",
      "The salary income tax calculation software calculates the different deductions allowed under the Income Tax Act and provides employees with the net salary after tax deduction.",
    ],
    img: "/img/products/tax/TM2.png",
    imgRight: false,
  },
  {
    heading: "Salary Calculation",
    subText:
      "HR360 Software will help you to calculate net income after deducting taxes and other costs.",
    list: [
      "The salary income tax calculation system will help calculate the taxes based on the salary income.",
      "Deduct employee EPF, labor welfare funds, and others from their gross salary.",
      "Calculate net salary income after considering applicable taxes and other deductions.",
      "The salary tax calculation system is a valuable tax calculator software for HR who want to know how much they will pay for salary.",
    ],
    img: "/img/products/tax/TM3.png",
    imgRight: true,
  },
  {
    heading: "Tax Factors",
    subText: "HR360 can help you automate tax collecting data.",
    list: [
      "Tax factors depend on basic, house rent, medical allowance, and conveyance.",
      "After inputting these options, the admin has to create the slab.",
      "Then the tax will be calculated automatically.",
      "An admin can edit or delete according to their company’s policy.",
    ],
    img: "/img/products/tax/TM4.png",
    imgRight: false,
  },
  {
    heading: "Tax Rules",
    subText: "With the help of HR360 Software you can add the financial rules.",
    list: [
      "Tax rules are important for tax calculation.",
      "In HR360 Software, an admin or a finance person can add the tax rules.",
      "Admin or finance person has to select the tax calculation methods to generate the tax rules.",
      "Deduction from salary varies from person to person depending on their investment in EPF, labor welfare fund, and other such schemes.",
    ],
    img: "/img/products/tax/TM5.png",
    imgRight: true,
  },
];

const TaxManagementPage = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-red-100 via-red-50 to-white">
      <div className="container mx-auto px-10 space-y-20">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Left Side Text */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <p className="text-base font-medium text-gray-600">
              Tax Management Solution
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tighter -mt-4">
              Income Tax Management
            </h1>
            <p className="text-gray-700 mt-4">
              Tax management made easy by HR360 Software. Tax Calculation, Tax
              Rule set-up, salary calculation, and Tax Factor control with the
              complete HR management system. Try our demo!
            </p>
            <button className="px-6 py-3 bg-sky-500 text-white font-bold rounded-full hover:bg-sky-600 transition mt-4">
              Calculate Your Tax
            </button>
          </div>

          {/* Right Side Image */}
          <div className="flex-1 w-full">
            <Image
              src="/img/products/tax/TM1.png"
              alt="Tax Management Illustration"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Sections */}
        {taxSections.map((sec, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-center gap-10"
          >
            {/* Text */}
            <div
              className={`flex-1 space-y-6 text-left ${
                sec.imgRight ? "order-2 md:order-1" : "order-2 md:order-2"
              }`}
            >
              <h2 className="text-4xl font-bold text-gray-900 -mt-2">
                {sec.heading}
              </h2>
              <p className="text-gray-700">{sec.subText}</p>
              <ul className="text-gray-700 space-y-4">
                {sec.list.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-300"
                  >
                    <AiOutlineCheckCircle className="text-sky-500 w-6 h-6 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div
              className={`flex-1 w-full ${
                sec.imgRight ? "order-1 md:order-2" : "order-1 md:order-1"
              }`}
            >
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

export default TaxManagementPage;
