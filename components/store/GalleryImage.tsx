import Image from "next/image";

const images = [
  {
    href: "https://www.favobliss.com/mixer-juicer-grinder",
    src: "https://www.favobliss.com/image/cache/catalog/carousel/mixer-grinder-juice-300x400.png",
    srcSet:
      "https://www.favobliss.com/image/cache/catalog/carousel/mixer-grinder-juice-300x400.png 1x, https://www.favobliss.com/image/cache/catalog/carousel/mixer-grinder-juice-600x800.png 2x",
    alt: "Mixer Grinder",
    width: 300,
    height: 400,
  },
  {
    href: "https://www.favobliss.com/Speakers",
    src: "https://www.favobliss.com/image/cache/catalog/boat-spiker-600x600.jpg",
    srcSet:
      "https://www.favobliss.com/image/cache/catalog/boat-spiker-600x600.jpg 1x, https://www.favobliss.com/image/cache/catalog/boat-spiker-1200x1200.jpg 2x",
    alt: "BoAt Speaker",
    width: 600,
    height: 600,
  },
  {
    href: "https://www.favobliss.com/Latest-Trendy-Fashionable-Watches",
    src: "https://www.favobliss.com/image/cache/catalog/carousel/favobliss-fastival-offer%20(7)-300x400w.jpg",
    srcSet:
      "https://www.favobliss.com/image/cache/catalog/carousel/favobliss-fastival-offer%20(7)-300x400w.jpg 1x, https://www.favobliss.com/image/cache/catalog/carousel/favobliss-fastival-offer%20(7)-600x800w.jpg 2x",
    alt: "Fashionable Watches",
    width: 300,
    height: 400,
  },
];

const Gallery = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-6 mx-auto">
      {images.map((img, index) => (
        <a
          key={index}
          href={img.href}
          className="block overflow-hidden rounded-lg shadow-md bg-white hover:scale-105 transition-transform"
        >
          <div
            className={`relative ${
              img.width > img.height ? "aspect-square" : "aspect-[3/4]"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
              className="object-cover"
            />
          </div>
        </a>
      ))}
    </div>
  );
};

export default Gallery;
