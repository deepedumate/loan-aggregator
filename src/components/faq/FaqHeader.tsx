import React, { useState, useEffect } from "react";
import { easeOut, motion } from "framer-motion";
import {
  HelpCircle,
  MessageCircle,
  BookOpen,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

/**
 * Premium FAQ Header Component
 *
 * Design Features:
 * - Animated gradient backgrounds with floating elements
 * - Staggered entrance animations using Framer Motion
 * - Glassmorphic cards with backdrop blur
 * - Interactive category pills with hover effects
 * - Responsive grid layout
 * - Premium fintech aesthetic
 */

interface Category {
  icon: React.ElementType;
  title: string;
  count: string;
  color: "primary" | "accent";
}

const FaqHeader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // FAQ categories with icons and colors
  const faqCategories: Category[] = [
    { icon: BookOpen, title: "Loan Process", count: "12", color: "primary" },
    { icon: CheckCircle, title: "Eligibility", count: "8", color: "accent" },
    { icon: Clock, title: "Processing Time", count: "6", color: "primary" },
    { icon: MessageCircle, title: "Support", count: "5", color: "accent" },
  ];

  // Popular questions for quick access
  const popularQuestions = [
    "How long does loan approval take?",
    "What documents do I need?",
    "Can I apply without a cosigner?",
    "What are the interest rates?",
    "How to check my application status?",
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <div className="relative bg-gradient-to-br from-primary/5 via-white to-accent/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Animated background elements - Premium fintech style */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        {/* Floating gradient blobs with animation */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-48 h-48 md:w-64 md:h-64 bg-primary/30 dark:bg-primary/20 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 right-20 w-64 h-64 md:w-80 md:h-80 bg-accent/30 dark:bg-accent/20 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/2 right-1/3 w-32 h-32 md:w-48 md:h-48 bg-primary/20 dark:bg-primary/15 rounded-full blur-2xl"
        />
      </div>

      {/* Main content with proper spacing for fixed nav */}
      <div className="relative z-10 pt-20 lg:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="py-12 md:py-16 lg:py-20">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Content - 7 columns */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:col-span-7 space-y-6 md:space-y-8"
              >
                {/* Badge with shine effect */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 glass-card text-primary px-4 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <HelpCircle className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  <span>FAQ & Support</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                </motion.div>

                {/* Main Heading with gradient */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="space-y-4"
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground leading-tight">
                    Find Answers to
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      className="block gradient-text mt-2"
                    >
                      Your Questions
                    </motion.span>
                  </h1>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
                  >
                    Get instant answers to common questions about education
                    loans, eligibility requirements, and application processes.
                    Can't find what you're looking for? Our support team is here
                    to help.
                  </motion.p>
                </motion.div>

                {/* Logo with animation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-accent" />
                    <span className="text-sm font-semibold text-muted-foreground">
                      Powered by
                    </span>
                  </div>
                  <img
                    src="/edumate_logo.png"
                    className="h-8 md:h-10 w-auto dark:brightness-100"
                    alt="Edumate Logo"
                  />
                </motion.div>
              </motion.div>

              {/* Right Sidebar - 5 columns */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="lg:col-span-5 space-y-6"
              >
                {/* Quick Stats Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="glass-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                    <h3 className="text-lg font-bold text-foreground">
                      Quick Stats
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: "31+", label: "Total FAQs", color: "primary" },
                      {
                        value: "95%",
                        label: "Solved Instantly",
                        color: "accent",
                      },
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        className="text-center p-4 bg-gradient-to-br from-muted/30 to-transparent rounded-xl hover:from-muted/50 transition-all duration-300"
                      >
                        <div
                          className={`text-3xl md:text-4xl font-black mb-2 ${
                            stat.color === "primary"
                              ? "text-primary"
                              : "text-accent"
                          }`}
                        >
                          {stat.value}
                        </div>
                        <div className="text-xs md:text-sm text-muted-foreground font-medium">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Categories Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="glass-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    Browse Categories
                  </h3>

                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-3"
                  >
                    {faqCategories.map((category, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.03, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className="group flex items-center justify-between p-3 bg-muted/30 hover:bg-muted/60 rounded-xl transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className={`w-10 h-10 bg-gradient-to-br ${
                              category.color === "primary"
                                ? "from-primary to-accent"
                                : "from-accent to-primary"
                            } rounded-xl flex items-center justify-center text-white shadow-md group-hover:shadow-lg transition-all duration-300`}
                          >
                            <category.icon className="w-5 h-5" />
                          </motion.div>

                          <span className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300">
                            {category.title}
                          </span>
                        </div>

                        <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-semibold">
                          {category.count}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Popular Questions Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pb-12 md:pb-16"
          >
            <div className="glass-card rounded-3xl p-6 md:p-10 shadow-xl">
              {/* Section Header */}
              <div className="text-center mb-8 md:mb-10">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 rounded-full text-sm font-semibold text-primary mb-4"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>Most Asked</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-3"
                >
                  Popular Questions
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="text-muted-foreground text-sm md:text-base"
                >
                  Quick answers to the most common questions from students
                </motion.p>
              </div>

              {/* Questions Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {popularQuestions.map((question, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    className="group p-4 md:p-5 bg-gradient-to-br from-muted/30 to-transparent hover:from-muted/60 rounded-xl transition-all duration-300 cursor-pointer border border-border hover:border-primary/30 hover:shadow-md"
                  >
                    <div className="flex items-start gap-3">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-md group-hover:shadow-lg transition-all duration-300"
                      >
                        <HelpCircle className="w-4 h-4" />
                      </motion.div>

                      <p className="text-sm md:text-base text-muted-foreground group-hover:text-foreground leading-relaxed transition-colors duration-300 font-medium">
                        {question}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FaqHeader;
