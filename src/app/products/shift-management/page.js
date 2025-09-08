"use client";

import React from "react";
import Image from "next/image";
import { AiOutlineCheckCircle } from "react-icons/ai";

// Section content array
const shiftSections = [
  {
    heading: "Shift Set up",
    subText: "Provide scheduled shifts for employees.",
    list: [
      "Admins can build employee schedules in a minute.",
      "Multiple shifts can be set.",
      "Shift management can reduce absenteeism, late arrivals, etc.",
      "Admins can easily maintain company’s shifts through HR360 Software."
    ],
    img: "/img/products/shift/SM2.png",
    imgRight: false
  },
  {
    heading: "Roster Eligible Employee",
    subText: "Choose and manage employees for rostering.",
    list: [
      "Admins can easily choose an employee for rostering.",
      "Admins search the name, select the employee, then grant rostering rights."
    ],
    img: "/img/products/shift/SM3.png",
    imgRight: true
  },
  {
    heading: "Roster Set Up",
    subText: "Control roster setup in the office.",
    list: [
      "After shift setup and choosing employees for roster duty, admin assigns the roster duty.",
      "Admin assigns employees according to the shift duties.",
      "Admin clicks on the employees and then selects the roster date and timetable.",
      "Admin can also drag and drop employees in the roster table."
    ],
    img: "/img/products/shift/SM4.png",
    imgRight: false
  },
  {
    heading: "Shift Management Report",
    subText: "Control roster setup in the office with detailed reports.",
    list: [
      "Various reports are available in HR360 Software.",
      "Attendance reports can be generated monthly, weekly, or daily at any time.",
      "Extra time reports, overtime reports, and attendance analysis reports can also be generated."
    ],
    img: "/img/products/shift/SM5.png",
    imgRight: true
  }
];

const ShiftManagementPage = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-red-100 via-red-50 to-white">
      <div className="container mx-auto px-10 space-y-20">

        {/* Hero Section */}
        <div className="flex  pt-16 flex-col md:flex-row items-center gap-6">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <p className="text-base font-medium text-gray-600">Shift Management</p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tighter -mt-4">
              Looking for employee scheduling, shift management, and attendance management solution?
            </h1>
            <p className="text-gray-700 mt-4">
              Get Shift Set up, Roster management, and all features with the best HR software in Bangladesh.
            </p>
            <button className="px-6 py-3 bg-sky-500 text-white font-bold rounded-full hover:bg-sky-600 transition mt-4">
              Contact Us
            </button>
          </div>

          <div className="flex-1 w-full">
            <Image 
              src="/img/products/shift/SM1.png"
              alt="Shift Management Illustration"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Sections */}
        {shiftSections.map((sec, idx) => (
          <div key={idx} className="flex flex-col md:flex-row items-center gap-10">
            {/* Text */}
            <div className={`flex-1 space-y-6 text-left ${sec.imgRight ? "order-2 md:order-1" : "order-2 md:order-2"}`}>
              <h2 className="text-4xl font-bold text-gray-900 -mt-2">{sec.heading}</h2>
              <p className="text-gray-700">{sec.subText}</p>
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

export default ShiftManagementPage;
