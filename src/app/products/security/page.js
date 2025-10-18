"use client";

import React from "react";
import Image from "next/image";
import { AiOutlineCheckCircle } from "react-icons/ai";

// Section content array
const securitySections = [
  {
    heading: "Device Change Request",
    subText: "Change requests need to be accepted before an employee can log in to his mobile application with the credentials.",
    list: [
      "1 mobile app for an individual user.",
      "When an employee login to his/her mobile app with the credentials, they will not be able to change the employee account until the device change request is accepted.",
      "Only an admin can accept or reject the request."
    ],
    img: "/img/products/security/S2.svg",
    imgRight: false
  },
  {
    heading: "User Setup",
    subText: "Create and configure your new employee profile with the HR360 Software program easily.",
    list: [
      "Make a user category.",
      "Assign employees according to the category.",
      "Admin can easily edit, delete and reset passwords.",
      "Admin can set the screen permissions."
    ],
    img: "/img/products/security/S3.svg",
    imgRight: true
  },
  {
    heading: "User Setup",
    subText: "Create and configure your new employee profile with the HR360 Software program easily.",
    list: [
      "Make a user category.",
      "Assign employees according to the category.",
      "Admin can easily edit, delete and reset passwords.",
      "Admin can set the screen permissions."
    ],
    img: "/img/products/security/S4.svg",
    imgRight: false
  },
  {
    heading: "HTTPS",
    subText: "We use high security for safeguarding our visitors' data.",
    list: [
      "We are maintaining SSL/TLS (https) for any data transfer and it is DV (Domain validation) certificate which will be reissued every 90 days.",
      "The HTTPS request is already verified by hosting and certificates."
    ],
    img: "/img/products/security/S5.svg",
    imgRight: true
  },
  {
    heading: "SQL Injection",
    subText: "We're using a standard algorithm and parameterized SQL operations to shield our HR360 software from numerous kinds of malicious attacks.",
    list: [
      "This is one of the most common hacking techniques which might destroy our database.",
      "We are maintaining a standard coding structure and parameterized SQL operations to protect our HR360 Software from any kind of malicious attack or hacking technique like SQL Injection."
    ],
    img: "/img/products/security/S6.svg",
    imgRight: false
  },
  {
    heading: "Data Encryption",
    subText: "Information from HR360 Software is kept confidential.",
    list: [
      "Data is securely protected in our HR360 Software.",
      "We consider our own developed encryption/decryption technique for password mechanism."
    ],
    img: "/img/products/security/S7.svg",
    imgRight: true
  }
];

const SecurityPage = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-green-100 via-green-50 to-white">
      <div className="space-y-12 md:space-y-20 px-4 sm:px-6 md:px-10 lg:px-24 xl:px-36 2xl:px-48">

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 pt-12 md:pt-16">
          <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
            <p className="text-base font-medium text-gray-600">Security</p>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-snug -mt-2">
              HR360 Keep Your Data Safe and Confidential
            </h1>
            <p className="text-gray-700 text-sm sm:text-base md:text-base mt-2 md:mt-4">
              Employee management became secured and powerful by HR360 – Best HRIS software in Bangladesh. Employee location tracking, task management and all-in-one solution.
            </p>
            <button className="px-5 py-2 sm:px-6 sm:py-3 bg-sky-500 text-white font-bold rounded-full hover:bg-sky-600 transition mt-3 md:mt-4">
              Contact Us
            </button>
          </div>

          <div className="flex-1 w-full">
            <Image 
              src="/img/products/security/S1.png"
              alt="Security Software Illustration"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Sections */}
        {securitySections.map((sec, idx) => (
          <div key={idx} className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* Text */}
            <div className={`flex-1 space-y-3 sm:space-y-4 text-left order-2 md:${sec.imgRight ? "order-1" : "order-2"}`}>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 -mt-1 sm:-mt-2">{sec.heading}</h2>
              <p className="text-gray-700 text-sm sm:text-base">{sec.subText}</p>
              <ul className="text-gray-700 space-y-3 sm:space-y-4">
                {sec.list.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 sm:gap-4 bg-white p-3 sm:p-4 rounded-xl border border-gray-300">
                    <AiOutlineCheckCircle className="text-sky-500 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1" />
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className={`flex-1 w-full order-1 md:${sec.imgRight ? "order-2" : "order-1"}`}>
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

export default SecurityPage;
