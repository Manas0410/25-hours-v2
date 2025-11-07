"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { motion } from "motion/react";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "/forever",
    description: "Perfect for getting started",
    buttonText: "Start Free",
    buttonVariant: "secondary" as const,
    features: [
      "5 AI-planned goals per month",
      "Basic habit tracking",
      "Smart reminders",
      "Mobile app access",
      "Community support"
    ]
  },
  {
    name: "Pro",
    price: "$12",
    period: "/per month",
    description: "For serious productivity enthusiasts",
    buttonText: "Start Free Trial",
    buttonVariant: "primary" as const,
    popular: true,
    features: [
      "Unlimited AI-planned goals",
      "Advanced habit tracking with analytics",
      "Team collaboration (up to 5 members)",
      "AI motivator chat (unlimited)",
      "Priority support",
      "Custom reminders",
      "Progress reports"
    ]
  },
  {
    name: "Teams",
    price: "$39",
    period: "/per month",
    description: "Built for high-performing teams",
    buttonText: "Contact Sales",
    buttonVariant: "secondary" as const,
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "AI Agent automations",
      "Advanced analytics & insights",
      "Custom integrations",
      "Dedicated account manager",
      "SSO & advanced security",
      "API access"
    ]
  }
];

export function Pricing() {
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="pricing" className="w-full min-h-screen bg-background py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Transparent pricing. No strings attached.
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            7 days free — cancel anytime
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={cn(
                "relative bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10",
                plan.popular && "border-primary/50 shadow-lg shadow-primary/20 scale-105"
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-card-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-card-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={scrollToContact}
                className={cn(
                  "w-full py-3 px-6 rounded-lg font-medium transition-all duration-200",
                  plan.buttonVariant === "primary"
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
                )}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-muted-foreground">
            All plans include 7-day free trial. No credit card required.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
