"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { IconBrandTwitter, IconBrandReddit } from "@tabler/icons-react";
import { motion } from "motion/react";

const testimonials = [
  {
    id: 1,
    name: "Ashish Petwal",
    title: "Software Developer",
    avatar: "AP",
    rating: 5,
    text: "It will be helpful more in its agentic form where you are offloading the repetitive tasks burden from users.",
  },
  {
    id: 2,
    name: "Elitza Vasileva",
    title: "Startup Founder",
    platform: "Reddit",
    avatar: "EV",
    rating: 5,
    text: "This is really a cool idea, because I am personally a bit crazy about this topic and tracking tasks and routines and so far I haven't found anything that fulfills all my requirements.",
  },
  {
    id: 3,
    name: "Luke The Dev",
    title: "Tech CEO",
    platform: "Twitter",
    avatar: "LD",
    rating: 5,
    text: "I really need this app in my daily life.",
  },
  {
    id: 4,
    name: "David Park",
    title: "Content Creator",
    platform: "Reddit",
    avatar: "DP",
    rating: 5,
    text: "The habit tracking feature helped me build a consistent content schedule. 47-day streak and counting!",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    title: "MBA Student",
    platform: "Twitter",
    avatar: "LT",
    rating: 5,
    text: "Prepared for my interviews in 10 days with 25hours. The timeline it created was perfect. Got my dream job!",
  },
  {
    id: 6,
    name: "Alex Kumar",
    title: "Freelancer",
    platform: "Reddit",
    avatar: "AK",
    rating: 5,
    text: "The AI motivator keeps me going when I feel stuck. It's like having a personal coach who actually gets me.",
  },
];

const getPlatformIcon = (platform?: string) => {
  switch ((platform ?? "").toLowerCase()) {
    case "twitter":
    case "x":
      return IconBrandTwitter;
    case "reddit":
      return IconBrandReddit;
    default:
      return null;
  }
};

export function Testimonials() {
  return (
    <div
      id="testimonials"
      className="w-full min-h-screen bg-background py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Trusted by users around the world
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Hear directly from our community. Real stories, real results, real
            impact.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-card border border-border rounded-lg md:rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-3 md:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 sm:h-5 sm:w-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-sm sm:text-base text-card-foreground mb-4 md:mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* User Info */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Avatar */}
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-semibold text-xs sm:text-sm">
                      {testimonial.avatar}
                    </span>
                  </div>

                  {/* User Details */}
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm sm:text-base text-card-foreground font-semibold truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground truncate">
                      {testimonial.title}
                    </p>
                  </div>
                </div>

                {/* Platform */}
                {(() => {
                  const PlatformIcon = getPlatformIcon(testimonial.platform);
                  return PlatformIcon ? (
                    <span
                      className="text-primary flex-shrink-0"
                      aria-label={testimonial.platform}
                      title={testimonial.platform}
                    >
                      <PlatformIcon size={18} className="sm:h-5 sm:w-5" />
                    </span>
                  ) : null;
                })()}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
