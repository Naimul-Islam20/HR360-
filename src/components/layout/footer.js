"use client";

import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#141451] text-gray-100 pt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 px-6">
        {/* Contact Us */}
        <div className="space-y-7">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>House 39 (Level 4), Road 8, Block k, Halishahar, Aghrabad, Chitagong</p>
          <p><Link href="mailto:biz.dev@hr360.com" className="underline">biz.dev@hr360.com</Link></p>
          <p>+880 17 1342 8432 (Sales)</p>
          <p>+880 9606 881188 (Support)</p>
          <p>Trade License: TRAD/DNCC/029071/2023</p>
        </div>

        {/* Features */}
        <div className="space-y-7">
          <h3 className="text-lg font-semibold mb-4">Features</h3>
          <ul className="space-y-6">
            <li><Link href="products/attendance-management" className="hover:underline">Attendance Management Software</Link></li>
            <li><Link href="products/shift-management" className="hover:underline">Shift Management Employee</Link></li>
            <li><Link href="products/leaves-management" className="hover:underline">Leave Application</Link></li>
            <li><Link href="products/payroll" className="hover:underline">Payroll Software</Link></li>
            <li><Link href="products/tax-management" className="hover:underline">Tax Management</Link></li>
            <li><Link href="products/expense-management" className="hover:underline">Expense Management</Link></li>
          </ul>
        </div>

        {/* More Features */}
        <div className="space-y-7">
          <h3 className="text-lg font-semibold mb-4">More Features</h3>
          <ul className="space-y-6">
            <li><Link href="#" className="hover:underline">Employee Management Tool</Link></li>
            <li><Link href="products/employee-tracking" className="hover:underline">Employee Tracking</Link></li>
            <li><Link href="products/task-management" className="hover:underline">Task Management</Link></li>
            <li><Link href="products/digital-notice-board" className="hover:underline">Digital Notice Board</Link></li>
            <li><Link href="products/notifications" className="hover:underline">Notifications</Link></li>
            <li><Link href="products/security" className="hover:underline">Security</Link></li>
            <li><Link href="products/face-recognition" className="hover:underline">Face Recognition</Link></li>
          </ul>
        </div>

        {/* Explore */}
        <div className="space-y-7">
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-6">
            <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
          
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
           
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
<div className="border-t border-gray-600 mt-6 py-1">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
    {/* Left: Logo + copyright */}
   <div className="flex items-center ">
  <Image src="/hr360-logo.png" alt="HR360 Logo" width={100} height={70} />
  <p className="text-sm">
    © {new Date().getFullYear()} HR360 |{' '}
    <Link href="https://muktodhara.com" className="underline hover:text-sky-500">
      Muktodhara Technology Limited
    </Link>
  </p>
</div>

    {/* Right: Social icons */}
    <div className="flex gap-4 mt-4 md:mt-0">
      <Link href="#" className="hover:text-sky-500"><FaLinkedin size={18} /></Link>
      <Link href="#" className="hover:text-sky-500"><FaFacebookF size={18} /></Link>
      <Link href="#" className="hover:text-sky-500"><FaInstagram size={18} /></Link>
      <Link href="#" className="hover:text-sky-500"><FaYoutube size={18} /></Link>
    </div>
  </div>
</div>

    </footer>
  );
}
