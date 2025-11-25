"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface ZigZagItem {
  title?: string;
  name?: string;
  role?: string;
  description: string | string[];
  image?: string;
  video?: string;
}

interface ZigZagSectionProps {
  items: ZigZagItem[];
  isSingleItem?: boolean;
}

export function ZigZagSection({
  items,
  isSingleItem = false,
}: ZigZagSectionProps) {
  const containerClass = isSingleItem
    ? "relative flex h-screen w-full overflow-hidden rounded-md antialiased md:items-center md:justify-center"
    : "relative w-full overflow-hidden antialiased";

  return (
    <div className={containerClass}>
      <div
        className={cn(
          "relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10",
          isSingleItem
            ? "h-full py-12 sm:py-16 md:py-20 pt-24 sm:pt-28 md:pt-20"
            : "py-12 sm:py-16 md:py-20"
        )}
      >
        {items.map((item, index) => {
          const isEven = index % 2 === 0;
          const descriptions = Array.isArray(item.description)
            ? item.description
            : [item.description];
          const hasVideo = !!item.video;

          // For single item, don't use zig-zag, use standard layout
          const layoutClass = isSingleItem
            ? "flex flex-col md:flex-row items-center md:items-center gap-6 sm:gap-8 md:gap-12 justify-center"
            : cn(
                "flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 mb-16 md:mb-20 justify-center",
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              );

          return (
            <motion.div
              key={item.title || item.name || index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: isSingleItem ? 0 : index * 0.1,
              }}
              className={layoutClass}
            >
              {/* Text Content */}
              <div
                className={cn(
                  "w-full max-w-2xl",
                  isSingleItem ? "" : "order-2 md:order-1"
                )}
              >
                {item.title && (
                  <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent mb-4 sm:mb-6">
                    {item.title}
                  </h2>
                )}
                {item.name && (
                  <>
                    <h3 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-transparent mb-2 sm:mb-3">
                      {item.name}
                    </h3>
                    {item.role && (
                      <p className="text-left text-sm sm:text-base md:text-lg font-medium text-neutral-400 mb-4 sm:mb-6">
                        {item.role}
                      </p>
                    )}
                  </>
                )}
                {descriptions.map((desc, descIndex) => (
                  <p
                    key={descIndex}
                    className={cn(
                      "text-left text-sm sm:text-base md:text-lg font-normal text-neutral-300 leading-relaxed",
                      descIndex === 0
                        ? isSingleItem
                          ? "mt-4 sm:mt-6"
                          : ""
                        : "mt-3 sm:mt-4"
                    )}
                  >
                    {desc}
                  </p>
                ))}
              </div>

              {/* Media (Video or Image) */}
              <div
                className={cn(
                  " flex items-center w-full md:w-auto",
                  isSingleItem
                    ? "justify-center md:justify-end mt-6 md:mt-0"
                    : "justify-center order-1 md:order-2"
                )}
              >
                {hasVideo ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full max-w-[280px] xs:max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto max-h-[250px] xs:max-h-[300px] sm:max-h-[350px] md:max-h-[450px] lg:max-h-[550px] xl:max-h-[600px] rounded-lg shadow-2xl object-contain"
                  >
                    <source src={item.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={item.image}
                    alt={item.title || item.name || "Feature"}
                    className="w-full max-w-[280px] xs:max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto max-h-[250px] xs:max-h-[300px] sm:max-h-[350px] md:max-h-[450px] lg:max-h-[550px] xl:max-h-[600px] rounded-lg shadow-2xl object-contain"
                  />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
