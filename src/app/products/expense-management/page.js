"use client";

import React from "react";
import Image from "next/image";
import { AiOutlineCheckCircle } from "react-icons/ai";

// Expense Sections
const expenseSections = [
  {
    heading: "Claim",
    subText:
      "HR360 Expense offers handy features to capture and record every penny your business spends. Prevent an unseen expense from reoccurring.",
    list: [
      "Employees can easily claim for their expenses through HR360.",
      "They can easily submit their expenses through app or the web.",
      "An admin can also store the office expenses through claim by using HR360 Software.",
      "Employees can upload any kind of documents of their expenses."
    ],
    img: "/img/products/expense/EM2.png",
    imgRight: false
  },
  {
    heading: "Claim Category",
    subText:
      "Make claim from selected categories. HR360 Expense offers handy features to capture and record every penny your business spends. Prevent an unseen expense from reoccurring.",
    list: [
      "An admin can make any kind of categories for claim.",
      "After the category is set up, then any employees can apply for the claim."
    ],
    img: "/img/products/expense/EM3.png",
    imgRight: true
  },
  {
    heading: "Claim Report",
    subText:
      "When your employees are traveling all around the city/ country, HR360 Expense Management will allow you to keep track of expenses right from your mobile device or from the web to ensure error-free calculations.",
    list: [
      "After submitting the claim, an admin can generate a report according to the needs.",
      "Admin has to select the date range, status and categories to generate a report."
    ],
    img: "/img/products/expense/EM4.png",
    imgRight: false
  }
];

const ExpenseManagementPage = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-green-200 via-green-100 to-white">
      <div className="space-y-20 px-4 md:px-42">
        {/* Hero Section */}
        <div className="flex  pt-16 flex-col md:flex-row items-center gap-6">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <p className="text-base font-medium text-gray-600">
              Expense Management
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tighter -mt-4">
              Increase efficiency with streamlined expense management to increase
              profitability
            </h1>
            <p className="text-gray-700 mt-4">
              Facing problem in expense claiming, Claim category management,
              expense reimbursements, and reports? Try expense management with a
              complete HR solution by HR360
            </p>
            <button className="px-6 py-3 bg-sky-500 text-white font-bold rounded-full hover:bg-sky-600 transition mt-4">
              Contact Us
            </button>
          </div>

          <div className="flex-1 w-full">
            <Image
              src="/img/products/expense/EM1.png"
              alt="Expense Management"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Sections */}
        {expenseSections.map((sec, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-center gap-10"
          >
            {/* Text */}
            <div
              className={`flex-1 space-y-8 text-left ${
                sec.imgRight ? "order-2 md:order-1" : "order-2 md:order-2"
              }`}
            >
              <h2 className="text-5xl font-bold text-gray-900 -mt-2">
                {sec.heading}
              </h2>
              <p className="text-gray-700">{sec.subText}</p>
              <ul className="text-gray-700 space-y-8">
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

export default ExpenseManagementPage;
