"use client";

import Image from "next/image";
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
  "/img/home/c8.svg"
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
        `}
      </style>

      <div className="w-full bg-white py-12">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-md lg:text-xl text-[#2f2f57]">
            Companies Using
          </h2>
          <p className="text-3xl lg:text-4xl text-[#141451] mt-4 font-bold">
            Modern HR & Payroll Software in Bangladesh
          </p>
        </div>

        {/* Clients Marquee */}
        <div className="overflow-hidden whitespace-nowrap w-full py-8">
          <div className="marquee">
            {repeatedClients.map((imgSrc, i) => (
              <div
                key={i}
                className="inline-flex bg-white border border-gray-100 rounded-lg p-3 items-center justify-center"
                style={{ width: 160, height: 70 }}
              >
                <Image
                  src={imgSrc}
                  alt={`Client ${i + 1}`}
                  width={140}
                  height={160}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Buttons centered below marquee */}
        <div className="flex justify-center gap-12 mt-16">
          {/* Get Started */}
          <button className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-4 px-4 rounded-full transition">
            Get Started
            <FaArrowRight size={20} />
          </button>

          {/* Contact */}
          <button className="flex items-center border border-sky-500 gap-2 hover:bg-gray-100 text-sky-500 font-semibold py-4 px-4 rounded-full transition">
            Contact
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </>
  );
}
