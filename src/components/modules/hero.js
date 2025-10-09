"use client";
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-gradient-to-b from-sky-200 via-sky-100 to-white bg-center min-h-[110vh]  pt-32"
    >
      <div className="container mx-auto px-6 md:px-18">
        <div className="flex flex-col lg:flex-row items-center md:items-start gap-12">
          
          {/* Left Column - Text */}
          <div className="flex-1 ps-3 space-y-6 text-center lg:text-left">
            {/* Heading */}
            <h1 className="text-blue-900 text-base sm:text-lg md:text-xl font-bold inline">
              You’ve come to the right place!
            </h1>

            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#141451] font-bold leading-tight">
              HR360 – Modern HR & Payroll Software for Bangladeshi Businesses
            </p>

            <div className="mt-4 space-y-6">
              <p className="text-[#272758] font-bold text-lg sm:text-xl">
                Trusted by 500+ Companies
              </p>

              <p className="text-gray-600 font-medium text-sm sm:text-base md:text-lg leading-relaxed">
                HR360 is the best HR software in Bangladesh. Transform the way your HR department works. 
                Manage HR and payroll activities from a single software. HR360 is used by more than 500 
                companies across the country.
              </p>

              <button className="px-5 py-2 sm:px-6 sm:py-3 bg-sky-500 text-white font-semibold sm:font-bold rounded-full hover:bg-sky-600 transition">
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
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
