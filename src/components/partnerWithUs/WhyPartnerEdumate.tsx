import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Zap,
  Settings,
  TrendingUp,
  CreditCard,
  Globe,
  Building,
  Sparkles,
  Handshake,
  ArrowRight,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

/**
 * Premium Fintech Why Partner Component
 *
 * Design Decisions:
 * - Intersection Observer for scroll-triggered animations
 * - Glassmorphic cards with hover states
 * - Staggered card animations for visual flow
 * - Premium form integration with enhanced styling
 * - Stats section with count-up effect simulation
 * - Smooth expand/collapse for "Show More"
 */

const partnerReasons = [
  {
    title: "Play to your Strengths",
    desc: "When you collaborate with Edumate, you're backed by a team that handles the heavy lifting while creating seamless experiences for all. So whether you are a Career Counsellor or a Overseas Study Counsellor or Visa Counsellor or a Test Prep Expert or a Housing Loan DSA, we want you to continue Playing to Your Strengths and leave the Education Loan journey for your referred students on us.",
    icon: Zap,
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "We Handle the Hassle",
    desc: "Say goodbye to back-and-forths with multiple lenders. We coordinate with banks, manage documentation, and follow up — so you don't have to.",
    icon: Settings,
    gradient: "from-blue-500 to-purple-500",
  },
  {
    title: "No Lost Leads",
    desc: "Leads are digitally tracked and transparently shared in real time. Every student touchpoint is recorded — so nothing falls through the cracks. We keep you updated on each lead's progress—so you're not left guessing.",
    icon: TrendingUp,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Uncomplicated Payout Process",
    desc: "We make payouts and commission tracking clean, transparent, and delay-free — no manual chasing, no confusion.",
    icon: CreditCard,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Tap into the SEED Ecosystem",
    desc: "Get access to SEED's global business school network, exclusive scholarships, and curated student-facing events like the Business School Festival.",
    icon: Globe,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Built on Trust, Backed by Experience",
    desc: "With years of experience supporting student mobility through SEED Global Education, and trusted by top universities and lenders — Edumate is your reliable growth partner.",
    icon: Building,
    gradient: "from-indigo-500 to-purple-500",
  },
];

const WhyPartnerEdumate = () => {
  const [showAllCards, setShowAllCards] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const displayedReasons = showAllCards
    ? partnerReasons
    : partnerReasons.slice(0, 4);
  const hasMoreCards = partnerReasons.length > 4;

  // Initialize FormCrafts
  useEffect(() => {
    const initializeFormCrafts = () => {
      if (typeof window !== "undefined") {
        const win = window as any;

        win._fo = win._fo || [];
        win._fo.push({
          c: "aqewa",
          i: "pzrkrsf",
          m: 0,
          s: 0,
          w: 540,
          t: "rgba(197, 36, 51, 1)",
        });

        const loadScript = () => {
          const existingScript = document.querySelector(
            'script[src="https://formcrafts.com/js/fc.js"]'
          );
          if (existingScript) {
            existingScript.remove();
          }

          const script = document.createElement("script");
          script.type = "text/javascript";
          script.async = true;
          script.src = "https://formcrafts.com/js/fc.js";
          document.body.appendChild(script);
        };

        if (win.fc && typeof win.fc.render === "function") {
          win.fc.render();
        } else {
          loadScript();
          win.fce = 1;
        }
      }
    };

    initializeFormCrafts();
  }, []);

  // Partnership statistics
  const partnershipStats = [
    {
      number: "500+",
      label: "Active Partners",
      icon: Handshake,
      color: "from-primary to-primary-light",
    },
    {
      number: "50+",
      label: "Partner Lenders",
      icon: Building,
      color: "from-accent to-accent-light",
    },
    {
      number: "₹100Cr+",
      label: "Loans Facilitated",
      icon: TrendingUp,
      color: "from-success to-success",
    },
    {
      number: "98%",
      label: "Partner Satisfaction",
      icon: CheckCircle,
      color: "from-primary to-accent",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Enhanced Header with scroll-triggered animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass-card px-5 py-2.5 rounded-full text-sm font-medium mb-6 shadow-lg"
            >
              <Handshake className="w-4 h-4 text-primary" />
              <span className="text-foreground">Partnership Benefits</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="text-foreground">Why Partner with </span>
              <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
                Edumate?
              </span>
            </motion.h2>

            {/* Decorative line */}
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "6rem" } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"
            />

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            >
              Discover the advantages that make Edumate your ideal education
              financing partner
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Enhanced Form Section - Sticky on larger screens */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="lg:sticky lg:top-8"
              >
                <div className="relative overflow-hidden rounded-3xl">
                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 dark:from-primary/5 dark:to-accent/5" />

                  {/* Decorative elements */}
                  <motion.div
                    animate={{
                      rotate: 360,
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      scale: { duration: 4, repeat: Infinity },
                    }}
                    className="absolute top-6 right-6 text-accent/20"
                  >
                    <Sparkles className="w-12 h-12" />
                  </motion.div>

                  <div className="relative glass-card shadow-xl">
                    {/* Form Header */}
                    <div className="relative bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground p-8 overflow-hidden">
                      {/* Animated background elements */}
                      <div className="absolute inset-0 opacity-20">
                        {[...Array(4)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute bg-white rounded-full"
                            style={{
                              width: `${20 + i * 10}px`,
                              height: `${20 + i * 10}px`,
                              top: `${20 + i * 20}%`,
                              left: `${10 + i * 25}%`,
                            }}
                            animate={{
                              y: [0, -20, 0],
                              opacity: [0.3, 0.6, 0.3],
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 3 + i,
                              repeat: Infinity,
                              delay: i * 0.5,
                            }}
                          />
                        ))}
                      </div>

                      <div className="relative text-center">
                        {/* Badge */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 }}
                          className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4"
                        >
                          <ArrowRight className="w-4 h-4" />
                          <span>Get Started Today</span>
                        </motion.div>

                        <motion.h4
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.9 }}
                          className="text-2xl font-bold mb-3"
                        >
                          Start Your Partnership Journey
                        </motion.h4>

                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1 }}
                          className="text-white/90"
                        >
                          Fill out the form to begin your partnership with
                          Edumate
                        </motion.p>
                      </div>
                    </div>

                    {/* Form Container */}
                    <div className="p-6">
                      <div
                        id="aqewa"
                        className="rounded-2xl overflow-hidden w-full bg-secondary/50 mx-auto min-h-[400px] backdrop-blur-sm"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Cards Grid Section */}
            <div className="lg:col-span-7">
              {/* Cards with staggered animation */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <AnimatePresence mode="popLayout">
                  {displayedReasons.map((reason, idx) => {
                    const IconComponent = reason.icon;
                    return (
                      <motion.div
                        key={reason.title}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{
                          delay: isInView ? idx * 0.1 : 0,
                          duration: 0.5,
                          layout: { duration: 0.3 },
                        }}
                        className="group"
                        onMouseEnter={() => setHoveredCard(idx)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <motion.div
                          whileHover={{ y: -8, scale: 1.02 }}
                          className="relative h-full"
                        >
                          {/* Gradient background */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-5 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
                          />

                          {/* Card */}
                          <div className="relative glass-card p-8 rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-500 h-full border-2 border-transparent group-hover:border-primary/20">
                            {/* Icon with rotation on hover */}
                            <motion.div
                              whileHover={{
                                rotate: [0, -10, 10, 0],
                                scale: 1.1,
                              }}
                              transition={{ duration: 0.5 }}
                              className="mb-6"
                            >
                              <div
                                className={`w-16 h-16 bg-gradient-to-r ${reason.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg relative overflow-hidden`}
                              >
                                {/* Shimmer effect */}
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                  initial={{ x: "-100%" }}
                                  animate={
                                    hoveredCard === idx ? { x: "100%" } : {}
                                  }
                                  transition={{ duration: 0.6 }}
                                />
                                <IconComponent className="w-8 h-8 relative z-10" />
                              </div>
                            </motion.div>

                            {/* Content */}
                            <h4 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                              {reason.title}
                            </h4>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                              {reason.desc}
                            </p>

                            {/* Hover check indicator */}
                            <motion.div
                              initial={{ opacity: 0, scale: 0 }}
                              animate={
                                hoveredCard === idx
                                  ? { opacity: 1, scale: 1 }
                                  : { opacity: 0, scale: 0 }
                              }
                              className="absolute top-6 right-6"
                            >
                              <div className="w-10 h-10 bg-gradient-to-r from-success to-success rounded-full flex items-center justify-center text-white shadow-lg">
                                <CheckCircle className="w-5 h-5" />
                              </div>
                            </motion.div>
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Show More Button with smooth animation */}
              {hasMoreCards && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                  className="text-center mb-12"
                >
                  <motion.button
                    onClick={() => setShowAllCards(!showAllCards)}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl shadow-lg overflow-hidden"
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    />

                    <span className="relative z-10 flex items-center gap-2">
                      {showAllCards ? "Show Less" : "Show More Benefits"}
                      <motion.div
                        animate={{ rotate: showAllCards ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {showAllCards ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </motion.div>
                    </span>
                  </motion.button>
                </motion.div>
              )}

              {/* Partnership Stats with count-up effect simulation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1, duration: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {partnershipStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: 1.1 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="text-center group"
                  >
                    <div className="glass-card p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                      {/* Gradient overlay on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />

                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center text-white mx-auto mb-3 shadow-md`}
                      >
                        <stat.icon className="w-6 h-6" />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 1.3 + index * 0.1 }}
                        className="relative"
                      >
                        <div
                          className={`text-2xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}
                        >
                          {stat.number}
                        </div>
                        <div className="text-muted-foreground text-sm font-medium">
                          {stat.label}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyPartnerEdumate;
