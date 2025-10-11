"use client";

import React from "react";
import Image from "next/image";
import { AiOutlineCheckCircle } from "react-icons/ai";

// Section Content Array
const notificationSections = [
  {
    heading: "Mail Notifications",
    subText:
      "Keep employees informed with HR360 mail notifications sent directly to their inbox.",
    list: [
      "Notifications for leave applications, payslips, visits, daily attendance, claims, and more.",
      "Ensure every employee receives timely updates without manual follow-ups.",
      "Admins can customize which notifications are sent to whom.",
    ],
    img: "/img/products/notifications/N2.png",
    imgRight: false,
  },
  {
    heading: "Pop-up Notifications",
    subText:
      "Instant alerts on mobile devices help employees stay updated in real-time.",
    list: [
      "Pop-up notifications appear immediately when applications are submitted.",
      "One-click navigation takes employees directly to the relevant app section.",
      "Applications like leave, notices, visit, and remote attendance are displayed instantly.",
    ],
    img: "/img/products/notifications/N3.png",
    imgRight: true,
  },
];

const NotificationsPage = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-yellow-100 via-yellow-50 to-white">
      <div className="space-y-20 px-4 md:px-42">
        {/* Hero Section */}
        <div className="flex  pt-16 flex-col md:flex-row items-center gap-6">
          {/* Left Side Text */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <p className="text-base font-medium text-gray-600">
              Notifications
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tighter -mt-4">
              The Best App-based HRM Notifications
            </h1>
            <p className="text-gray-700 mt-4">
              HR360 makes employee communication seamless with mail and pop-up
              notifications. Keep everyone informed, improve workflow, and
              simplify HR management in Bangladesh.
            </p>
            <button className="px-6 py-3 bg-sky-500 text-white font-bold rounded-full hover:bg-sky-600 transition mt-4">
              Contact Us
            </button>
          </div>

          {/* Right Side Image */}
          <div className="flex-1 w-full">
            <Image
              src="/img/products/notifications/N1.png"
              alt="Notifications Feature"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Sections */}
        {notificationSections.map((sec, idx) => (
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

export default NotificationsPage;
