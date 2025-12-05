import React, { useState, useEffect, useRef } from "react";
import { motion, spring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Star,
  Shield,
  Users,
  Target,
  Heart,
  Trophy,
  Sparkles,
} from "lucide-react";

/**
 * WHY EDUMATE COMPONENT
 *
 * Premium Fintech Features:
 * - Glassmorphic card overlays on images
 * - Smooth hover animations with scale and lift effects
 * - Sticky form section for better UX
 * - Progress bars on hover
 * - Feature pills with icons
 * - Responsive grid layout
 */

const edumateReasons = [
  {
    title: "No Service Fee for Students",
    desc: "We don't charge you a rupee for our support. Our guidance, counselling, and end-to-end assistance come at no cost to you. That's our promise — fair and student-first.",
    image: "/images/primary-images/loan_expert.png",
    icon: Heart,
    gradient: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50 dark:bg-pink-900/20",
  },
  {
    title: "100% Transparent Process",
    desc: "We explain the loan process in a way that makes sense. No hidden costs, no fine print. Just clarity, so you always know what's happening and why.",
    image: "/images/primary-images/loan_offers.png",
    icon: Shield,
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    title: "Smooth Coordination with Financial Institutions",
    desc: "We manage communication with banks and NBFCs, helping you avoid back-and-forth or confusion. You focus on your goals — we'll take care of the paperwork.",
    image: "/images/primary-images/document_submission.png",
    icon: Users,
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-900/20",
  },
  {
    title: "Customised Loan Options",
    desc: "Every student is different. That's why we assess your profile carefully and recommend loan products that are best suited to your needs — not just what's available.",
    image: "/images/primary-images/loan_approval.png",
    icon: Target,
    gradient: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    title: "Student-Centric Support, Always",
    desc: "You're not just another application to us. Whether you're at the initial inquiry or the final approval stage, we're here to simplify, explain, and support — like a friend who's done this before.",
    image: "/images/primary-images/loan_expert.png",
    icon: Star,
    gradient: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
  },
  {
    title: "Trusted by Students and Institutions Alike",
    desc: "Backed by years of experience at SEED Global Education and industry experts, Edumate is trusted by top universities and lending partners to guide students toward their global education dreams.",
    image: "/images/primary-images/loan_offers.png",
    icon: Trophy,
    gradient: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
  },
];

const WhyEdumate = () => {
  const formRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (
      window.location.hash === "#form" ||
      window.location.hash === "#contactForm"
    ) {
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  const features = [
    { text: "No hidden fees", icon: "💰" },
    { text: "Expert guidance", icon: "🎓" },
    { text: "Quick approval", icon: "⚡" },
    { text: "24/7 support", icon: "🎧" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: spring,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
      {/* Ambient background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
      </div>

      {/* Header Section */}
      <motion.div
        className="text-center mb-12 sm:mb-16 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 border border-primary/20"
          whileHover={{ scale: 1.05 }}
        >
          <Sparkles className="w-4 h-4" />
          <span>Why Students Choose Us</span>
        </motion.div>

        {/* Main heading with gradient */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-foreground">Why </span>
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Edumate?
          </span>
        </motion.h1>

        {/* Decorative divider */}
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        <motion.p
          className="text-lg lg:text-xl text-muted-foreground mx-auto max-w-3xl leading-relaxed mb-8 px-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          We simplify your education loan journey — no jargon, no pressure, just
          genuine support from experts who care about your success.
        </motion.p>

        {/* Feature Pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8 px-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <span className="text-lg">{feature.icon}</span>
              <span className="text-foreground">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 sm:gap-12 relative z-10">
        {/* Form Section - Sticky */}
        <div className="xl:col-span-5 order-2 xl:order-1">
          <motion.div
            className="xl:sticky xl:top-8"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative overflow-hidden">
              {/* Gradient backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl" />

              <div className="relative bg-card/80 backdrop-blur-xl border border-border rounded-3xl overflow-hidden shadow-xl">
                {/* Form Header */}
                <div className="relative bg-gradient-to-br from-primary to-accent text-primary-foreground p-8 text-center">
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
                      <span>Get Started Today</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3">
                      🚀 Showcase Your Interest
                    </h2>
                    <p className="text-white/90 text-lg">
                      Take the first step towards your global education dreams
                    </p>
                  </motion.div>
                </div>

                {/* Form Container - Replace with your actual ContactForm */}
                <div className="p-6" ref={formRef}>
                  {/* Your ContactForm component goes here */}
                  <div className="space-y-4">
                    <div className="text-center text-muted-foreground text-sm">
                      Replace this div with your ContactForm component
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="xl:col-span-7 order-1 xl:order-2">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {edumateReasons.map((reason, idx) => (
              <motion.div
                key={idx}
                className="group cursor-pointer"
                variants={cardVariants}
                onHoverStart={() => setHoveredCard(idx)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ y: -8 }}
              >
                <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border h-[380px]">
                  {/* Image */}
                  <div className="absolute inset-0">
                    <img
                      src={reason.image}
                      alt={reason.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Strong gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />

                  {/* Floating icon */}
                  <motion.div
                    className="absolute top-6 right-6 z-20"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div
                      className={`p-3 rounded-2xl bg-gradient-to-r ${reason.gradient} shadow-lg`}
                    >
                      <reason.icon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>

                  {/* Content - Enhanced positioning */}
                  <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                    <motion.div
                      className="flex flex-col gap-3"
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                    >
                      <h3 className="text-xl font-bold leading-tight">
                        {reason.title}
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed line-clamp-4">
                        {reason.desc}
                      </p>

                      {/* Progress bar */}
                      <motion.div
                        className={`h-1 bg-gradient-to-r ${reason.gradient} rounded-full mt-2`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: hoveredCard === idx ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ transformOrigin: "left" }}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyEdumate;
