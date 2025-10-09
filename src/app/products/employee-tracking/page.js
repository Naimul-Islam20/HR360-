"use client";

import React from "react";
import Image from "next/image";
import { AiOutlineCheckCircle } from "react-icons/ai";

// Section content array
const monitoringSections = [
  {
    heading: "Employee Monitoring",
    subText: "From HR360, you can track your employees as they work.",
    list: [
      "Easily track your employees through HR360 Software.",
      "Admins or supervisors/managers can check last location and tracking history.",
      "Admin has to enable tracking for specific employees.",
      "Admin can check tracking history by selecting Plotting and Run time options."
    ],
    img: "/img/products/tracking/ET2.png",
    imgRight: false
  },
  {
    heading: "Schedule Tracking",
    subText: "Schedule tracking for employees to ensure efficient monitoring.",
    list: [
      "Schedules for tracking are really needed.",
      "Admin has to create schedules and assign employees according to the schedule."
    ],
    img: "/img/products/tracking/ET3.png",
    imgRight: true
  },
  {
    heading: "Tracking Report",
    subText: "View detailed tracking reports right on your computer.",
    list: [
      "Tracking reports are available in HR360 Software.",
      "Admin can get the tracking report for a certain date.",
      "Tracking data is updated within 5 minutes.",
      "Admin can get the address along with the timestamp in the report."
    ],
    img: "/img/products/tracking/ET4.png",
    imgRight: false
  }
];

const EmployeeMonitoringPage = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-violet-200 via-violet-100 to-white">
      <div className="space-y-20 px-4 md:px-64">

        {/* Hero Section */}
        <div className="flex flex-col pt-16  md:flex-row items-center gap-6">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <p className="text-base font-medium text-gray-600">Employee Monitoring</p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tighter -mt-4">
              Employee Tracking
            </h1>
            <p className="text-gray-700 mt-4">
              Employee Location Tracking, Time and Attendance Tracking, Tracking Report, and all HR management features in one solution at the most affordable plan. Time and attendance tracking software is important for a company to keep track. Try our HR360 demo for the best experience.
            </p>
            <button className="px-6 py-3 bg-sky-500 text-white font-bold rounded-full hover:bg-sky-600 transition mt-4">
              Contact Us
            </button>
          </div>

          <div className="flex-1 w-full">
            <Image 
              src="/img/products/tracking/ET1.png"
              alt="Employee Monitoring Illustration"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Sections */}
        {monitoringSections.map((sec, idx) => (
          <div key={idx} className="flex flex-col md:flex-row items-center gap-10">
            {/* Text */}
            <div className={`flex-1 space-y-6 text-left ${sec.imgRight ? "order-2 md:order-1" : "order-2 md:order-2"}`}>
              <h2 className="text-4xl font-bold text-gray-900 -mt-2">{sec.heading}</h2>
              <p className="text-gray-800">{sec.subText}</p>
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

export default EmployeeMonitoringPage;
