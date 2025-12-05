import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Handshake,
  TrendingUp,
  Sparkles,
  Globe,
  Shield,
  ArrowRight,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { Logo } from "../ui/logo";

/**
 * Premium Fintech Partner Hero Component
 *
 * Design Decisions:
 * - Glassmorphic cards with backdrop-blur for depth
 * - Smooth parallax scrolling effects
 * - Micro-interactions on all interactive elements
 * - Staggered animations for visual hierarchy
 * - Uses only Edumate color palette (primary/accent)
 */

const PartnerHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  // Parallax effects for background elements
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  useEffect(() => {
    // Trigger entrance animations
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Impact stats with count-up animation
  const impactStats = [
    {
      value: "₹500Cr+",
      label: "Disbursed",
      color: "from-primary to-primary-light",
    },
    { value: "50K+", label: "Students", color: "from-accent to-accent-light" },
    { value: "500+", label: "Partners", color: "from-success to-success" },
  ];

  // Partnership value propositions
  const keyValues = [
    {
      icon: TrendingUp,
      text: "Higher Revenue",
      description: "Boost your earnings with competitive commissions",
    },
    {
      icon: Shield,
      text: "Trusted Platform",
      description: "Industry-leading security and reliability",
    },
    {
      icon: Globe,
      text: "Pan-India Reach",
      description: "Connect with students nationwide",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient orbs with parallax */}
        <motion.div
          style={{ y: y1, opacity }}
          className="absolute top-0 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          style={{ y: y2, opacity }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating particles with physics */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              i % 3 === 0
                ? "bg-primary/30"
                : i % 3 === 1
                ? "bg-accent/30"
                : "bg-success/30"
            }`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Premium Badge with pulse effect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="inline-flex"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-card inline-flex items-center gap-3 px-6 py-3 rounded-full shadow-lg group cursor-pointer"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Handshake className="w-5 h-5 text-primary" />
                  </motion.div>
                  <span className="font-semibold text-foreground">
                    Partnership Program
                  </span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="w-4 h-4 text-accent" />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Headline with staggered reveal */}
              <div className="space-y-4">
                {["Partner.", "Profit.", "Progress."].map((word, index) => (
                  <motion.h1
                    key={word}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      delay: 0.3 + index * 0.15,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1], // Custom easing
                    }}
                    className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none"
                  >
                    <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
                      {word}
                    </span>
                  </motion.h1>
                ))}

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-medium max-w-xl pt-4"
                >
                  Join India's fastest-growing EdFintech ecosystem and transform
                  education financing together.
                </motion.p>
              </div>

              {/* Value Propositions as expandable pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-wrap gap-3"
              >
                {keyValues.map((value, index) => (
                  <motion.div
                    key={value.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.1 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group glass-card px-5 py-3 rounded-full cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <value.icon className="w-5 h-5 text-primary" />
                      </motion.div>
                      <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {value.text}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.4 }}
              >
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/25 overflow-hidden"
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative flex items-center gap-2">
                    Get Started Today
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Column: Stats & Branding */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              {/* Central Logo/Brand Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="relative flex justify-center mb-12"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-8 rounded-3xl shadow-xl relative group"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                  <div className="relative">
                    <Logo />
                    <div className="text-sm text-muted-foreground mt-1 text-center">
                      EdFintech Platform
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Impact Stats Grid with staggered animation */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {impactStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      delay: 0.7 + index * 0.1,
                      duration: 0.5,
                    }}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="group"
                  >
                    <div className="glass-card p-6 rounded-2xl text-center relative overflow-hidden">
                      {/* Gradient background on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />

                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isVisible ? { scale: 1 } : {}}
                        transition={{
                          delay: 0.8 + index * 0.1,
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                        }}
                        className="relative"
                      >
                        <div
                          className={`text-2xl sm:text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                        >
                          {stat.value}
                        </div>
                        <div className="text-xs sm:text-sm font-semibold text-muted-foreground">
                          {stat.label}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Success Indicator with pulse */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full shadow-lg"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2.5 h-2.5 bg-success rounded-full"
                  />
                  <span className="font-semibold text-sm text-foreground">
                    Growing Partnership Network
                  </span>
                </motion.div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity },
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl"
              />
              <motion.div
                animate={{
                  rotate: -360,
                  scale: [1.1, 1, 1.1],
                }}
                transition={{
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity },
                }}
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PartnerHeader;
