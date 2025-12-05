import React, { useState, useEffect } from "react";
import { easeOut, motion } from "framer-motion";
import {
  Linkedin,
  Instagram,
  Users,
  Award,
  Target,
  Heart,
  Shield,
  TrendingUp,
} from "lucide-react";

/**
 * Premium Fintech Header Component
 *
 * Design Features:
 * - Glassmorphic trust badges with subtle animations
 * - Gradient backgrounds using brand colors
 * - Micro-interactions on hover (scale, lift)
 * - Staggered content reveals
 * - Professional stat cards with hover effects
 * - Social proof indicators
 */
const AboutUsHeader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Main content container with standardized spacing */}
      <div className="relative z-10 pt-24 lg:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Premium trust indicators bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-6 border-b border-border/50"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Status indicators */}
              <div className="flex items-center gap-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse-soft shadow-lg shadow-success/50" />
                  <span className="text-sm font-semibold text-muted-foreground">
                    Trusted Platform
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse-soft shadow-lg shadow-primary/50" />
                  <span className="text-sm font-semibold text-muted-foreground">
                    Since 2020
                  </span>
                </motion.div>
              </div>

              {/* Key value props */}
              <div className="flex items-center gap-4 text-sm">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="glass-card px-4 py-2 rounded-xl shadow-soft"
                >
                  <span className="text-muted-foreground">Mission:</span>
                  <span className="ml-2 font-black text-foreground">
                    Student Success
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="glass-card px-4 py-2 rounded-xl shadow-soft"
                >
                  <span className="text-muted-foreground">Focus:</span>
                  <span className="ml-2 font-black text-primary">
                    Transparency
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Hero content */}
          <div className="py-20 lg:py-28">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left content - 7 columns */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                className="lg:col-span-7 space-y-8"
              >
                {/* Premium badge */}
                <motion.div variants={itemVariants}>
                  <div className="inline-flex items-center gap-2 glass-card border border-primary/20 dark:border-primary/30 text-primary px-5 py-2.5 rounded-full text-sm font-bold shadow-soft hover:shadow-md transition-all duration-300">
                    <Award className="w-4 h-4" />
                    <span>About Edumate</span>
                  </div>
                </motion.div>

                {/* Main headline with gradient */}
                <motion.div variants={itemVariants} className="space-y-6">
                  <h1 className="text-5xl lg:text-7xl font-black text-foreground leading-tight">
                    Simplifying Education
                    <span className="block mt-2 gradient-text">
                      Loans for Students
                    </span>
                  </h1>

                  <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                    We're your trusted partner in making quality education
                    accessible through transparent, student-first loan guidance
                    since 2020.
                  </p>
                </motion.div>

                {/* Key stats with premium cards */}
                <motion.div variants={itemVariants}>
                  <div className="flex flex-wrap gap-6">
                    {[
                      {
                        value: "50K+",
                        label: "Students Helped",
                        color: "primary",
                      },
                      {
                        value: "₹500Cr+",
                        label: "Loans Facilitated",
                        color: "accent",
                      },
                      {
                        value: "99.2%",
                        label: "Success Rate",
                        color: "success",
                      },
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.1, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="group text-center cursor-default"
                      >
                        <div
                          className={`text-3xl font-black bg-gradient-to-r ${
                            stat.color === "primary"
                              ? "from-primary to-primary-light"
                              : stat.color === "accent"
                              ? "from-accent to-accent-light"
                              : "from-success to-emerald-500"
                          } bg-clip-text text-transparent mb-1`}
                        >
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground font-medium">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Social links with premium styling */}
                <motion.div variants={itemVariants}>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground font-semibold">
                      Connect with us:
                    </span>
                    <motion.a
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://www.linkedin.com/company/edumate-global"
                      className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://www.instagram.com/edumateglobal?igsh=ZzgzN2NlZG1iajlo"
                      className="w-11 h-11 bg-pink-600 rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="w-5 h-5" />
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right content - 5 columns */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="lg:col-span-5 space-y-6"
              >
                {/* Premium logo card */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                >
                  <img
                    src="/edumate_logo.png"
                    className="h-16 w-auto mx-auto mb-4 filter dark:brightness-100 group-hover:scale-110 transition-transform duration-300"
                    alt="Edumate Logo"
                  />
                  <p className="text-sm text-muted-foreground font-medium">
                    Trusted education financing platform
                  </p>
                </motion.div>

                {/* Why choose us card */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center shadow-soft">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-black text-foreground">
                      Why Choose Us
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Unbiased guidance, zero processing fees, and personalized
                    support throughout your loan journey.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Value props grid - Premium cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pb-20"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Our Values",
                  items: [
                    "Student-first approach",
                    "Complete transparency",
                    "Zero hidden costs",
                  ],
                  gradient: "from-primary to-primary-light",
                },
                {
                  icon: Users,
                  title: "Our Impact",
                  items: [
                    "100+ universities",
                    "50+ banking partners",
                    "24/7 expert support",
                  ],
                  gradient: "from-accent to-accent-light",
                },
                {
                  icon: TrendingUp,
                  title: "Since 2020",
                  description:
                    "Licensed platform serving students across India and internationally with proven results.",
                  gradient: "from-success to-emerald-500",
                },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${card.gradient} rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300`}
                    >
                      <card.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-black text-foreground">
                      {card.title}
                    </h3>
                  </div>
                  {card.items ? (
                    <div className="space-y-2">
                      {card.items.map((item, i) => (
                        <div
                          key={i}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          • {item}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHeader;
