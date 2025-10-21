import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";

export function SpotlightPreview() {
  return (
    <div className="relative flex h-screen w-full overflow-hidden rounded-md  antialiased md:items-center md:justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className=" flex-1 relative z-10 mx-auto w-full h-full max-w-7xl p-10 pt-[100px] md:pt-50">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-left text-4xl font-bold text-transparent md:text-7xl">
          Easily Add, Track and Summarise you tasks with AI
        </h1>
        <p className=" mt-4 max-w-lg text-left text-base font-normal text-neutral-300">
          Spotlight effect is a great way to draw attention to a specific part
          of the page. Here, we are drawing the attention towards the text
          section of the page. I don&apos;t know why but I&apos;m running out of
          copy.
        </p>
      </div>
      <div className=" flex-1 w-full ">
        {/* <img src="/managetask.png" alt="banner" className="w-auto has-[70%]" /> */}
      </div>
    </div>
  );
}
