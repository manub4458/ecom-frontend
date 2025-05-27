"use client";
import React from "react";
import { Search, MapPin, User, ShoppingCart, Linkedin } from "lucide-react";
import { MdArrowRight } from "react-icons/md";
import Link from "next/link";
import useMediaQuery from "@/hooks/use-mediaquery";
import { Popover, Transition } from "@headlessui/react";
import { menuCategories, userMenuItems } from "@/utils/constant";
import { MenuCategory, MenuItem } from "@/types";
import Logo from "@/public/assets/favo-logo.jpg";
import Image from "next/image";

export default function Header() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  if (isMobile) {
    return null;
  }

  const rightAlignedCategories = ["Computer & Printer", "Personal Care"];

  function doubleMenuCategory(category: string): boolean {
    const categories = [
      "Electronics",
      "Kitchen Appliances",
      "Computer & Printer",
    ];
    return categories.includes(category);
  }

  const renderHomeAppliancesMenu = (category: MenuCategory, close: any) => {
    return (
      <div className="py-2">
        {category.items.map((item) => (
          <div key={item.label} className="relative group w-max">
            <>
              <div className="flex items-center justify-between hover:bg-gray-50 px-4 py-2 cursor-pointer w-52">
                <div className="flex gap-2 items-center">
                  <Link
                    href={item.href}
                    className="text-xs text-black flex-1"
                    onClick={() => close()}
                  >
                    {item.label}
                  </Link>
                  <span className="bg-gray-500 text-white text-xs rounded-full text-center p-[2px] min-w-5 min-h-5 text-[10px] border border-transparent">
                    {item.count}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400 text-lg">
                    {<MdArrowRight />}
                  </span>
                </div>
              </div>

              {/* Submenu for Air Coolers */}
              <div className="absolute left-full top-0 ml-1 w-max bg-white border border-gray-200 rounded-md shadow-lg z-30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {category.subItems &&
                    typeof category.subItems === "object" &&
                    !Array.isArray(category.subItems) &&
                    category.subItems[item.label] &&
                    category.subItems[item.label].map((subItem: any) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="flex items-center gap-2 hover:bg-gray-50 px-4 py-2 text-xs text-black hover:text-blue-800"
                        onClick={() => close()}
                      >
                        <span>{subItem.label}</span>
                        <span className="bg-gray-500 text-white text-xs rounded-full text-center p-[2px] min-w-5 min-h-5 text-[10px] border border-transparent">
                          {subItem.count}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            </>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <header className="bg-black text-white py-4 px-6 flex items-center justify-between shadow-md">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              width={120}
              className="rounded-md"
              src={Logo}
              alt="Favo Logo"
            />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-4 max-w-lg">
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

        {/* Right Side: Location, Profile, Cart */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-1">
            <MapPin size={20} />
            <span>Mumbai, 400049</span>
          </div>
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
                    className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10 border border-gray-200"
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
      </header>

      <nav className="bg-black text-white py-2 px-6 flex justify-between items-center shadow-md flex-wrap gap-12 gap-y-5">
        {menuCategories.map((category) => (
          <Popover key={category.name} className="relative">
            {({ open, close }) => (
              <>
                <div
                  onMouseEnter={() => {
                    const button = document.getElementById(
                      `popover-button-${category.name}`
                    );
                    if (button) button.click();
                  }}
                  onMouseLeave={() => close()}
                >
                  <Popover.Button
                    id={`popover-button-${category.name}`}
                    className="text-sm hover:text-gray-300 focus:outline-none w-max"
                  >
                    {category.name.toUpperCase()}
                  </Popover.Button>
                </div>

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
                    className={`absolute mt-2 bg-white text-black rounded-md shadow-lg z-10 ${
                      rightAlignedCategories.includes(category.name)
                        ? "right-0"
                        : "left-0"
                    } ${
                      category.name === "Home Appliances" ? "w-max" : "w-96"
                    }`}
                    onMouseEnter={() => {
                      const button = document.getElementById(
                        `popover-button-${category.name}`
                      );
                      if (button) button.click();
                    }}
                    onMouseLeave={() => close()}
                  >
                    {/* Special handling for Home Appliances */}
                    {category.name === "Home Appliances"
                      ? renderHomeAppliancesMenu(category, close)
                      : /* Original logic for other categories */
                        (category.items.length > 0 ||
                          (Array.isArray(category.subItems) &&
                            category.subItems.length > 0)) && (
                          <div
                            className={`p-4 ${
                              doubleMenuCategory(category.name)
                                ? "grid grid-cols-2 gap-4"
                                : "unset"
                            }`}
                          >
                            <div>
                              <h3 className="text-orange-600 font-semibold mb-2">
                                {category.name === "Electronics" ||
                                category.name === "Kitchen Appliances" ||
                                category.name === "Computer & Printer"
                                  ? "Top Categories"
                                  : category.name}
                              </h3>
                              <div
                                className={`w-full ${
                                  doubleMenuCategory(category.name)
                                    ? "unset"
                                    : "grid grid-cols-2 gap-x-2"
                                }`}
                              >
                                {category.items.map((item) => (
                                  <div key={item.label} className="relative">
                                    <Link
                                      href={item.href}
                                      className="block text-sm text-blue-600 hover:underline hover:text-blue-800 py-1"
                                      onClick={() => close()}
                                    >
                                      {item.label}{" "}
                                      {item.count !== undefined &&
                                        `(${item.count})`}
                                    </Link>
                                  </div>
                                ))}
                              </div>
                            </div>
                            {category.subItems &&
                              Array.isArray(category.subItems) &&
                              category.subItems.length > 0 && (
                                <div>
                                  <h3 className="text-orange-600 font-semibold mb-2">
                                    {category.name === "Electronics"
                                      ? "Air Coolers"
                                      : category.name === "Computer & Printer"
                                      ? "Computer Accessories"
                                      : "Top Categories"}
                                  </h3>
                                  {category.subItems.map((subItem) => (
                                    <Link
                                      key={subItem.label}
                                      href={subItem.href}
                                      className="block text-sm text-blue-600 hover:underline hover:text-blue-800 py-1"
                                      onClick={() => close()}
                                    >
                                      {subItem.label}{" "}
                                      {subItem.count !== undefined &&
                                        `(${subItem.count})`}
                                    </Link>
                                  ))}
                                </div>
                              )}
                          </div>
                        )}
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        ))}
      </nav>
    </div>
  );
}
