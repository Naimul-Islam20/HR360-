"use client";

import React from "react";
import Image from "next/image";
import { AiOutlineCheckCircle } from "react-icons/ai";

// Section content array
const noticeBoardSections = [
  {
    heading: "Digital Notice Board",
    subText:
      "Create public announcements, bulletin board management, and more with the best HR management software.",
    list: [
      "Through HR360 Software you can easily display digital notice board.",
      "You will find it useful as no one has to go desk to desk to deliver a message.",
      "Just create a notice board from the admin panel and everyone will get a pop up notification through the app.",
    ],
    img: "/img/products/digital/DN2.svg",
    imgRight: false,
  },
  {
    heading: "Creation of Notices",
    subText: "Create notice and attach document with HR360.",
    list: [
      "An admin can create a notice from web and mobile app.",
      "An admin can easily send notice to an employee or a department or a branch.",
      "An admin can also attach any kind of document.",
    ],
    img: "/img/products/digital/DN3.png",
    imgRight: true,
  },
];

const DigitalNoticeBoardPage = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-yellow-100 via-yellow-50 to-white">
      <div className="container mx-auto px-10 space-y-20">
        {/* Hero Section */}
        <div className="flex flex-col  pt-16  md:flex-row items-center gap-6">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <p className="text-base font-medium text-gray-600">
              Digital Notice Board
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tighter -mt-4">
              Publish all types of information on a digital notice board
            </h1>
            <p className="text-gray-700 mt-4">
              Create announcements, notice board management, and more with
              HR360 – The best HR management software in Bangladesh. All HR
              solutions in one place. Try a demo!
            </p>
            <button className="px-6 py-3 bg-sky-500 text-white font-bold rounded-full hover:bg-sky-600 transition mt-4">
              Contact Us
            </button>
          </div>

          <div className="flex-1 w-full">
            <Image
              src="/img/products/digital/DN1.svg"
              alt="Digital Notice Board Illustration"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Sections */}
        {noticeBoardSections.map((sec, idx) => (
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

export default DigitalNoticeBoardPage;
