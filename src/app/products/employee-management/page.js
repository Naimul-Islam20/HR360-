"use client";

import React from "react";
import Image from "next/image";
import { AiOutlineCheckCircle } from "react-icons/ai";

// Section content array
const employeeManagementSections = [
  {
    heading: "Basic Employee Info",
    subText: "A soft copy of your certificates and other professional documents can be plugged into the HR360 software's employee information list.",
    list: [
      "Every employee’s details must be recorded by the company in the employee management software.",
      "In HR360 Software, using the employee management software you can store all the information like Contact, email address, phone number, Blood group, Joining date, etc.",
      "For employee accounts, email id and password are mandatory."
    ],
    img: "/img/products/employee-manege/EM2.png",
    imgRight: false
  },
  {
    heading: "Attached Document",
    subText: "The ability to add any kind of soft copy to an employee's listed information is available in the software program.",
    list: [
      "Employees documents are very important to be stored in employee management tool.",
      "Within the software, any kind of soft copy like CV, Educational Certificates, etc. can be attached to the employee’s information list.",
      "Admin/HR can archive the documents according to their work process."
    ],
    img: "/img/products/employee-manege/EM3.png",
    imgRight: true
  },
  {
    heading: "Employment History",
    subText: "The admin can input the figure of the previous company's name, employment duration, and income records in this section.",
    list: [
      "Employment history is needed to be stored for a company.",
      "Who came from which company needed to be tracked.",
      "Admin can input the previous company’s name, work duration, previous salary at this section."
    ],
    img: "/img/products/employee-manege/EM4.png",
    imgRight: false
  },
  {
    heading: "Supervisor Selection",
    subText: "Human Resources managers and supervisors can be selected in this spot.",
    list: [
      "Supervisors need to be selected for the applications which are made by the employees.",
      "Supervisors, direct supervisors can be selected at this section."
    ],
    img: "/img/products/employee-manege/EM5.jpg",
    imgRight: true
  },
  {
    heading: "Report Template",
    subText: "HR360 has various sorts of report templates that you can use in your work.",
    list: [
      "Any kind of documents like NOC, experience certificate etc can be generated through HR360 Software.",
      "Just provide the valid information and the template will be generated accordingly."
    ],
    img: "/img/products/employee-manege/EM6.jpg",
    imgRight: false
  },
  {
    heading: "Employee Hierarchy",
    subText: "An annual survey of employees' status will be presented in this report. The transfer, promotion, or designation of employees can be made visible in this summary.",
    list: [
      "In this report you can easily get the overall status of an employee.",
      "An employees transfer, promotion, designation status will be shown in the report."
    ],
    img: "/img/products/employee-manege/em7.png",
    imgRight: true
  }
];

const EmployeeManagementPage = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-red-100 via-red-50 to-white">
      <div className="space-y-20 px-4 md:px-38">

        {/* Hero Section */}
        <div className="flex flex-col  pt-16  md:flex-row items-center gap-6">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <p className="text-base font-medium text-gray-600">Employee Management</p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tighter -mt-4">
              Employee Management Software
            </h1>
            <p className="text-gray-700 mt-4">
              Most Handy Employee Management Tool with employee Info, Documents, Employment History, Supervisor Selection, Reporting, Report, Employee Hierarchy, and more. Take a tour through our Employee Management Software and have the best experience.
            </p>
            <button className="px-6 py-3 bg-sky-500 text-white font-bold rounded-full hover:bg-sky-600 transition mt-4">
              Contact Us
            </button>
          </div>

          <div className="flex-1 w-full">
            <Image 
              src="/img/products/employee-manege/EM1.svg"
              alt="Employee Management Software Illustration"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Sections */}
        {employeeManagementSections.map((sec, idx) => (
          <div key={idx} className="flex flex-col md:flex-row items-center gap-10">
            {/* Text */}
            <div className={`flex-1 space-y-8 text-left ${sec.imgRight ? "order-2 md:order-1" : "order-2 md:order-2"}`}>
              <h2 className="text-5xl font-bold text-gray-900 -mt-2">{sec.heading}</h2>
              <p className="text-gray-700">{sec.subText}</p>
              <ul className="text-gray-700 space-y-4">
                {sec.list.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-300">
                    <AiOutlineCheckCircle className="text-sky-500 w-6 h-6 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className={`flex-1 w-full ${sec.imgRight ? "order-1 md:order-2" : "order-1 md:order-1"}`}>
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

export default EmployeeManagementPage;
