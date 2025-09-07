"use client";

import React from "react";
import Image from "next/image";
import { AiOutlineCheckCircle } from "react-icons/ai";

// Section Content Array
const taskSections = [
  {
    heading: "Employee Task Management",
    subText:
      "Boosting your company’s productivity is our first priority. It saves both valuable time and energy!",
    list: [
      "Task management means tracking each task through its full lifecycle and making decisions according to progress.",
      "With HR360 software, you can organize and manage tasks more effectively by using features such as creation, planning, assigning, tracking, and reporting.",
    ],
    img: "/img/products/task/task2.png",
    imgRight: false,
  },
  {
    heading: "Employee Task Creation",
    subText:
      "Stay on top of your daily or weekly work by creating instant tasks in your to-do list.",
    list: [
      "Using HR360, you can easily create tasks by setting titles, assigning employees, choosing start and end dates, priorities, categories, status, descriptions, and uploading any required documents.",
      "Both individuals and team leaders can create tasks from the mobile app as well.",
      "Once a task is created, the assigned person immediately receives a notification.",
    ],
    img: "/img/products/task/task3.png",
    imgRight: true,
  },
  {
    heading: "Task Details",
    subText: "Get detailed updates and manage additional information on tasks.",
    list: [
      "Supervisors or admins can monitor the status and progress of assigned tasks.",
      "After assignment, employees can update the task status and leave comments on activities.",
      "Both creators and assignees are able to exchange comments for better collaboration.",
      "Employees can also record check-in/check-out whenever they visit a company site.",
    ],
    img: "/img/products/task/task4.png",
    imgRight: false,
  },
  {
    heading: "Task Report",
    subText: "Generate in-depth task progress reports within HR360.",
    list: [
      "Create reports by selecting date ranges and filtering employees or task status.",
      "Admins can track department-wise task reports for better performance insights.",
      "In payslips, all adjustments, deductions, and related breakdowns are also reflected.",
    ],
    img: "/img/products/task/task5.png",
    imgRight: true,
  },
  {
    heading: "Check In - Check Out",
    subText:
      "Easily record check-ins and check-outs at office or client locations.",
    list: [
      "Employees can check in and out at a client’s office or branch while performing tasks.",
      "Simple buttons are available for quick check in and check out actions.",
      "Check-in/out can also be done directly from the mobile app.",
      "Admins instantly receive notifications with location details.",
    ],
    img: "/img/products/task/task6.png",
    imgRight: false,
  },
  {
    heading: "Customers",
    subText:
      "Maintain and manage your company’s customer lists inside HR360 software.",
    list: [
      "Customer lists are useful for task management and client interactions.",
      "Admins can define a location radius for customer offices or branches.",
      "Employees can only check in/out within the allowed radius set by admin.",
    ],
    img: "/img/products/task/task7.png",
    imgRight: true,
  },
];

const TaskManagementPage = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-yellow-100 via-yellow-50 to-white">
      <div className="container mx-auto px-10 space-y-20">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Left Side Text */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <p className="text-base font-medium text-gray-600">
              Task Management
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tighter -mt-4">
              Employee Task Management System
            </h1>
            <p className="text-gray-700 mt-4">
              A complete solution for assigning, tracking, and reporting tasks.
              Create activities, manage responsibilities, and improve workflow
              with HR360 — the all-in-one HR management system.
            </p>
            <button className="px-6 py-3 bg-sky-500 text-white font-bold rounded-full hover:bg-sky-600 transition mt-4">
              Contact Us
            </button>
          </div>

          {/* Right Side Image */}
          <div className="flex-1 w-full">
            <Image
              src="/img/products/task/task1.png"
              alt="Task Management"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Sections */}
        {taskSections.map((sec, idx) => (
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

export default TaskManagementPage;
