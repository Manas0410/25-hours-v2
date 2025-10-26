"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ashish Petwal",
    title: "Software Developer",
    avatar: "AP",
    rating: 5,
    text: "It will be helpful more in its agentic form where you are offloading the repetitive tasks burden from users."
  },
  {
    id: 2,
    name: "Elitza Vasileva",
    title: "Startup Founder",
    platform: "Reddit",
    avatar: "EV",
    rating: 5,
    text: "This is really a cool idea, because I am personally a bit crazy about this topic and tracking tasks and routines and so far I haven't found anything that fulfills all my requirements."
  },
  {
    id: 3,
    name: "Luke The Dev",
    title: "Tech CEO",
    platform: "Twitter",
    avatar: "LD",
    rating: 5,
    text: "I really need this app in my daily life."
  },
  {
    id: 4,
    name: "David Park",
    title: "Content Creator",
    platform: "Reddit",
    avatar: "DP",
    rating: 5,
    text: "The habit tracking feature helped me build a consistent content schedule. 47-day streak and counting!"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    title: "MBA Student",
    platform: "Twitter",
    avatar: "LT",
    rating: 5,
    text: "Prepared for my interviews in 10 days with 25hours. The timeline it created was perfect. Got my dream job!"
  },
  {
    id: 6,
    name: "Alex Kumar",
    title: "Freelancer",
    platform: "Reddit",
    avatar: "AK",
    rating: 5,
    text: "The AI motivator keeps me going when I feel stuck. It's like having a personal coach who actually gets me."
  }
];

export function Testimonials() {
  return (
    <div id="testimonials" className="w-full min-h-screen bg-background py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trusted by users around the world
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear directly from our community. Real stories, real results, real impact.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-card-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold text-sm">
                      {testimonial.avatar}
                    </span>
                  </div>
                  
                  {/* User Details */}
                  <div>
                    <h4 className="text-card-foreground font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.title}
                    </p>
                  </div>
                </div>

                {/* Platform */}
                <span className="text-primary font-medium text-sm">
                  {testimonial.platform}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
