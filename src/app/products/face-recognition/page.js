// app/face-recognition/page.jsx
"use client";

import React from "react";
import Image from "next/image";
import { AiOutlineCheckCircle } from "react-icons/ai";

// Section Content Array
const faceSections = [
  {
    heading: "Automate Attendance System Using Face Recognition",
    subText:
      "Our face recognition system is integrated into a simple mobile app, making attendance automation easy and accurate.",
    list: [
      "Quickly register faces with a selfie from the app.",
      "Real-time sync with internet connection for updated attendance data.",
      "Clean and user-friendly interface for both employees and admins.",
    ],
    img: "/img/products/face/face2.png",
    imgRight: false,
  },
  {
    heading: "Real-Time Attendance & Location Tracking",
    subText:
      "Track employee attendance in real-time and monitor location with GPS integration.",
    list: [
      "Instantly check who is present or absent.",
      "Captures exact check-in/check-out time for precise records.",
      "GPS ensures employees mark attendance from the correct location.",
    ],
    img: "/img/products/face/face3.png",
    imgRight: true,
  },
  {
    heading: "Ensure Access Security",
    subText:
      "Prevent fake attendance entries and improve security with advanced recognition checks.",
    list: [
      "Eye-blink detection ensures only live persons can check in.",
      "Blocks photo or video-based fraudulent attendance.",
      "Admins can securely verify and approve rostering.",
    ],
    img: "/img/products/face/face4.png",
    imgRight: false,
  },
  {
    heading: "Remote Attendance & Reports",
    subText:
      "Employees can mark attendance remotely and admins can generate detailed reports anytime.",
    list: [
      "Supports remote attendance for distributed teams.",
      "Reports show attendance trends, absenteeism, and punctuality.",
      "Seamlessly integrates with existing HR systems and scales easily.",
    ],
    img: "/img/products/face/face5.png",
    imgRight: true,
  },
];

const FaceRecognitionPage = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-green-200 via-green-100 to-white">
      <div className="space-y-20 container">
        {/* Hero Section */}
        <div className="flex  pt-16 flex-col md:flex-row items-center gap-6">
          {/* Left Side Text */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <p className="text-base font-medium text-gray-600">
              Face Recognition Attendance System
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tighter -mt-4">
              Face Recognition Attendance Management Software
            </h1>
            <p className="text-gray-700 mt-4">
              Collect attendance with facial recognition. Manage employee
              presence in real-time, ensure access security, and stop
              unauthorized entries — all powered by AI-based recognition in
              Bangladesh.
            </p>
            <button className="px-6 py-3 bg-sky-500 text-white font-bold rounded-full hover:bg-sky-600 transition mt-4">
              Contact Us
            </button>
          </div>

          {/* Right Side Image */}
          <div className="flex-1 w-full">
            <Image
              src="/img/products/face/face1.png"
              alt="Face Recognition Attendance"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Sections */}
        {faceSections.map((sec, idx) => (
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

export default FaceRecognitionPage;
