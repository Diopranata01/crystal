import { useState, useEffect } from "react";
import Image from "next/image";

const HomeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      src: "/assets/room/1.webp",
      alt: "Executive Suite",
      title: "Executive Suite",
      description: "Live Endless Entertainment at Our Comfort Suites",
    },
    {
      src: "/assets/room/2.webp",
      alt: "Suite Room",
      title: "Suite Room",
      description: "Relax by the beautiful of Suite Room",
    },
    // Add more images as needed
  ];

  // To automatically move the slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-[100%] h-[280px] overflow-hidden">
      {/* Slider */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute transition-all duration-700 ease-in-out w-full h-full ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 translate-y-[20%] scale-[1.4]"
          />
          <div className="absolute inset-0 ps-8 flex flex-col items-start justify-center text-center text-white bg-black bg-opacity-70">
            <div className="absolute flex mt-10 flex-col items-start gap-4">
              <h2 className="text-md md:text-xl lg:text-xl">{image.title}</h2>
              <p className="text-sm font-light">{image.description}</p>
            </div>
            <div className="absolute bottom-2 mb-6 flex gap-4 items-center">
              <button className="bg-[#c4ae86] border border-[#c4ae86] text-white px-4 py-2 focus:outline-none h-[34px] w-[100px] rounded-sm text-[12px]">
                Book now
              </button>
              <button className="bg-transparent border border-[#c4ae86] text-[#c4ae86] px-4 py-2 focus:outline-none h-[34px] w-[120px] rounded-sm text-[12px]">
                Discover More
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Slider Controls with Arrow Animation */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
        <button onClick={prevSlide} className="flex flex-col items-center">
          <span className="block w-4 h-4 border-b-2 border-r-2 border-[#c4ae86] left-button"></span>
        </button>
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <button onClick={nextSlide} className="flex flex-col items-center">
          <span className="block w-4 h-4 border-b-2 border-r-2 border-[#c4ae86] right-button"></span>
        </button>
      </div>
    </div>
  );
};

export default HomeSlider;
