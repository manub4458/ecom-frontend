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
} from "lucide-react";
import Link from "next/link";
import useMediaQuery from "@/hooks/use-mediaquery";
import { Popover, Transition } from "@headlessui/react";
import { menuCategories, userMenuItems } from "@/utils/constant";
import { MenuItem } from "@/types";

export default function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState<string[]>([]);
  const isMobile = useMediaQuery("(max-width: 600px)");

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
    <header className="bg-black text-white py-4 px-6 shadow-md">
      <div className="flex items-center justify-between">
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
        <div className="flex items-center space-x-4">
          <Popover className="relative">
            {({ open, close }) => (
              <>
                <Popover.Button className="focus:outline-none">
                  <User size={20} />
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
            <Link href="/checkout/cart">
              <ShoppingCart size={20} />
            </Link>
          </button>
        </div>
      </div>
      {/* Search Bar */}
      <div className="mt-4">
        <div className="relative">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full py-2 px-4 rounded-full text-black focus:outline-none"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <Search size={20} className="text-gray-500" />
          </button>
        </div>
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
                      {
                        category.name === "Home Appliances" && (
                          // item.label === "Air Coolers" ? (
                          <div>
                            <div className="flex items-center justify-between py-1 px-2 rounded-md hover:bg-gray-800 transition-colors">
                              <span className="text-sm text-gray-300">
                                {item.label}{" "}
                                {item.count !== undefined && `(${item.count})`}
                              </span>
                              {category.subItems &&
                                typeof category.subItems === "object" &&
                                !Array.isArray(category.subItems) &&
                                (
                                  category.subItems as Record<
                                    string,
                                    MenuItem[]
                                  >
                                )[item.label] && (
                                  <button
                                    onClick={() =>
                                      toggleCategory(
                                        `${category.name}-${item.label}`
                                      )
                                    }
                                    className="focus:outline-none"
                                  >
                                    {openCategories.includes(
                                      `${category.name}-${item.label}`
                                    ) ? (
                                      <Minus
                                        size={14}
                                        className="text-gray-400"
                                      />
                                    ) : (
                                      <Plus
                                        size={14}
                                        className="text-gray-400"
                                      />
                                    )}
                                  </button>
                                )}
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
                                (
                                  category.subItems as Record<
                                    string,
                                    MenuItem[]
                                  >
                                )[item.label] && (
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
                                        className="block text-xs text-gray-400 hover:text-white hover:underline transition-colors"
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
                        )
                        // ) : (
                        //   <Link
                        //     href={item.href}
                        //     className="block text-sm py-1 px-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                        //     onClick={() => setIsMenuOpen(false)}
                        //   >
                        //     {item.label}{" "}
                        //     {item.count !== undefined && `(${item.count})`}
                        //   </Link>
                        // )
                      }
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
