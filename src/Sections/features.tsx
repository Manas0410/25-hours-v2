"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Small steps. Big changes.",
    description:
    "Transform your goals into lasting habits with 25hours.Track your daily routines, streaks, and progress visually — so staying consistent feels rewarding, not exhausting.,Whether it’s coding daily, reading, or exercising, 25hours helps you turn effort into effortless consistency.",
    content: (
      <div className="flex h-max w-full items-center justify-end overflow-visible text-white px-2 sm:px-4">
        <img 
          src="/home.png" 
          alt="" 
          className="w-full max-w-[200px] xs:max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] h-auto max-h-[250px] xs:max-h-[300px] sm:max-h-[350px] md:max-h-[450px] lg:max-h-[550px] object-contain" 
        />
      </div>
    ),
  },
  {
    title: "Tell your goal. Let AI plan your time.",
    description:
      "Preparing for an interview in 7 days? Or building a side project in 10? Just tell 25hours AI your big task  it instantly creates a clear, actionable timeline. Add friends or teammates to your task and stay in sync till you finish it.",
    content: ( 
      <div className="flex h-full w-full items-center justify-end text-white px-2 sm:px-4">
        <img 
          src="/AIPlanner.png" 
          alt="" 
          className="w-full max-w-[200px] xs:max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] h-auto max-h-[250px] xs:max-h-[300px] sm:max-h-[350px] md:max-h-[450px] lg:max-h-[550px] object-contain" 
        />
      </div>
    ),
  },
  {
    title: "Never miss what matters.",
    description:"Stay consistent with 25hours’ intelligent reminders — designed to keep you on track without overwhelming you. Set custom alerts for your daily tasks, deadlines, or team goals. The AI even learns your habits and reminds you at the right moment to stay productive.",
    content: (
      <div className="flex h-full w-full items-center justify-end text-white px-2 sm:px-4">
        <img 
          src="/settings.png" 
          alt="" 
          className="w-full max-w-[200px] xs:max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] h-auto max-h-[250px] xs:max-h-[300px] sm:max-h-[350px] md:max-h-[450px] lg:max-h-[550px] object-contain" 
        />
      </div>
    ),
  },
  {
    title: "Plan together. Stay in sync.",
    description:
    "25hours isn’t just for personal goals — it’s for teams that get things done.Create detailed to-dos for every AI-generated task, assign them to teammates, and track progress in real time.Whether you’re preparing for an interview, building a project, or chasing a shared goal — everyone stays aligned and in flow." ,
    content: (
      <div className="flex h-full w-full items-center justify-end text-white px-2 sm:px-4">
        <img 
          src="/teamlistt.png" 
          alt="" 
          className="w-full max-w-[200px] xs:max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] h-auto max-h-[250px] xs:max-h-[300px] sm:max-h-[350px] md:max-h-[450px] lg:max-h-[550px] object-contain" 
        />  
      </div>
    ),
  },
  {
    title: "Stay motivated, every single day.",
    description:
      "25hours isn’t just about planning — it’s about staying inspired to finish what you start. Chat with your AI motivator whenever you feel stuck, distracted, or low on energy.Get daily nudges, positive reflections, and reminders that keep you focused on your 'why.'",
    content: (
      <div className="flex h-full w-full items-center justify-end text-white px-2 sm:px-4">
        <img 
          src="/motivation.png" 
          alt="" 
          className="w-full max-w-[200px] xs:max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] h-auto max-h-[250px] xs:max-h-[300px] sm:max-h-[350px] md:max-h-[450px] lg:max-h-[550px] object-contain" 
        />
      </div>
    ),
  },
  {
    title: "Don’t just plan. Get it done — automatically.",
    description:
      "25hours comes with a smart AI Agent that can take action for you. From scheduling meetings, sending reminders, or organizing files — to tracking progress and updating your team — your AI assistant executes repetitive tasks so you can focus on what really matters.",
    content: (
      <div className="flex h-full w-full items-center justify-end text-white px-2 sm:px-4">
        <img 
          src="/aichat.png" 
          alt="" 
          className="w-full max-w-[200px] xs:max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] h-auto max-h-[250px] xs:max-h-[300px] sm:max-h-[350px] md:max-h-[450px] lg:max-h-[550px] object-contain" 
        />
      </div>
    ),
  },
];
export function Features() {
  return (
    <div id="features" className="w-full min-h-screen ">
      <div className="h-10" />
      <StickyScroll content={content} />
    </div>
  );
}
