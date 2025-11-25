"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Twitter, Linkedin, Github } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" }
  ],
  company: [
    { name: "About", href: "#about" },
    // { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" }
  ],
  // legal: [
  //   { name: "Privacy", href: "#privacy" },
  //   { name: "Terms", href: "#terms" },
  //   { name: "Security", href: "#security" }
  // ],
};

const socialLinks = [
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/25hours"
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/25hours"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/company/25hours"
  }
];

export function Footer() {
  const router = useRouter();

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href.startsWith('/')) {
      // Navigate to page routes using Next.js router
      router.push(href);
    }
  };

  return (
    <footer className="w-full bg-background border-t border-border">
      <div className="max-w-none mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-10 sm:py-12 md:py-16">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8"
        >
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">25hours</h3>
            <p className="text-muted-foreground text-sm mb-2">
              The first virtual secretary powered by AI.
            </p>
            <p className="text-muted-foreground text-sm">
              Unlock your productivity potential.
            </p>
          </motion.div>

          {/* Product Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-foreground font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-foreground font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Column */}
          {/* <div>
              <h4 className="text-foreground font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div> */}
        </motion.div>

        {/* Separator */}
        <div className="border-t border-border mb-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-muted-foreground text-sm"
          >
            © 2025 25hours. All rights reserved.
          </motion.p>

          {/* Social Media Icons */}
          {/* <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div> */}
        </motion.div>
      </div>
    </footer>
  );
}
