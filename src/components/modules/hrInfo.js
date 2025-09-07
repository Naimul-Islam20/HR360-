"use client";

import Image from "next/image";
import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Hr360Info = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="ms-10 space-y-3">
            <h2 className="text-lg font-bold text-gray-500">
              WHAT IS HR360?
            </h2>
            <p className="text-2xl lg:text-3xl mb-10 font-bold text-[#141451]">
              HR360 – Modern HR & Payroll Software for Bangladeshi Businesses
            </p>

            {/* Tick icon for each paragraph */}
            <p className="flex text-sm gap-4 text-gray-700">
              <AiOutlineCheckCircle className="text-sky-500 text-sm w-6 h-6 flex-shrink-0 mt-1" />
              Tired of paying your HR employees yet getting slow results? Rysenova
              simplifies and automates HR tasks offering the most advanced core
              HR software solution for businesses in Bangladesh.
            </p>

            <p className="flex text-sm gap-4 text-gray-700">
              <AiOutlineCheckCircle className="text-sky-500 text-sm w-6 h-6  flex-shrink-0 mt-1" />
              Our cloud-based platform provides real-time insights, reduces
              administrative workload, and ensures compliance with Bangladesh
              labor laws.
            </p>

            <p className="flex text-sm gap-4 text-gray-700">
              <AiOutlineCheckCircle className="text-sky-500 text-sm w-6 h-6   flex-shrink-0 mt-1" />
              Our cloud-based platform ensures an efficient, compliant, and
              error-free human resource management system.
            </p>

            <p className="flex text-sm gap-4 text-gray-700">
              <AiOutlineCheckCircle className="text-sky-500 text-sm w-6 h-6  flex-shrink-0 mt-1" />
              Managing HR tasks manually is time-consuming, costly, and prone to
              errors. Rysenova is here to change that through advanced core HR
              software solutions.
            </p>

            <p className="flex text-sm gap-4 text-gray-700">
              <AiOutlineCheckCircle className="text-sky-500 text-sm w-6 h-6  flex-shrink-0 mt-1" />
              With Rysenova, you can automate your entire HR process, from
              payroll and leave management to onboarding and employee performance
              tracking.
            </p>

            <p className="flex text-sm gap-4 text-gray-700">
              <AiOutlineCheckCircle className="text-sky-500 text-sm w-6 h-6  flex-shrink-0 mt-1" />
              Rysenova is the leading HR and payroll software in Bangladesh
              offering cloud-based solution for small businesses and enterprises
              alike, trusted for its payroll automation, attendance tracking, and
              employee management features.
            </p>

            <p className="flex gap-4 mt-8 text-xl text-gray-700 font-semibold">
              Interested? Request a live demo.
            </p>

            <button className="mt-4 bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-full transition">
              Contact Us
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center mr-10 lg:justify-end">
            <Image
              src="/img/home/home-people-web.webp"
              alt="Rysenova Illustration"
              width={600}
              height={600}
              className="rounded-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hr360Info;
