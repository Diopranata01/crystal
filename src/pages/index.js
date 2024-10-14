import Image from "next/image";

export default function Home() {
  return (
    <div className='min-h-screen p-0'>
      {/* Full Width Image with Centered Text at the Top */}
      <div className="relative w-full h-screen overflow-hidden">
        <Image
          src="/assets/landing_page/main.jpeg" // Ensure the path is correct
          alt="Crystal Kuta"
          layout="fill" // Use layout fill to make it cover the container
          objectFit="cover" // Ensure the image covers the div
          className="absolute inset-0 translate-y-[20%] scale-[1.4]" // Shift right and zoom
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
          <h1 className="text-[50px] font-bold italic">CRYSTAL KUTA</h1>
          <h2 className="text-2xl">HOTEL - BALI</h2>
          <br />
          <h6 className="text-lg italic">Live Endless Entertainment at Kuta&apos;s Comfort Stay</h6>
        </div>
      </div>

      {/* Other Content Can Follow Here */}
      <main className="flex flex-col gap-8 items-center sm:items-start w-full">
        {/* Additional content goes here */}
      </main>
    </div>
  );
}
