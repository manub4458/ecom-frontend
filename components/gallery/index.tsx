"use client";

import Image from "next/image";
import { ProductImage } from "@/types";
import {
  Tabs,
  TabsContent,
  TabsList
} from "@/components/ui/tabs";
import { GalleryTab } from "./gallery-tab";
import { PiShareFatFill } from "react-icons/pi";
import { useShareModal } from "@/hooks/use-share-modal";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

interface GalleryProps {
  images: ProductImage[];
}

export const Gallery = ({ images }: GalleryProps) => {
  const { onOpen } = useShareModal();

  return (
    <div className="w-full">
      {/* Mobile Swiper View */}
      <div className="block md:hidden aspect-[3/4] relative">
        <Swiper
          spaceBetween={10}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="w-full h-full"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="relative aspect-[3/4] w-full h-full">
                <Image
                  src={image.url}
                  alt="Product Image"
                  fill
                  className="object-cover aspect-[3/4]"
                />
                <div
                  className="absolute h-10 w-10 top-4 right-4 rounded-full flex items-center justify-center md:cursor-pointer bg-white/70 backdrop-blur-sm"
                  onClick={onOpen}
                >
                  <PiShareFatFill className="text-zinc-700 h-6 w-6" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Tabs View */}
      <Tabs
        defaultValue={images[0].id}
        className="hidden md:flex flex-col-reverse md:px-24 lg:px-20 xl:px-28 relative"
        role="div"
      >
        <div className="mx-auto mt-6 lg:mt-2 w-full max-w-2xl lg:max-w-none lg:absolute top-0 left-0 lg:w-16">
          <TabsList className="grid grid-cols-4 lg:grid-cols-1 gap-4 md:gap-6 lg:gap-4 h-auto bg-white">
            {images.map((image) => (
              <GalleryTab key={image.id} image={image} />
            ))}
          </TabsList>
        </div>
        {images.map((image) => (
          <TabsContent
            key={image.id}
            value={image.id}
            className="aspect-[3/4] relative overflow-hidden"
          >
            <Image
              src={image.url}
              alt="Product Image"
              fill
              className="object-cover aspect-[3/4]"
            />
            <div
              className="absolute h-10 w-10 top-4 right-4 rounded-full flex items-center justify-center md:cursor-pointer bg-white/70 backdrop-blur-sm"
              onClick={onOpen}
            >
              <PiShareFatFill className="text-zinc-700 h-6 w-6" />
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
