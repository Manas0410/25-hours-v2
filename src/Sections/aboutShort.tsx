"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function AboutShort() {
  return (
    <div id="about" className="relative w-full bg-background py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6 px-4">
            About 25hours
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4 md:mb-6 px-4">
            25Hours was built with one simple idea to help you make the most of your time.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4 md:mb-6 px-4">
            We all get 24 hours a day, but sometimes it feels like that's just not enough. That's where 25Hours comes in.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4 md:mb-6 px-4">
            It's your personal productivity partner that helps you plan better, stay organized, and let automation handle the small stuff. From managing your day to keeping your goals on track, 25Hours makes it easier to focus on what truly matters without the chaos.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Because when your time is in control, everything else falls into place.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

