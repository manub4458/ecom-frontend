"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Using lucide-react for icons

// Custom Next Arrow Component
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

// Custom Prev Arrow Component
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

const HotDealSlider: React.FC = () => {
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
  };

  const slides = [
    {
      id: 1,
      image: "/assets/hero/banner1.webp",
      title: "Hot Deal 1",
      description: "Discover the best products at unbeatable prices.",
    },
    {
      id: 2,
      image: "/assets/hero/banner2.webp",
      title: "Exclusive Deals",
      description: "Get exclusive discounts and limited-time offers.",
    },
    {
      id: 3,
      image: "/assets/hero/banner3.webp",
      title: "New Arrivals",
      description: "Check out the latest trends and new collections.",
    },
  ];

  return (
    <div className="relative w-full mx-auto h-[80vh]">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <Image
              src={slide.image}
              alt={slide.title}
              width={1280}
              height={500}
              className="w-full h-[80vh] object-cover rounded-lg"
              priority
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-4">
              <h2 className="text-3xl font-bold">{slide.title}</h2>
              <p className="text-lg mt-2">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HotDealSlider;
