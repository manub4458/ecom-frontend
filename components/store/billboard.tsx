"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Custom Arrow Components
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md cursor-pointer z-10 hover:bg-gray-200"
      onClick={onClick}
    >
      <ChevronRight size={24} className="text-gray-800" />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md cursor-pointer z-10 hover:bg-gray-200"
      onClick={onClick}
    >
      <ChevronLeft size={24} className="text-gray-800" />
    </div>
  );
};

const HeroSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  // Define banners with mobile-specific images
  const slides = [
    {
      id: 1,
      desktopImage: "/assets/hero/banner1.webp",
      mobileImage: "/assets/hero/banner-mobile.jpeg",
    },
    {
      id: 2,
      desktopImage: "/assets/hero/banner2.webp",
      mobileImage: "/assets/hero/banner-mobile-2.jpg",
    },
    {
      id: 3,
      desktopImage: "/assets/hero/banner3.webp",
      mobileImage: "/assets/hero/banner-mobile-3.jpeg",
    },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Slider {...settings} className="h-full">
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-full h-screen">
            {/* For mobile devices */}
            <div className="block sm:hidden w-full h-full">
              <Image
                src={slide.mobileImage}
                alt={`Slide ${slide.id}`}
                fill
                sizes="100vw"
                className="object-cover object-center"
                priority
              />
            </div>

            {/* For tablets and desktop */}
            <div className="hidden sm:block w-full h-full">
              <Image
                src={slide.desktopImage}
                alt={`Slide ${slide.id}`}
                fill
                sizes="100vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
