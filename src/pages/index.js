import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Optional modules
import { Navigation, Pagination } from "swiper/modules";
import HomeSlider from "@/components/slider/homeSlider";

export default function Home() {
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
    <div className="min-h-screen p-0">
      {/* Full Width Image with Centered Text at the Top */}
      <div className="relative w-full h-screen overflow-hidden">
        <Image
          src="/assets/landing_page/main.webp" // Ensure the path is correct
          alt="Crystal Kuta"
          layout="fill" // Use layout fill to make it cover the container
          objectFit="cover" // Ensure the image covers the div
          className="absolute inset-0 translate-y-[20%] scale-[1.4]" // Shift right and zoom
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-70">
          <div>
            <h1 className="text-[30px] md:text-[30px] lg:text-[50px] font-bold italic">
              CRYSTAL KUTA
            </h1>
            <h2 className="text-md md:text-xl lg:text-2xl">HOTEL - BALI</h2>
            <br />
            <br />
            <h6 className="text-lg italic">
              Live Endless Entertainment at Kuta&apos;s Comfort Stay
            </h6>
          </div>

          {/* Arrow Animation positioned at the bottom */}
          <div className="absolute bottom-0 mb-8 flex flex-col items-center">
            <span className="block w-4 h-4 border-b-2 border-r-2 border-[#c4ae86] animate-bounce-45deg"></span>
            <span className="block w-4 h-4 border-b-2 border-r-2 border-[#c4ae86] animate-bounce-45deg mt-[-6px]"></span>
          </div>
        </div>
      </div>

      {/* Other Content Can Follow Here */}
      <main className="flex flex-col text-black gap-8 items-center sm:items-start w-full">
        {/* Additional content goes here */}

        {/* Content 1 */}
        <div className="flex flex-col md:flex-row justify-between w-full gap-8 p-5">
          {/* Image Container */}
          <div className="flex justify-center md:justify-start w-full h-[470px] md:w-[63.5%] overflow-hidden">
            <Image
              src="/assets/landing_page/2.webp"
              alt="Descriptive Image"
              className="transform translate-y-[20%] translate-x-[-2%] scale-[1.48] object-cover"
              width={700}
              height={500}
            />
          </div>
          {/* Text Container */}
          <div className="flex flex-col justify-center w-full md:w-1/2">
            <div className="py-4 pt-1">
              <h1 className="text-2xl md:text-[45px] font-bold italic">
                Crystalkuta Hotel - Bali
              </h1>
            </div>
            <p className="mt-5 mx-3 mr-4 text-md md:text-sm text-justify font-semibold">
              We are back with new management, more facilities, completed with
              consistent warm hospitality. As a 4-star hotel we will provide you
              with the ultimate comfort and relaxation during your stay in Bali.
              With its prime location in the heart of Kuta, you&apos;ll have
              easy access to all the best shopping, dining, and entertainment
              the area has to offer.
            </p>
            <p className="mt-5 mx-3 mr-4 text-md md:text-sm text-justify font-semibold">
              At CRYSTALKUTA Hotel – Bali, we pride ourselves on our top-notch
              amenities and outstanding service. Enjoy your stay at our Rooms
              in: Superior, Deluxe, Junior Suite, Suite, Family Suite, and
              Executive Suite. Whether you&apos;re lounging by our pleasant
              outdoor Pool, working up a sweat in our Gym, re-energize at our
              Spa, hit it on at our Karaoke, or indulging in a delicious meal at
              our on-site Restaurant, you&apos;ll feel right at home with us.
            </p>
            <p className="mt-5 mx-3 mr-4 text-md md:text-sm text-justify font-semibold">
              If you&apos;re looking for a truly memorable stay in Bali, look no
              further than CRYSTALKUTA Hotel – Bali. For business trip,
              vacation, holiday, or romantic trip, CRYSTALKUTA Hotel – Bali will
              be your home. Our friendly staff is dedicated to ensuring that
              your experience with us is nothing short of exceptional and attend
              your unique needs.
            </p>
            <p className="mx-3 mr-4 text-md md:text-sm text-justify font-semibold">
              Live endless entertainment at Kuta&apos;s comfort stay.
            </p>
          </div>
        </div>

        {/* Content Stacked Slider */}
        <div className="relative w-full h-screen flex">
          {/* First Column */}
          <div className="relative flex flex-col w-1/2 h-full">
            <div className="flex-1">
              <HomeSlider />
            </div>
            <div className="flex-1">
              <HomeSlider />
            </div>
            <div className="flex-1">
              <HomeSlider />
            </div>
          </div>

          {/* Second Column */}
          <div className="relative flex flex-col w-1/2 h-full">
            <div className="flex-1">
              <HomeSlider />
            </div>
            <div className="flex-1">
              <HomeSlider />
            </div>
            <div className="flex-1">
              <HomeSlider />
            </div>
          </div>
        </div>

        {/* content 2 */}
        <div className="flex flex-col md:flex-row justify-between w-full gap-8 p-5">
          {/* Image Container */}
          <div className="flex justify-center md:justify-start w-full h-[350px] md:w-[56.5%] overflow-hidden">
            <Image
              src="/assets/landing_page/3.webp"
              alt="Descriptive Image"
              className="transform translate-y-[-2%] translate-x-[3.5%] scale-[1.3] object-cover"
              width={700}
              height={500}
            />
          </div>
          {/* Text Container */}
          <div className="flex px-6 ps-16 flex-col justify-between w-full md:w-1/2">
            <div>
              <div className="py-4 pt-1 pb-1">
                <h1 className="text-2xl md:text-[45px] font-medium italic">
                  de&apos;TOPAZ Kuta
                </h1>
              </div>
              <div className="pt-1 ps-16">
                <h1 className="text-2xl md:text-[20px] font-medium italic">
                  BAR & RESTO
                </h1>
              </div>
              <p className="mt-8 mx-3 mr-4 text-md md:text-base text-justify font-medium">
                De&apos;Topaz Bar & Resto Kuta is our semi-indoor restaurant
                located at Ground Floor of CRYSTALKUTA Hotel – Bali. With a cozy
                interior and cordial staff, you will feel warm here. Also with a
                wide-range of menu to satisfy your appetite. You can choose to
                sit by the pool, at our lounge, at the main resto area, bar, sky
                lounge, or the garden area. Our bar & restaurant is perfect for
                those who want to enjoy it in solitude, with a partner, family,
                or friends.
              </p>
            </div>
            <div className="flex gap-4 ms-3 text-[15px]">
              <button className="bg-[#c4ae86] border border-[#c4ae86] text-white px-4 py-2 focus:outline-none h-[44px] rounded-sm">
                EXPLORE MORE
              </button>
              <button className="bg-transparent border border-[#c4ae86] text-[#c4ae86] px-4 py-2 focus:outline-none h-[44px] rounded-sm">
                EXPLORE MORE
              </button>
            </div>
          </div>
        </div>

        {/* content 3 */}
        <div className="flex flex-col md:flex-row justify-between w-full gap-8 p-5 pt-14 my-10 mb-0 bg-[#F3F4F6]">
          {/* Text Container */}
          <div className="flex px-6 ps-16 flex-col justify-center gap-11 w-full md:w-1/2">
            <div>
              <div className="py-4 pt-1 pb-1">
                <h1 className="text-2xl md:text-[45px] font-medium italic">
                  Lazuli SPA
                </h1>
              </div>
              <p className="mt-8 mr-4 text-md md:text-base text-justify font-medium">
                Our spa treatments will help you treat your mind body and spirit
                with Special Balinese touch and the best natural ingredients.
                Feel renewed after enjoy the ultimate relaxation experience from
                our therapist. Indulge the high privacy while take time to spa
                and feel the tranquillity of water and the surrounding gardens
              </p>
            </div>
            <div className="flex gap-4 text-[15px]">
              <button className="bg-[#c4ae86] border border-[#c4ae86] text-white px-4 py-2 focus:outline-none h-[44px] rounded-sm">
                EXPLORE MORE
              </button>
              <button className="bg-transparent border border-[#c4ae86] text-[#c4ae86] px-4 py-2 focus:outline-none h-[44px] rounded-sm">
                EXPLORE MORE
              </button>
            </div>
          </div>
          {/* Image Container */}
          <div className="flex justify-center md:justify-start w-full h-[440px] md:w-[48.5%] overflow-hidden">
            <Image
              src="/assets/landing_page/4.webp"
              alt="Descriptive Image"
              className="transform translate-y-[-28%] translate-x-[-2%] scale-[1.4] object-cover"
              width={700}
              height={500}
            />
          </div>
        </div>

        {/* content 4 */}
        <div className="flex flex-col md:flex-row justify-between w-full gap-8 p-5 pb-12 pt-14 my-10 mb-0 bg-[#F3F4F6]">
          {/* Text Container */}
          <div className="flex px-6 ps-16 flex-col justify-center gap-11 w-full md:w-1/2">
            <div>
              <div className="py-4 pt-1 pb-1">
                <h1 className="text-2xl md:text-[45px] font-medium italic">
                  Our Package
                </h1>
              </div>
              <p className="mt-8 mr-4 text-md md:text-base text-justify font-medium">
                With Our Package, you&apos;re invited to immerse yourself in a
                world where every moment is a celebration, and every experience
                is crafted to exceed your expectations. Whether you crave a
                romantic retreat, a family-friendly vacation, or an
                adventure-filled escape, Our Package has something for everyone.
                Choose from a variety of options, including spa retreats,
                culinary journeys, cultural immersions, and more, all promising
                to elevate your stay to new heights of excellence.
              </p>
            </div>
            <div className="flex gap-4 text-[15px]">
              <button className="bg-[#c4ae86] border border-[#c4ae86] text-white px-4 py-2 focus:outline-none h-[44px] rounded-sm">
                EXPLORE MORE
              </button>
              <button className="bg-transparent border border-[#c4ae86] text-[#c4ae86] px-4 py-2 focus:outline-none h-[44px] rounded-sm">
                EXPLORE MORE
              </button>
            </div>
          </div>
          {/* Image Carousel */}
          <div className="flex justify-center md:justify-start w-full h-[310px] md:w-[48.5%] overflow-hidden">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              pagination={{
                clickable: false,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image
                  src="/assets/landing_page/4.webp"
                  alt="Descriptive Image"
                  width={500}
                  height={500}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/assets/landing_page/5.webp"
                  alt="Descriptive Image"
                  width={500}
                  height={500}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/assets/landing_page/6.webp"
                  alt="Descriptive Image"
                  width={500}
                  height={500}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* content 5 */}
        <div className="flex flex-col md:flex-row justify-between w-full gap-8 p-5 pt-14 my-10 mb-0 bg-[#F3F4F6]">
          {/* Image Container */}
          <div className="flex justify-center md:justify-start w-full h-[420px] md:w-[54.5%] overflow-hidden">
            <Image
              src="/assets/landing_page/6.webp"
              alt="Descriptive Image"
              className="transform translate-y-[-2%] translate-x-[3.5%] scale-[1.3] object-cover"
              width={700}
              height={500}
            />
          </div>

          {/* Text Container */}
          <div className="flex px-6 ps-16 flex-col justify-center gap-11 w-full md:w-1/2">
            <div>
              <div className="py-4 pt-1 pb-1">
                <h1 className="text-2xl md:text-[45px] font-medium italic">
                  Experience
                </h1>
              </div>
              <p className="mt-8 mr-4 text-md md:text-base text-justify font-medium">
                Embrace the energy of Kuta with our entertainment-infused
                packages, where every moment is a celebration of culture,
                creativity, and excitement. From electrifying performances to
                themed experiences inspired by the rich tapestry of Balinese
                heritage, our offerings promise to transport you to a realm of
                wonder and delight.
              </p>
            </div>
            <div className="flex gap-4 text-[15px]">
              <button className="bg-[#c4ae86] border border-[#c4ae86] text-white px-4 py-2 focus:outline-none h-[44px] rounded-sm">
                EXPLORE MORE
              </button>
              <button className="bg-transparent border border-[#c4ae86] text-[#c4ae86] px-4 py-2 focus:outline-none h-[44px] rounded-sm">
                EXPLORE MORE
              </button>
            </div>
          </div>
        </div>

        {/* content 6 */}
        <div className="flex flex-col md:flex-row justify-between w-full gap-8 p-5 pt-14 my-10 mb-0 bg-[#F3F4F6]">
          {/* Text Container */}
          <div className="flex px-6 ps-16 flex-col justify-center gap-11 w-full md:w-1/2">
            <div>
              <div className="py-4 pt-1 pb-1">
                <h1 className="text-2xl md:text-[45px] font-medium italic">
                  Destination
                </h1>
              </div>
              <p className="mt-8 mr-4 text-md md:text-base text-justify font-medium">
                Indulge your senses in the city&apos;s vibrant shopping scene,
                where designer boutiques, local markets, and artisanal shops
                beckon with treasures waiting to be discovered. Whether
                you&apos;re seeking the latest fashion trends or unique
                souvenirs to remember your journey, the possibilities are
                endless.
              </p>
            </div>
            <div className="flex gap-4 text-[15px]">
              <button className="bg-[#c4ae86] border border-[#c4ae86] text-white px-4 py-2 focus:outline-none h-[44px] rounded-sm">
                EXPLORE MORE
              </button>
              <button className="bg-transparent border border-[#c4ae86] text-[#c4ae86] px-4 py-2 focus:outline-none h-[44px] rounded-sm">
                EXPLORE MORE
              </button>
            </div>
          </div>
          {/* Image Container */}
          <div className="flex justify-center md:justify-start w-full h-[310px] md:w-[48.5%] overflow-hidden">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              pagination={{
                clickable: false,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image
                  src="/assets/landing_page/8.webp"
                  alt="Descriptive Image"
                  width={500}
                  height={500}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/assets/landing_page/7.webp"
                  alt="Descriptive Image"
                  width={500}
                  height={500}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/assets/landing_page/9.webp"
                  alt="Descriptive Image"
                  width={500}
                  height={500}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </main>
    </div>
  );
}
