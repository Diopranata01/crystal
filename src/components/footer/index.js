import Image from "next/image"; // components/Footer.js

export default function Footer() {
  return (
    <footer className="bg-[#c4ae86] text-[#000] py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-6 gap-4">
        {/* Left Column - Logo */}
        <div className="flex justify-center md:justify-start items-start">
          <Image
            src="/logo-crystal-white.png"
            alt="Logo"
            className="h-10 w-auto mt-3"
            width={200}
            height={200}
            style={{ filter: "invert(1) contrast(0.8) brightness(0.2)" }} // CSS filter to invert the image color
          />
        </div>

        {/* Middle Column - Get in Touch */}
        <div className="text-center col-span-1 md:col-start-2 md:col-span-4">
          <div className="flex flex-col items-center md:items-center">
            <h3 className="text-[22px] md:text-[28px] font-medium mb-4 uppercase">
              Get in Touch
            </h3>
            <p className="text-sm md:text-base">
              Jl. Bypass I Gusti Ngurah Rai No. 999, Kuta 80361 – Bali,
              Indonesia
            </p>
            <p className="text-sm md:text-base">+62 361 846 4618 (hunting)</p>
            <p className="text-sm md:text-base">+62 361 846 4718 (fax)</p>
            <p className="text-sm md:text-base">sales@crystalkuta.com</p>
            <p className="text-sm md:text-base">booking@crystalkuta.com</p>
            <br />
            <p className="text-sm md:text-base">
              © 2022 Crystal Kuta Hotel. All Rights Reserved Design & Maintained By BookNPay
            </p>
          </div>
        </div>

        {/* Right Column - Find Us */}
        <div className="col-span-1 md:col-span-1 text-center md:text-right flex flex-col items-center md:items-center">
          <h2 className="text-[22px] md:text-[28px] font-medium mb-4 uppercase">
            Find Us On
          </h2>
          <div className="flex gap-4 justify-center md:justify-end">
            <i className="text-2xl md:text-3xl fa-brands fa-instagram mr-2"></i>
            <i className="text-2xl md:text-3xl fa-brands fa-whatsapp"></i>
            <Image
              src="/tripadvisor.png"
              alt="Logo"
              className="h-[1.8rem] md:h-[2.1rem] w-auto"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
