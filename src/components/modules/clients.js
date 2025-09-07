// app/clients/page.jsx
"use client";

import Image from "next/image";
import React from "react";
import { FaReact, FaArrowRight } from "react-icons/fa"; // React icon + arrow icon

const clients = [
  "/img/home/c1.svg",
  "/img/home/c9.svg",
  "/img/home/c10.svg",
  "/img/home/c2.svg",
  "/img/home/c5.svg",
  "/img/home/c6.svg",
  "/img/home/c7.svg",
  "/img/home/c8.svg",
  "/img/home/c1.svg",
  "/img/home/c9.svg",
  "/img/home/c10.svg",
  "/img/home/c2.svg",
  "/img/home/c5.svg",
  "/img/home/c6.svg",
  "/img/home/c7.svg",
  "/img/home/c8.svg"
];

const Clients = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-30">
          <h2 className="text-md lg:text-xl text-[#2f2f57]">
            Companies Using
          </h2>
          <p className="text-3xl lg:text-4xl text-[#141451] mt-4 font-bold">
             Modern HR & Payroll Software in Bangladesh
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-18 text-center mb-12">
          {clients.map((imgSrc, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-3 flex items-center justify-center"
            >
              <Image
                src={imgSrc}
                alt={`Client ${index + 1}`}
                width={174}
                height={170}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Buttons centered */}
        <div className="flex justify-center gap-28 mt-30">
          {/* Get Started */}
          <button className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-full transition">
            Get Started
            <FaArrowRight size={20} />
          </button>

          {/* Contact */}
          <button className="flex items-center border border-sky-500 gap-2  hover:bg-gray-100 text-sky-500 font-semibold py-4 px-7 rounded-full transition">
            Contact
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Clients;
