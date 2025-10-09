"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const clients = [
  "/img/home/c1.svg",
  "/img/home/c9.svg",
  "/img/home/c10.svg",
  "/img/home/c2.svg",
  "/img/home/c5.svg",
  "/img/home/c6.svg",
  "/img/home/c7.svg",
  "/img/home/c8.svg",
];

export default function ClientsMarquee() {
  const repeatedClients = [...clients, ...clients]; // continuous marquee

  return (
    <>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .marquee {
            display: inline-flex;
            gap: 2rem;
            animation: marquee 50s linear infinite;
          }

          @media (max-width: 768px) {
            .marquee {
              gap: 1rem;
              animation: marquee 35s linear infinite; /* faster on mobile */
            }
          }
        `}
      </style>

      <div className="w-full bg-white py-5 md:py-16">
        {/* Title */}
        <div className="text-center mb-10 md:mb-12 px-4">
          <h2 className="text-sm md:text-md lg:text-xl text-[#2f2f57]">
            Companies Using
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl text-[#141451] mt-3 md:mt-4 font-bold leading-snug">
            Modern HR & Payroll Software in Bangladesh
          </p>
        </div>

        {/* Clients Marquee */}
        <div className="overflow-hidden whitespace-nowrap w-full py-6 md:py-8">
          <div className="marquee">
            {repeatedClients.map((imgSrc, i) => (
              <div
                key={i}
                className="inline-flex bg-white border border-gray-100 rounded-lg items-center justify-center 
                  p-2 md:p-3"
                style={{
                  width: 120,
                  height: 55,
                }}
              >
                <Image
                  src={imgSrc}
                  alt={`Client ${i + 1}`}
                  width={100}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Buttons always side by side */}
        <div className="flex justify-center items-center flex-wrap gap-4 sm:gap-8 md:gap-12 mt-12 md:mt-16 px-4">
          {/* Get Started */}
          <Link
            href="/get-started"
            className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold 
            py-3 px-5 sm:py-4 sm:px-7 rounded-full transition text-sm sm:text-base whitespace-nowrap"
          >
            Get Started
            <FaArrowRight size={16} className="sm:size-5" />
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className="flex items-center border border-sky-500 gap-2 hover:bg-gray-100 text-sky-500 font-semibold 
            py-3 px-5 sm:py-4 sm:px-7 rounded-full transition text-sm sm:text-base whitespace-nowrap"
          >
            Contact
            <FaArrowRight size={16} className="sm:size-5" />
          </Link>
        </div>
      </div>
    </>
  );
}
