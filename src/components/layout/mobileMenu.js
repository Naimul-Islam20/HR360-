"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { GoChevronUp, GoChevronDown } from "react-icons/go";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";

// Dynamic Icon Resolver
function getIcon(iconName) {
  if (!iconName) return BiIcons.BiCircle;
  if (BiIcons[iconName]) return BiIcons[iconName];
  if (FaIcons[iconName]) return FaIcons[iconName];
  return BiIcons.BiCircle;
}

const MobileMenu = ({ isOpen, onClose, menus }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef();

  // Close sidebar when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  const toggleMenu = (id) => {
    setActiveMenu((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col min-h-screen`}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-300 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-black">Menu</h2>
          <button
            onClick={onClose}
            className="text-2xl text-black"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Menu Items */}
        <ul className="p-4 space-y-2 overflow-y-auto flex-1">
          {menus.map((menu) => {
            const hasChildren = menu.has_child;

            return (
              <li key={menu.id} className="border-b border-gray-300 pb-2">
                {hasChildren ? (
                  <>
                    {/* Parent menu (no icon) */}
                    <div
                      className="flex justify-between items-center cursor-pointer py-2"
                      onClick={() => toggleMenu(menu.id)}
                      role="button"
                      aria-expanded={activeMenu === menu.id}
                    >
                      <span className="text-sm font-medium text-black">
                        {menu.menu_name}
                      </span>
                      {activeMenu === menu.id ? <GoChevronUp /> : <GoChevronDown />}
                    </div>

                    {/* Dropdown children */}
                    {activeMenu === menu.id && (
                      <ul className="pl-4 mt-2 space-y-2">
                        {menu.children.map((child) => {
                          const ChildIcon = getIcon(child.menu_icon);
                          return (
                            <li key={child.id}>
                              <Link
                                href={`/${child.menu_uid}`}
                                onClick={onClose}
                                className="flex items-start space-x-3 py-2 hover:bg-gray-100 rounded"
                              >
                                <ChildIcon
                                  style={{ color: child.icon_color }}
                                  className="w-5 h-5 mt-1"
                                />
                                <div>
                                  <span className="block text-sm font-medium text-black">
                                    {child.menu_name}
                                  </span>
                                  <span className="block text-xs text-gray-500">
                                    {child.description}
                                  </span>
                                </div>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </>
                ) : (
                  // Normal link
                  <Link
                    href={`/${menu.menu_uid}`}
                    className="block text-sm text-gray-800 py-2"
                    onClick={onClose}
                  >
                    {menu.menu_name}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
