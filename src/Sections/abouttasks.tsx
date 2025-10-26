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
        // fill="slate"
      />
      <div className=" flex-1 relative z-10 mx-auto w-full h-full max-w-7xl p-10 pt-[100px] md:pt-20 md:pb-20">
        <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-left text-2xl font-bold text-transparent md:text-5xl">
          Easily Add, Track, and Summarize Your Tasks
        </h2>
        <p className="mt-6 max-w-2xl text-left text-base md:text-lg font-normal text-neutral-300 leading-relaxed">
          Meet 25hours, your AI-powered productivity partner built to help you
          do more in less time.
        </p>
        <p className="mt-4 max-w-2xl text-left text-base md:text-lg font-normal text-neutral-300 leading-relaxed">
          Whether you're planning your day, managing a project, or chasing a
          personal goal — 25hours keeps everything organized and effortless.
        </p>
        <p className="mt-4 max-w-2xl text-left text-base md:text-lg font-normal text-neutral-300 leading-relaxed">
          Add tasks in seconds. Let AI track your progress in the background. At
          the end of the day, get smart summaries that show what you've
          achieved, where your time went, and what's next.
        </p>
        <p className="mt-4 max-w-2xl text-left text-base md:text-lg font-normal text-neutral-300 leading-relaxed">
          Stay consistent, stay in control — and finally feel on top of your
          day. Because you can't create more hours, but with 25hours, your 24
          will finally feel like 25.
        </p>
      </div>
      <div className=" flex-1 w-full ">
        {/* <img src="/managetask.png" alt="banner" className="w-auto has-[70%]" /> */}
      </div>
    </div>
  );
}
