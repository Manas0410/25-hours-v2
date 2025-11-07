"use client";
import React, { useState } from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await fetch("https://my-emailservice.vercel.app/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tomail: formData.email,
        bcc: "manasshrivastava0410@gmail.com,sanskratiagrawal306@gmail.com",
        subject: "THANK YOU FOR CONNECTING WITH 25 hours Team",
        message: `\nHello ${formData.name},\n\nThank you for connecting with the 25 Hours Team.\n\n Your Message: ${formData.message} .\n\nWe're excited to have you in our community. Once we are live, you'll be the first to know.\n\nBest regards,\n25 Hours Team`,
      }),
    });

    console.log("Form submitted:", formData);
    setIsSubmitting(false);

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // You can add a toast notification here
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "manasshrivastava0410@gmail.com",
      href: "mailto:manasshrivastava0410@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-7007022949",
      href: "tel:+91-7007022949",
    },
    // {
    //   icon: MapPin,
    //   label: "Location",
    //   value: "San Francisco, CA",
    //   href: "#",
    // },
  ];

  return (
    <div
      //   id="contact"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden py-20 px-4"
    >
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-slate-400/20 rounded-full blur-[120px] z-0"></div>
      <BackgroundRippleEffect />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 px-4">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 md:space-y-6"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 md:mb-6">
                Contact Information
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 md:mb-8">
                Reach out to us through any of these channels. We're here to
                help!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={cn(
                      "flex items-start gap-4 p-4 rounded-xl",
                      "bg-card border border-border",
                      "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10",
                      "transition-all duration-300 group"
                    )}
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">
                        {info.label}
                      </p>
                      <p className="text-foreground font-medium">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 space-y-4 md:space-y-6 shadow-xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={cn(
                      "w-full px-4 py-3 rounded-lg",
                      "bg-background border border-input",
                      "text-foreground placeholder:text-muted-foreground",
                      "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
                      "transition-all duration-200"
                    )}
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={cn(
                      "w-full px-4 py-3 rounded-lg",
                      "bg-background border border-input",
                      "text-foreground placeholder:text-muted-foreground",
                      "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
                      "transition-all duration-200"
                    )}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Subject Field */}
              {/* <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={cn(
                    "w-full px-4 py-3 rounded-lg",
                    "bg-background border border-input",
                    "text-foreground placeholder:text-muted-foreground",
                    "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
                    "transition-all duration-200"
                  )}
                  placeholder="What's this about?"
                />
              </div> */}

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg resize-none",
                    "bg-background border border-input",
                    "text-foreground placeholder:text-muted-foreground",
                    "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
                    "transition-all duration-200"
                  )}
                  placeholder="Tell us what you're thinking..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "w-full md:w-auto px-8 py-3 rounded-lg font-medium",
                  "bg-primary text-primary-foreground",
                  "hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25",
                  "disabled:opacity-50 disabled:cursor-not-allowed",
                  "transition-all duration-200",
                  "flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
