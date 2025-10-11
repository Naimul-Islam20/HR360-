"use client";

import React from "react";
import Image from "next/image";
import { AiOutlineCheckCircle } from "react-icons/ai";

// Section content array
const sections = [
  {
    heading: "Employee Leave App’s Benefits",
    subText: "It manages your employee absences and leaves with cloud-based HRM Software. This absence & leave management software has features like Employee Leave Applications, Leave Calendar, Leave Reliever, and more.",
    list: [
      "It helps employees to work from anywhere.",
      "HR360 Leave Management Software has replaced traditional hard copy applications.",
      "Staff can easily submit their leave application through mobile app or web.",
      "This Employee Leave App will send the leave application to the layerwise approver.",
      "Leave requests can be accepted or rejected quickly."
    ],
    img: "/img/products/employee/EL2.svg",
    imgRight: false,
  },
  {
    heading: "Leave Reliever",
    subText: "All Hours is a cloud-based leave management system that enables you to efficiently manage, approve, and track leave requests and absences from any device.",
    list: [
      "If an employee goes on leave, they can assign someone to complete their tasks.",
      "When an employee applies for leave and selects a leave reliever, the reliever will get an email notification."
    ],
    img: "/img/products/employee/EL3.webp",
    imgRight: true,
  },
  {
    heading: "Leave Status",
    subText: "Our HR360 dashboard allows you to view the status of leaves allotted to each employee.",
    list: [
      "Admins can look up each employee’s leave status, counts, replacements, and more data.",
      "Office staff can also check their leave status through HR360 app or web portal."
    ],
    img: "/img/products/employee/el4.svg",
    imgRight: false,
  },
  {
    heading: "Multiple Leaves Approver",
    subText: "HR360 provides a feature for multiple layers of leave approval.",
    list: [
      "Admins can set the parameters for leave approvers.",
      "Multiple layers can be added for approving leave requests.",
      "Approvers are informed and can approve or reject accordingly."
    ],
    img: "/img/products/employee/EL5.webp",
    imgRight: true,
  },
  {
    heading: "Leave Calendar",
    subText: "Staff can use the app or web portal to view how much leave they have scheduled or already taken during the year.",
    list: [
      "Leave calendar is available in mobile app and web.",
      "Through the leave calendar, anyone from any department can see the leave applications of a team.",
      "Anyone can apply for leaves after knowing others’ leave status."
    ],
    img: "/img/products/employee/EL6.webp",
    imgRight: false,
  }
];

const EmployeeLeavePage = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-orange-100 via-orange-50 to-white">
      <div className="space-y-20 px-4 md:px-42">

        {/* Hero Section */}
        <div className="flex pt-16  flex-col md:flex-row items-center gap-6">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <p className="text-base font-medium text-gray-600">Employee Leave</p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tighter -mt-4">
              Employee Leave Management
            </h1>
            <p className="text-gray-700 mt-4">
              Track all types of leave, No spreadsheets, No paper. HR work is not limited to the desk. You may need to do a small task from home at the weekend, from a tour on vacation, or outside of the office. So, it’s important to have mobile application features of your HRMS. It manages your employee absences and leaves with cloud-based HRM Software. This absence & leave management software has features like Employee Leave Applications, Leave Calendar, Leave Reliever, and much more.
            </p>
            <button className="px-6 py-3 bg-sky-500 text-white font-bold rounded-full hover:bg-sky-600 transition mt-4">
              Contact Us
            </button>
          </div>

          <div className="flex-1 w-full">
            <Image 
              src="/img/products/employee/EL1.webp"
              alt="Employee Leave Management"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Sections */}
        {sections.map((sec, idx) => (
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

export default EmployeeLeavePage;
