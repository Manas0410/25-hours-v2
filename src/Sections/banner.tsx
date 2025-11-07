"use client";

import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const words = `25hours helps you plan smarter, not harder. It turns your goals into simple daily steps so you actually get things done — without the burnout.`;

export function Banner() {
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden rounded-md antialiased">
      {/* Grid Box Design */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />
      {/* Purple Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-slate-400/20 rounded-full blur-[120px] -z-10"></div>
      {/* Any other background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <BackgroundRippleEffect />
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mt-20 md:mt-50 w-full px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 mx-auto max-w-5xl text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-800 dark:text-neutral-100 px-4"
        >
          Unlock 25 hours in a day.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 md:mt-6 px-4"
        >
          <TextGenerateEffect
            words={words}
            className="text-center max-w-7xl mx-auto text-xs sm:text-sm md:text-base"
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 mx-auto mt-6 md:mt-8 px-4"
      >
        <motion.div className="relative flex flex-col items-center justify-center gap-4 text-center">
          <LayoutTextFlip
            text="Make your daily routine"
            words={["Organized", "Supercharged", "Transformed", "Automated"]}
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.8 }}
        whileHover={{ scale: 1.02 }}
        className="relative z-10 flex items-center justify-center gap-3 sm:gap-4 cursor-pointer mx-auto mt-8 md:mt-10 px-4"
      >
        <motion.a
          href="#contact"
          onClick={scrollToContact}
          className="flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <img
            src={"/appstore.png"}
            alt="Download on the App Store"
            className="w-auto h-8 sm:h-10 md:h-12 lg:h-14 max-w-[120px] sm:max-w-[140px] md:max-w-[160px] object-contain"
          />
        </motion.a>
        <motion.a
          href="#contact"
          onClick={scrollToContact}
          className="flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <img
            src={"/playstore.png"}
            alt="Get it on Google Play"
            className="w-auto h-12 sm:h-14 md:h-16 lg:h-20 object-contain"
          />
        </motion.a>
      </motion.div>
    </div>
  );
}
