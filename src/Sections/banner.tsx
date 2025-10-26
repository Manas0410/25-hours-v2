"use client";

import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";

const words = `25hours helps you plan smarter, not harder. It turns your goals into simple daily steps so you actually get things done — without the burnout.`;

export function Banner() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
      <BackgroundRippleEffect />
      <div className="mt-40 w-full">
        <h2 className="relative z-10 mx-auto max-w-5xl text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
          Unlock 25 Hours in a Day.
        </h2>
        <TextGenerateEffect
          words={words}
          className="text-center max-w-7xl mx-auto text-[16px]"
        />
      </div>
      <div className="mx-auto mt-4">
        <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
          <LayoutTextFlip
            text="Make your daily routine"
            words={["Organize", "Supercharge", "Transform", "Automate"]}
          />
        </motion.div>
        <p className="mt-4 text-center text-base text-neutral-600 dark:text-neutral-400"></p>
      </div>
      <div className="flex items-center md:gap-4 gap-2 cursor-pointer mx-auto mt-10">
        <a href="#contact">
          <img
            src={"/appstore.png"}
            alt="Download on the App Store"
            className="md:h-12 h-8"
          />
        </a>
        <a href="#contact">
          <img
            src={"/playstore.png"}
            alt="Get it on Google Play"
            className="md:h-18 h-12"
          />
        </a>
      </div>
    </div>
  );
}
