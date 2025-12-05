import React, { useState } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import {
  Plus,
  Minus,
  MessageCircle,
  Sparkles,
  CheckCircle,
  TrendingUp,
  Users,
  Clock,
} from "lucide-react";
import FaqHeader from "./FaqHeader";

/**
 * Premium FAQ Page Component
 *
 * Design Philosophy:
 * - Clean fintech aesthetic inspired by Stripe/Plaid
 * - Smooth Framer Motion animations for premium feel
 * - Glassmorphic cards with soft shadows
 * - Responsive mobile-first design
 * - Maintains existing color palette (primary blue, accent orange)
 */

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQPage: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<string>("collapseOne");

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? "" : id);
  };

  const faqData: FAQ[] = [
    {
      id: "collapseOne",
      question: "Do I have to pay Edumate for your services?",
      answer:
        "No. Edumate does not charge students for our services. While some banks may have processing fees, we are completely transparent and will walk you through every charge—honestly.",
      category: "Pricing",
    },
    {
      id: "collapseTwo",
      question: "Are you a lender or a bank?",
      answer:
        "No, we are not lenders. We are facilitators. We connect you to trusted loan providers and help you choose what's right for you.",
      category: "About Us",
    },
    {
      id: "collapseThree",
      question: "How is Edumate different from other loan platforms?",
      answer:
        "We put students first. That means no aggressive selling, no confusing terms, and no bias. Just friendly, expert support tailored to your goals.",
      category: "Services",
    },
    {
      id: "collapseFour",
      question: "How long does the loan process take?",
      answer:
        "It depends on the lender, your profile, and the documentation. While we aim to help you move quickly, our focus is on getting it right—not rushing.",
      category: "Process",
    },
    {
      id: "collapseFifth",
      question: "What kinds of loans do you help with?",
      answer:
        "We assist with loans for higher education abroad and India—covering tuition fees, living expenses, and more. Whether you need a secured or unsecured loan, we help you explore both.",
      category: "Loans",
    },
  ];

  const stats = [
    {
      number: "500+",
      label: "Students Helped",
      icon: Users,
      color: "primary",
    },
    {
      number: "50+",
      label: "Partner Lenders",
      icon: TrendingUp,
      color: "accent",
    },
    {
      number: "24/7",
      label: "Expert Support",
      icon: Clock,
      color: "primary",
    },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
    hover: {
      scale: 1.05,
      y: -8,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-primary/5 dark:from-gray-900 dark:via-gray-900 dark:to-primary/5">
      {/* Header Section */}
      <FaqHeader />

      {/* Main Content */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header with Framer Motion */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16 md:mb-20"
          >
            {/* Badge with subtle animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 border border-primary/20 dark:border-primary/30 text-primary px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Frequently Asked Questions</span>
            </motion.div>

            {/* Main heading with gradient */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
            >
              <span className="text-foreground">Get Your </span>
              <span className="gradient-text">Questions Answered</span>
            </motion.h2>

            {/* Animated divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            >
              Get quick answers to the most common queries about our services,
              eligibility, documentation, and how{" "}
              <span className="font-semibold gradient-text">EduMate</span> helps
              you navigate your education loan journey with confidence.
            </motion.p>
          </motion.div>

          {/* FAQ Accordion Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto mb-16 md:mb-20"
          >
            {/* Glass card container with improved shadows */}
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-xl opacity-20" />

              <div className="relative glass-card rounded-3xl p-6 md:p-10 shadow-xl">
                <motion.div className="space-y-4" variants={containerVariants}>
                  {faqData.map((faq, index) => (
                    <motion.div
                      key={faq.id}
                      variants={itemVariants}
                      className="group"
                    >
                      <motion.div
                        initial={false}
                        className="bg-white dark:bg-gray-800 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                      >
                        {/* Question Header */}
                        <motion.button
                          whileHover={{ scale: 1.005 }}
                          whileTap={{ scale: 0.995 }}
                          className="w-full text-left p-4 md:p-6 font-semibold transition-all duration-300 flex items-start justify-between gap-4 hover:bg-muted/30"
                          type="button"
                          onClick={() => toggleAccordion(faq.id)}
                          aria-expanded={activeAccordion === faq.id}
                          aria-controls={faq.id}
                        >
                          <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 flex-1 min-w-0">
                            {/* Category Badge with animation */}
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              className="flex-shrink-0"
                            >
                              <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 text-primary px-3 py-1.5 rounded-full text-xs font-semibold border border-primary/20">
                                <CheckCircle className="w-3.5 h-3.5" />
                                <span>{faq.category}</span>
                              </span>
                            </motion.div>

                            {/* Question Text */}
                            <div className="flex-1 min-w-0 sm:mt-0.5">
                              <span className="text-foreground text-base md:text-lg font-semibold leading-relaxed block">
                                {faq.question}
                              </span>
                            </div>
                          </div>

                          {/* Toggle Icon with rotation animation */}
                          <motion.div
                            animate={{
                              rotate: activeAccordion === faq.id ? 180 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0"
                          >
                            <div
                              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                activeAccordion === faq.id
                                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg"
                                  : "bg-muted text-muted-foreground hover:bg-primary/10"
                              }`}
                            >
                              {activeAccordion === faq.id ? (
                                <Minus className="w-5 h-5" />
                              ) : (
                                <Plus className="w-5 h-5" />
                              )}
                            </div>
                          </motion.div>
                        </motion.button>

                        {/* Answer Content with AnimatePresence */}
                        <AnimatePresence initial={false}>
                          {activeAccordion === faq.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="px-4 pb-6 md:px-6 md:pb-8">
                                <motion.div
                                  initial={{ y: -10, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  transition={{ delay: 0.1, duration: 0.3 }}
                                  className="bg-gradient-to-br from-muted/50 to-primary/5 dark:from-muted/30 dark:to-primary/10 rounded-xl p-5 md:p-6 border-l-4 border-primary"
                                >
                                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                    {faq.answer}
                                  </p>
                                </motion.div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section with premium gradient */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mb-16 md:mb-20"
          >
            <div className="relative overflow-hidden bg-gradient-to-r from-primary to-accent rounded-3xl p-8 md:p-12 text-white shadow-2xl">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-grid-pattern" />
              </div>

              <div className="relative max-w-3xl mx-auto text-center">
                {/* Badge */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Still have questions?</span>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  className="text-3xl md:text-4xl font-black mb-4"
                >
                  Can't find what you're looking for?
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="text-white/90 mb-8 text-lg md:text-xl leading-relaxed"
                >
                  Our expert team is here to help you with personalized guidance
                  for your education loan journey.
                </motion.p>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                  className="bg-white text-primary font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 focus:ring-4 focus:ring-white/50"
                  onClick={() =>
                    window.open(
                      "https://calendly.com/priyank-edumateglobal/speak-to-our-financing-expert?month=2025-07",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  Contact Our Experts
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Stats Section with enhanced cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={statVariants}
                whileHover="hover"
                className="group"
              >
                <div className="relative overflow-hidden glass-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      stat.color === "primary"
                        ? "from-primary/5 to-accent/5"
                        : "from-accent/5 to-primary/5"
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <div className="relative">
                    {/* Icon with gradient background */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 bg-gradient-to-br ${
                        stat.color === "primary"
                          ? "from-primary to-accent"
                          : "from-accent to-primary"
                      } rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg`}
                    >
                      <stat.icon className="w-8 h-8" />
                    </motion.div>

                    {/* Number with count-up animation effect */}
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      className="text-4xl md:text-5xl font-black gradient-text mb-3 text-center"
                    >
                      {stat.number}
                    </motion.div>

                    {/* Label */}
                    <div className="text-muted-foreground text-center font-semibold text-sm md:text-base">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
