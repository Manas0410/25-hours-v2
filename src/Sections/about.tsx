"use client";
import React from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { motion } from "motion/react";
import { Target, Zap, Users, Lightbulb, Rocket, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Target,
    title: "Focus on What Matters",
    description:
      "We believe productivity isn't about doing more—it's about doing what truly matters. 25hours helps you cut through the noise and focus on what drives real results.",
  },
  {
    icon: Zap,
    title: "Speed Without Burnout",
    description:
      "Move fast, but sustainably. Our AI helps you plan efficiently without overwhelming your schedule or sacrificing your well-being.",
  },
  {
    icon: Users,
    title: "Collaboration First",
    description:
      "Great work happens in teams. Whether you're building with friends or colleagues, 25hours keeps everyone aligned and moving forward together.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Through AI",
    description:
      "We're not just using AI—we're reimagining how it can make your life better. From smart planning to intelligent automation, we push what's possible.",
  },
  {
    icon: Rocket,
    title: "Ship Faster",
    description:
      "From idea to execution, 25hours turns ambitious goals into actionable timelines. Stop planning endlessly—start doing.",
  },
  {
    icon: Heart,
    title: "Human-Centered Design",
    description:
      "Technology should feel effortless, not overwhelming. Every feature we build starts with understanding how people actually work and live.",
  },
];

const milestones = [
  {
    year: "2024",
    title: "The Idea",
    description:
      "Born from frustration with existing productivity tools that felt too rigid or too complex. We asked: what if AI could actually understand your goals and help you achieve them?",
  },
  {
    year: "2025",
    title: "25hours Launches",
    description:
      "After months of building and testing with early users, we're excited to bring 25hours to everyone who wants to unlock their full potential.",
  },
  {
    year: "Future",
    title: "Your Story",
    description:
      "We're just getting started. Join us as we continue building features that help you do more, stress less, and feel in control of your time.",
  },
];

export function About() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden py-20 px-4">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-slate-400/20 rounded-full blur-[120px] z-0"></div>
      <BackgroundRippleEffect />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            About 25hours
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          25Hours was built with one simple idea — to help you make the most of your time.
                We all get 24 hours a day, but sometimes it feels like that’s just not enough. That’s where 25Hours comes in.

                It’s your personal productivity partner that helps you plan better, stay organized, and let automation handle the small stuff. From managing your day to keeping your goals on track, 25Hours makes it easier to focus on what truly matters — without the chaos.

                Because when your time is in control, everything else falls into place.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center">
              Productivity tools shouldn't feel like work. We're building
              25hours to be the first virtual secretary that actually gets you.
              No learning curve, no complexity—just smart AI that understands
              your goals and helps you achieve them, one day at a time.
            </p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            What We Believe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={cn(
                    "bg-card border border-border rounded-xl p-6",
                    "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10",
                    "transition-all duration-300"
                  )}
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Story Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Our Story
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-card border border-border rounded-xl p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-card-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Join Us on This Journey
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're building something special, and we'd love for you to be part
              of it. Try 25hours today and see how it can transform the way you
              work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className={cn(
                  "px-8 py-3 rounded-lg font-medium",
                  "bg-primary text-primary-foreground",
                  "hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25",
                  "transition-all duration-200 inline-block text-center"
                )}
              >
                Get Started
              </a>
              <a
                href="#contact"
                className={cn(
                  "px-8 py-3 rounded-lg font-medium",
                  "bg-secondary text-secondary-foreground border border-border",
                  "hover:bg-secondary/80",
                  "transition-all duration-200 inline-block text-center"
                )}
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

