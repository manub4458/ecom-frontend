"use client";
import React, { useState } from "react";
import { Search, MapPin, User, ShoppingCart } from "lucide-react";
import Link from "next/link";
import useMediaQuery from "@/hooks/use-mediaquery";

export default function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");

  if (!isMobile) {
    return null;
  }

  return (
    <header className="bg-black text-white py-4 px-6 shadow-md">
      {/* Top Row: Logo, Menu Button, Profile, Cart */}
      <div className="flex items-center justify-between">
        {/* Logo and Menu Button */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <img
              width="120px"
              className="rounded-md"
              src="/assets/favo-logo.jpg"
              alt="Favo Logo"
            />
          </Link>
          {/* <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none"
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
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button> */}
        </div>

        {/* Menu for larger screens */}
        {/* <div className="hidden md:flex items-center space-x-2">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center space-x-1 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            <span>Menu</span>
          </button>
        </div> */}

        {/* Right Side: Location, Profile, Cart */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-1">
            <MapPin size={20} />
            <span>Mumbai, 400049</span>
          </div>
          <button>
            <User size={20} />
          </button>
          <button className="relative">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>

      {/* Search Bar: Below on mobile, inline on larger screens */}
      <div className="mt-4 md:mt-0 md:mx-4 md:flex-1 md:max-w-lg">
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
    </header>
  );
}
