"use client";

import React from "react";
import Image from "next/image";
import { AiOutlineCheckCircle } from "react-icons/ai";

// Section content arrays
const section1 = {
  heading: "Employee Time & Attendance Tracking with HR360",
  list: [
    "Employees can easily mark their attendance using the HR360 Mobile App or the web portal.",
    "With geo-fencing enabled, attendance is validated only within the assigned location radius, ensuring compliance with company policies."
  ],
  img: "/img/products/AM2.svg",
  imgRight: false,
};

const section2 = {
  heading: "Remote Attendance Tracking with HR360",
  list: [
    "Employees can mark their attendance from anywhere using the HR360 Mobile App or web portal.",
    "Supervisors, Admins, and HR teams can easily access real-time location data to monitor attendance efficiently and ensure compliance."
  ],
  img: "/img/products/AM3.svg",
  imgRight: true,
};

const section3 = {
  heading: "Overtime Calculation & Management with HR360",
  list: [
    "Fully Automated System: HR360 allows companies to calculate and manage overtime automatically.",
    "Quick Processing: Overtime can be processed within seconds, saving time and effort.",
    "Track Employee Hours: HRs and Admins can easily monitor total working hours for accurate payroll and compliance."
  ],
  img: "/img/products/AM4.svg",
  imgRight: false, // image left
};

const section4 = {
  heading: "Employee Attendance Reporting with HR360",
  list: [
    "Flexible Reports: Generate attendance reports daily, weekly, or monthly as per requirement.",
    "Instant Access: Reports can be quickly accessed anytime by the appropriate authority.",
    "Detailed Analysis: Create extra time reports, overtime reports, and attendance analysis effortlessly."
  ],
  img: "/img/products/AM5.svg",
  imgRight: true, // image right
};

// Array of all sections for easy mapping
const sections = [section1, section2, section3, section4];

const page = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-100 via-blue-50 to-white">
      <div className="container mx-auto px-10 space-y-20">

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row pt-16 items-center gap-6">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <p className="text-base font-medium text-gray-600">TIME & ATTENDANCE</p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tighter -mt-4">
              Cloud Based Employee’s Time and Attendance Management Software
            </h1>
            <p className="text-gray-700 mt-4">
              Manage employee attendance with the best Attendance Management Software, Real-time Time, and Attendance tracking software in Bangladesh. It can do employees’ real-time attendance monitoring, Overtime tracking, attendance management, remote attendance tracking, biometric integration, and more.
            </p>
            <button className="px-6 py-3 bg-sky-500 text-white font-bold rounded-full hover:bg-sky-600 transition mt-4">
              Contact Us
            </button>
          </div>

          <div className="flex-1 w-full">
            <Image 
              src="/img/products/AM1.svg"
              alt="Attendance Software Illustration"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Map sections 1-4 */}
        {sections.map((sec, idx) => (
          <div key={idx} className="flex flex-col md:flex-row items-center gap-10">
            {/* Text */}
            <div className={`flex-1 space-y-6 text-left ${sec.imgRight ? "order-2 md:order-1" : "order-2 md:order-2"}`}>
              <h2 className="text-4xl font-bold text-gray-900 -mt-2">{sec.heading}</h2>
              <ul className="text-gray-700 space-y-6">
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

export default page;
