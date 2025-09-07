"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#141451] text-gray-100 py-20"> {/* height আরও বড় */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 px-6"> {/* gap-16 করে সেকশনগুলোর মধ্যে দূরত্ব */}
        
        {/* Contact Us */}
        <div className="space-y-6"> {/* spacing বেশি */}
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>House 39 (Level 4), Road 8, Block k, Halishahar, Aghrabad, Chitagong</p>
          <p>📧 <Link href="mailto:biz.dev@hr360.com" className="underline">biz.dev@hr360.com</Link></p>
          <p>+880 17 1342 8432 (Sales)</p>
          <p>+880 9606 881188 (Support)</p>
          <p>Trade License: TRAD/DNCC/029071/2023</p>
        </div>

        {/* Features */}
        <div className="space-y-5">
          <h3 className="text-lg font-semibold mb-4">Features</h3>
          <ul className="space-y-4">
            <li><Link href="#" className="hover:underline">Attendance Management Software</Link></li>
            <li><Link href="#" className="hover:underline">Shift Management Employee</Link></li>
            <li><Link href="#" className="hover:underline">Leave Application</Link></li>
            <li><Link href="#" className="hover:underline">Payroll Software</Link></li>
            <li><Link href="#" className="hover:underline">Tax Management</Link></li>
            <li><Link href="#" className="hover:underline">Expense Management</Link></li>
          </ul>
        </div>

        {/* More Features */}
        <div className="space-y-5">
          <h3 className="text-lg font-semibold mb-4">More Features</h3>
          <ul className="space-y-4">
            <li><Link href="#" className="hover:underline">Employee Management Tool</Link></li>
            <li><Link href="#" className="hover:underline">Employee Tracking</Link></li>
            <li><Link href="#" className="hover:underline">Task Management</Link></li>
            <li><Link href="#" className="hover:underline">Digital Notice Board</Link></li>
            <li><Link href="#" className="hover:underline">Notifications</Link></li>
            <li><Link href="#" className="hover:underline">Security</Link></li>
            <li><Link href="#" className="hover:underline">Payment Link</Link></li>
          </ul>
        </div>

        {/* Explore */}
        <div className="space-y-5">
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-4">
            <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
            <li><Link href="/changelog" className="hover:underline">Change Log</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Link href="/privacy" className="hover:underline">Privacy</Link></li>
            <li><Link href="/refund-policy" className="hover:underline">Refund Policy</Link></li>
            <li><Link href="/terms" className="hover:underline">Terms & Conditions</Link></li>
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-600 mt-16 pt-8 text-center text-sm">
        © {new Date().getFullYear()} HR360. All Rights Reserved.
      </div>
    </footer>
  );
}
