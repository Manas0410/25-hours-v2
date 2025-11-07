"use client";
import React from "react";
import { ZigZagSection } from "./zigZagSection";

// All content in one simple array
const allContent = [
    // Tasks section - single item with video
    {
      title: "Plan Smart, Work Better with 25hours",
      description: [
        "25hours is your personal AI productivity partner — designed to help you manage time, tasks, and goals effortlessly.",
        "Add tasks in seconds, let AI handle tracking, and receive end-of-day summaries that show where your time really went.",
        "From projects to personal goals, 25hours keeps your work organized, your focus sharp, and your day meaningful.",
        "You can’t create more hours, but with 25hours, you’ll feel like you did."
      ],
      video: "/aivideo.mp4",
      sectionType: "tasks" as const,
    },
  
    // AI Features
    {
      title: "AI That Plans Like You — Only Smarter",
      description:
        "Just tell 25hours what you’re working on — an exam in 5 days, a project in 2 weeks, or a side hustle for the month. Our AI breaks it into smart, daily tasks, adjusts plans when you fall behind, and keeps you on track without the overwhelm.",
      image: "/AIPlanner.png",
      sectionType: "aiFeatures" as const,
    },
  
    // Motivation section
    {
      title: "Stay Consistent, Stay Motivated",
      description:
        "25hours isn’t just about tasks — it’s about building momentum. Get progress insights, gentle nudges, and AI-generated motivation tailored to your patterns. Because productivity isn’t just about doing more, it’s about staying inspired to keep going.",
      image: "/motivation.png",
      sectionType: "motivation" as const,
    },
  
    // Team / Vision section
    {
      title: "Plan together. Stay in sync.",
      description:
        "Whether you’re building something big or managing daily workflows, 25hours keeps your team on the same page. Plan once, sync everywhere — so you never lose track of who’s doing what, or when.",
      image: "/teamlistt.png",
      sectionType: "teamMembers" as const,
    }
  ];
  

export function SpotlightSection() {
  return (
    <>
      <ZigZagSection items={allContent} />
    </>
  );
}
