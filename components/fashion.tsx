"use client";
import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Image from "next/image";
export function Fashion() {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  //   const ref = useRef(null);
  //   useScroll({
  //     target: "",
  //     offset: ["0 1", "1.33 1"],
  //   });

  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.25,
            duration: 1,
          },
        },
      }}
    >
      <div className="flex flex-row text-white p-10 w-full relative h-[135vh] bg-black/40">
        <Image
          src="/fashion.png"
          fill={true}
          alt="Picture of the author"
          className="flex flex-col -z-10 relative"
        />
        <div className="w-full flex flex-col items-start justify-end p-10 text-left">
          <motion.div
            className="text-[4rem] font-bold flex justify-center "
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            DONT MISS OUT,
          </motion.div>
          <motion.div
            className="text-[4rem] font-bold flex justify-center "
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            EXPLORE OUR COLLECTION
          </motion.div>
          <motion.div
            className="text-[2rem] font-light flex justify-center pt-[3.5%] "
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            UNCOVER THE LATEST TRENDS DAILY AT VICUNA STORE, WHERE OUR CURATED
            COLLECTION ELEVATE YOUR EVERYDAY STYLE.
          </motion.div>
          <motion.div
            className="flex items-center justify-start w-full pt-[5%] "
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            <motion.button className="bg-fuchsia-600/60 border ring-1 ring-gray-900/5 border-white border-1 p-4 px-8 text-3xl rounded-[0.2rem] hover:scale-110 hover:bg-fuchsia-600/90 hover:border-3 transition-all duration-300 ease-in-out font-bold hover:font-extrabold  hover:shadow-4xl shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/80">
              SHOP NOW !
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
