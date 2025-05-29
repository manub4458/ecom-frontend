"use client";
import React, { useState } from "react";
import {
  Search,
  MapPin,
  User,
  ShoppingCart,
  Menu,
  Plus,
  Minus,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import useMediaQuery from "@/hooks/use-mediaquery";
import { Popover, Transition } from "@headlessui/react";
import { menuCategories, userMenuItems } from "@/utils/constant";
import { MenuItem } from "@/types";

// Search categories data (same as desktop)
const searchCategories = [
  "All",
  "Air Conditioners",
  "Boat Speakers",
  "Bosch Washing Machines",
  "Carrier Air Conditioners",
  "Daikin Air Conditioners",
  "Electronics",
  "Food Processors",
  "Hair Dryers",
  "Home Appliances",
  "Kitchen Appliances",
  "Personal Care",
  "Television",
  "Washing Machine",
];

export default function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1000px)");

  if (!isMobile) {
    return null;
  }

  // Toggle category expansion
  const toggleCategory = (categoryName: string) => {
    setOpenCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((name) => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  return (
    <header className="bg-black text-white py-4 px-4 shadow-md">
      {/* Top Row: Menu Icon, Logo, Profile, Cart */}
      <div className="flex items-center justify-between">
        {/* Left: Menu Icon and Logo */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <Menu size={24} className="text-white" />
          </button>
          <Link href="/">
            <img
              width="120px"
              className="rounded-md"
              src="/assets/favo-logo.jpg"
              alt="Favo Logo"
            />
          </Link>
        </div>

        {/* Right: Profile, Cart */}
        <div className="flex items-start space-x-4">
          <Popover className="relative">
            {({ open, close }) => (
              <>
                <Popover.Button className="focus:outline-none">
                  <User size={24} />
                </Popover.Button>
                <Transition
                  show={open}
                  as={React.Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Popover.Panel
                    static
                    className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50 border border-gray-200"
                  >
                    <div className="py-2">
                      {userMenuItems.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-blue-800 transition-colors"
                          onClick={() => close()}
                        >
                          {React.createElement(item.icon)}
                          <span>{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          <button className="relative">
            <ShoppingCart size={24} />
          </button>
        </div>
      </div>

      {/* Search Bar with Dropdown */}
      <div className="mt-4 relative">
        <div className="relative flex bg-white overflow-hidden rounded-[6px]">
          {/* Category Dropdown Button */}
          <div className="relative">
            <button
              onClick={() => setIsSearchDropdownOpen(!isSearchDropdownOpen)}
              className="flex items-center gap-1 bg-[rgb(238,140,29)] text-white px-3 py-2 text-xs font-medium hover:bg-[rgb(238,140,29)] transition-colors min-w-max rounded-l-[6px] h-full"
            >
              <span className="truncate max-w-[80px]">{selectedCategory}</span>
              <ChevronDown
                size={14}
                className={`transform transition-transform flex-shrink-0 ${
                  isSearchDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* Search Input */}
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search for Product Brands..."
              className="w-full py-2 px-4 text-black focus:outline-none text-sm h-10"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <Search size={18} className="text-gray-500" />
            </button>
          </div>
        </div>

        {/* Dropdown Menu */}
        {isSearchDropdownOpen && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-md shadow-lg z-[9999] max-h-48 overflow-y-auto mt-1">
            <div className="py-1">
              {searchCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsSearchDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Click outside to close dropdown */}
        {isSearchDropdownOpen && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsSearchDropdownOpen(false)}
          />
        )}
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-black text-white transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 shadow-lg rounded-r-md`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold text-white">Menu</h2>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="focus:outline-none p-1 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="overflow-y-auto h-full p-4">
          {menuCategories.map((category, index) => (
            <div
              key={category.name}
              className={`${
                index !== menuCategories.length - 1
                  ? "border-b border-gray-700"
                  : ""
              } pb-2 mb-2`}
            >
              <div className="flex items-center justify-between py-2 px-2 rounded-md hover:bg-gray-800 transition-colors">
                <span className="text-base font-medium text-white">
                  {category.name}
                </span>
                {(category.items.length > 0 ||
                  (category.subItems &&
                    Object.keys(category.subItems).length > 0)) && (
                  <button
                    onClick={() => toggleCategory(category.name)}
                    className="focus:outline-none"
                  >
                    {openCategories.includes(category.name) ? (
                      <Minus size={16} className="text-gray-400" />
                    ) : (
                      <Plus size={16} className="text-gray-400" />
                    )}
                  </button>
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openCategories.includes(category.name)
                    ? "max-h-[1000px]"
                    : "max-h-0"
                }`}
              >
                <div className="pl-4 pt-2 space-y-2">
                  {category.items.map((item) => (
                    <div key={item.label}>
                      {category.name === "Home Appliances" &&
                      category.subItems &&
                      typeof category.subItems === "object" &&
                      !Array.isArray(category.subItems) &&
                      (category.subItems as Record<string, MenuItem[]>)[
                        item.label
                      ] ? (
                        <div>
                          <div className="flex items-center justify-between py-1 px-2 rounded-md hover:bg-gray-800 transition-colors">
                            <span className="text-sm text-gray-300">
                              {item.label}{" "}
                              {item.count !== undefined && `(${item.count})`}
                            </span>
                            <button
                              onClick={() =>
                                toggleCategory(`${category.name}-${item.label}`)
                              }
                              className="focus:outline-none"
                            >
                              {openCategories.includes(
                                `${category.name}-${item.label}`
                              ) ? (
                                <Minus size={14} className="text-gray-400" />
                              ) : (
                                <Plus size={14} className="text-gray-400" />
                              )}
                            </button>
                          </div>
                          <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                              openCategories.includes(
                                `${category.name}-${item.label}`
                              )
                                ? "max-h-[1000px]"
                                : "max-h-0"
                            }`}
                          >
                            {category.subItems &&
                              typeof category.subItems === "object" &&
                              !Array.isArray(category.subItems) &&
                              (category.subItems as Record<string, MenuItem[]>)[
                                item.label
                              ] && (
                                <div className="pl-4 pt-2 space-y-1 flex flex-col gap-2">
                                  {(
                                    category.subItems as Record<
                                      string,
                                      MenuItem[]
                                    >
                                  )[item.label].map((subItem) => (
                                    <Link
                                      key={subItem.label}
                                      href={subItem.href}
                                      className="block text-xs text-gray-300 hover:text-white hover:underline transition-colors"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {subItem.label}{" "}
                                      {subItem.count !== undefined &&
                                        `(${subItem.count})`}
                                    </Link>
                                  ))}
                                </div>
                              )}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="block text-sm py-1 px-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}{" "}
                          {item.count !== undefined && `(${item.count})`}
                        </Link>
                      )}
                    </div>
                  ))}
                  {category.subItems &&
                    Array.isArray(category.subItems) &&
                    category.subItems.length > 0 && (
                      <div className="mt-2">
                        <h4 className="text-sm font-semibold text-gray-400">
                          {category.name === "Electronics"
                            ? "Air Coolers"
                            : category.name === "Computer & Printer"
                            ? "Computer Accessories"
                            : "Top Categories"}
                        </h4>
                        <div className="pl-4 pt-2 space-y-1">
                          {category.subItems.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="block text-sm py-1 px-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.label}{" "}
                              {subItem.count !== undefined &&
                                `(${subItem.count})`}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}
