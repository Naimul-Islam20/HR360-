"use client";

import Link from "next/link";

export default function CoreHRPage() {
  return (
    <div className="max-w-7xl space-y-20 px-4 md:px-42">
      <h1 className="text-3xl font-bold mb-6">Core HR</h1>
      <p className="text-gray-700 mb-6">
        Organize and empower your entire workforce with our Core HR solutions. 
        Manage employee data, streamline HR processes, and boost productivity.
      </p>
      <p className="text-gray-700 mb-6">
        Organize and empower your entire workforce with our Core HR solutions. 
        Manage employee data, streamline HR processes, and boost productivity.
      </p>
      <p className="text-gray-700 mb-6">
        Organize and empower your entire workforce with our Core HR solutions. 
        Manage employee data, streamline HR processes, and boost productivity.
      </p>
      <p className="text-gray-700 mb-6">
        Organize and empower your entire workforce with our Core HR solutions. 
        Manage employee data, streamline HR processes, and boost productivity.
      </p>
      <p className="text-gray-700 mb-6">
        Organize and empower your entire workforce with our Core HR solutions. 
        Manage employee data, streamline HR processes, and boost productivity.
      </p>
      <p className="text-gray-700 mb-6">
        Organize and empower your entire workforce with our Core HR solutions. 
        Manage employee data, streamline HR processes, and boost productivity.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Features:</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Centralized employee records</li>
          <li>Effortless attendance management</li>
          <li>Automated leave and schedule handling</li>
          <li>Secure and robust access control</li>
        </ul>
      </div>

      <div className="mt-6">
        <Link
          href="/get-started"
          className="px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
