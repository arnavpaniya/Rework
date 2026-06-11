"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clientLogos = [
  "&tv.webp",
  "Avokiddos.png",
  "BIG_Magic_Logo.jpg",
  "BMP.png",
  "Blink digital.png",
  "Djanngo digital.png",
  "DoDIY.png",
  "Honda.png",
  "Lenovo_nvidia.png",
  "Logo_of_Colour_Yellow_Productions.png",
  "Nikon+RED.png",
  "Offbeet studios.png",
  "SM_Kids_Logo.webp",
  "Sanofi.png",
  "Sony music.png",
  "Star sports.png",
  "TechOptima.png",
  "UMG_for_Brands.png",
  "Vadakkan.png",
  "Vire Club.png",
  "actaai.png",
  "blu studios.png",
  "disnep.png",
  "golazo_logo.png",
  "gozoop_pvt_ltd_logo.png",
  "host2 logo.png",
  "jjust.png",
  "lomotif.png",
  "newspets_logo.png",
  "raco_general_transport_establishment_logo.png",
  "sony.jpg",
  "the.png",
  "thesmallbigidea_logo.png",
  "universal-music-group-logo.png",
  "vadakkan.jpg",
  "zee.png",
  "zing.png",
];

export function LogoTicker() {
  const allLogos = [...clientLogos, ...clientLogos];

  return (
    <div className="bg-[#e1e61b] py-8 overflow-hidden flex w-full border-y-4 border-black shadow-[0_8px_0_0_#000] relative z-10">
      <motion.div
        className="flex whitespace-nowrap gap-8 items-center pr-8"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 60,
        }}
      >
        {allLogos.map((logo, i) => (
          <div 
            key={i} 
            className="relative h-20 px-6 bg-white border-[3px] border-black shadow-[4px_4px_0_0_#000] shrink-0 flex items-center justify-center"
          >
            <Image
              src={`/clients/${logo}`}
              alt={`Client logo ${i}`}
              width={160}
              height={60}
              className="object-contain max-h-12 w-auto"
              unoptimized
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
