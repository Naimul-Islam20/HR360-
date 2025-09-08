// components/sections/HeroSection.jsx
"use client";

import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section 
      className="bg-cover  bg-gradient-to-b from-sky-200 via-sky-100 to-white bg-center min-h-[120vh] pt-32"  // height barano
      // style={{ backgroundImage: "url('/img/home/Banner.svg')" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Column - Text */}
          <div className="flex-1 ps-3 space-y-6">
            {/* First two headings in one line */}
            <h1 className="text-blue-900 text-lg font-bold inline">
              You’ve come to the right place! 
            </h1>
            {/* <span className="text-blue-900 text-lg font-bold inline ml-2">
              All in one platform for HR Management
            </span> */}

            <p className="text-5xl lg:text-6xl text-[#141451] font-bold leading-tight">
              HR360 – Modern HR & Payroll Software for Bangladeshi Businesses
            </p>

            <div className="mt-4 space-y-8">
              <p className="text-[#272758] font-bold text-xl">
                Trusted by 500+ Companies
              </p>
              <p className="text-gray-600 font-bold">
                HR360 is the best HR software in Bangladesh. Transform the way your HR department works. Manage HR and payroll activities from a single software. HR360 is used by more than 500 companies across the country.
              </p>
              <button className="px-6 py-3 bg-sky-500 text-white font-bold rounded-full hover:bg-sky-600 transition">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex-1">
            <Image 
              src="/img/home/hero-image-1.png"
              alt="HR Software Illustration"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
