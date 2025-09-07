"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import menus from "@/data/menus";
import { BiChevronDown, BiCircle } from "react-icons/bi";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import Image from "next/image";

// Dynamic Icon Resolver
function getIcon(iconName) {
  if (!iconName) return BiCircle;
  if (BiIcons[iconName]) return BiIcons[iconName];
  if (FaIcons[iconName]) return FaIcons[iconName];
  return BiCircle;
}

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  // Click outside listener
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-[8px] shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-22">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/hr360-logo.png"
                alt="HR360 Logo"
                width={140}
                height={40}
                priority
              />
            </Link>
          </div>

          {/* Menu + Button */}
          <div className="flex items-center space-x-6">
            {/* Menu */}
            <ul className="flex space-x-6">
              {menus.map((menu) => {
                const childCount = menu.children?.length || 0;
                const hasChildren = menu.has_child;

                return (
                  <li
                    key={menu.id}
                    className="relative flex flex-col items-start"
                  >
                    {/* Parent Menu */}
                    {hasChildren ? (
                      <div
                        className="flex items-center cursor-pointer font-medium hover:text-blue-600"
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === menu.id ? null : menu.id
                          )
                        }
                      >
                        <span>{menu.menu_name}</span>
                        <BiChevronDown className="ml-1" />
                      </div>
                    ) : (
                      <Link
                        href={`/${menu.menu_uid}`}
                        className="font-medium hover:text-blue-600"
                      >
                        {menu.menu_name}
                      </Link>
                    )}

                    {/* Dropdown */}
                    {hasChildren && openDropdown === menu.id && (
                      <div
                        className={`
                          absolute top-full mt-8 bg-white shadow-lg border border-gray-300 z-50 p-6
                          ${
                            childCount > 10
                              ? "left-7/1 transform -translate-x-4/4 w-[95vw] max-w-[1600px]"
                              : childCount > 5
                              ? "left-1/2 transform -translate-x-1/2 min-w-[700px]"
                              : "left-1/2 transform -translate-x-1/2 min-w-[280px]"
                          }
                        `}
                      >
                        <div
                          className={`grid gap-4 ${
                            childCount > 10
                              ? "grid-cols-3"
                              : childCount > 5
                              ? "grid-cols-2"
                              : "grid-cols-1"
                          }`}
                        >
                          {menu.children.map((child) => {
                            const Icon = getIcon(child.menu_icon);
                            return (
                              <Link
                                key={child.id}
                                href={`/${child.menu_uid}`}
                                className="flex items-start space-x-3 p-3 hover:bg-gray-100 rounded"
                              >
                                <Icon
                                  style={{ color: child.icon_color }}
                                  className="mt-1 w-5 h-5"
                                />
                                <div className="flex flex-col">
                                  <span className="font-medium">
                                    {child.menu_name}
                                  </span>
                                  <span className="text-[11px] mt-1 text-gray-500">
                                    {child.description}
                                  </span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Get Started button */}
            <div className="ml-6">
              <Link
                href="/get-started-path" // এখানে তুমি path দেবে
                className="px-4 py-3 bg-sky-500 text-white font-bold rounded-full hover:bg-sky-600 transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
