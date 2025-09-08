// app/hrFeatures.js
"use client";

import React from "react";
import * as FaIcons from "react-icons/fa";

const features = [
  {
    icon: "FaMapMarkerAlt",
    name: "Mobile Attendance Tracking with GPS",
    desc: "The HR360 app simplifies attendance management with accurate, real-time tools.",
    points: [
      "GPS-based location tracking and biometric selfie attendance",
      "Cloud-synced data visible instantly on your dashboard",
      "Supports remote workforces, field staff, and hybrid models"
    ]
  },
  {
    icon: "FaMapMarkedAlt",
    name: "Geo-Fencing for Attendance",
    desc: "Control where your team can clock in.",
    points: [
      "Restrict attendance to office or job sites",
      "Prevent false or remote check-ins",
      "Boost accountability in your HR system"
    ]
  },
  {
    icon: "FaLocationArrow",
    name: "Live Location Tracking",
    desc: "Track employee location live during working hours.",
    points: [
      "Manage mobile and field staff easily",
      "Increase transparency and operational control",
      "Reduce location-related attendance fraud"
    ]
  },
  {
    icon: "FaRegCalendarCheck",
    name: "Instant Leave Requests & Approvals",
    desc: "Digital leave management at your fingertips.",
    points: [
      "Submit and approve leave anytime, anywhere",
      "Live leave balance tracking for employees",
      "HR stays informed through real-time updates"
    ]
  },
  {
    icon: "FaBusinessTime",
    name: "Shift & Schedule Management",
    desc: "Efficient scheduling is critical for workforce performance.",
    points: [
      "Create and assign employee shifts",
      "Notify staff of changes instantly",
      "Maintain consistent workforce coverage"
    ]
  },
  {
    icon: "FaWallet",
    name: "Payslip & Payroll Access",
    desc: "Ensure payroll transparency with mobile access to payslips and salary breakdowns.",
    points: [
      "View and download payslips on-demand",
      "Breakdown includes gross salary, deductions, bonuses",
      "Integrated with your existing payroll process"
    ]
  },
  {
    icon: "FaBell",
    name: "Real-Time HR Notifications",
    desc: "Keep employees informed with push notifications.",
    points: [
      "HR announcements",
      "Policy updates",
      "Attendance, leave, and payroll deadlines"
    ]
  },
  {
    icon: "FaUsers",
    name: "Employee Management Dashboard",
    desc: "Access and manage employee data in real time",
    points: [
      "Centralized employee profiles with salary, leave, and attendance history",
      "Lifecycle tracking from onboarding to exit",
      "Admin and managers can update employee info securely"
    ]
  },
  {
    icon: "FaFileInvoiceDollar",
    name: "Auto-Generated Salary Certificate",
    desc: "Control Generate official salary certificates with one tap",
    points: [
      "Includes monthly payroll, deductions, and net pay",
      "Ready for bank, visa, and internal use",
      "Signable by HR/Admin for authenticity"
    ]
  },
  {
    icon: "FaCogs",
    name: "Seamless Integration with Web-Based HR Platform",
    desc: "The mobile app connects directly with Rysenova's web dashboard",
    points: [
      "Real-time sync across devices",
      "Unified experience for HR, admins, and employees",
      "Avoids data duplication and reduces errors"
    ]
  },
  {
    icon: "FaChartBar",
    name: "Reporting & Analytics",
    desc: "Generate real-time HR reports, analyze attendance data, and ensure payroll compliance.",
    points: [
      "Visualize employee attendance, leave balances, and payroll summaries",
      "Make data-driven decisions with built-in HR reporting tools",
      "Streamline audits and forecasting with detailed workforce analytics"
    ]
  },
  {
    icon: "FaShieldAlt",
    name: "Security & Access Control",
    desc: "Protect HR and payroll data with secure access.",
    points: [
      "Assign user permissions to HR, admins, and managers",
      "Prevent unauthorized access to sensitive employee information",
      "Ensure full HR data security aligned with GDPR and local labor laws"
    ]
  }
];

const HrFeatures = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-14">
        {/* Page Title */}
        <div className="text-start mb-12">
          <h2 className="text-xl text-gray-500">
            Key Features of HR360 Mobile App
          </h2>
          <p className="text-3xl text-[#141451] font-bold mt-4">
            Smart Workforce Management Designed for Every Sector
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => {
            const Icon = FaIcons[feature.icon] || FaIcons.FaCircle;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-4 hover:shadow hover:border-sky-500 border border-gray-200 transition text-start"
                style={{ maxWidth: '400px', minHeight: '340px' }}
              >
                <Icon className="text-3xl text-blue-500 mb-4" />
                <h3 className="text-xl text-[#141451] font-semibold mb-2">{feature.name}</h3>
                <p className="text-[#141451] text-sm mb-4">{feature.desc}</p>
                <ul className="text-[#141451] text-sm list-disc list-outside pl-5 text-left">
                  {feature.points.map((point, i) => (
                    <li key={i} className="mb-1">{point}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HrFeatures;
