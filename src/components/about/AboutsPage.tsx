import React from "react";
import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Globe } from "lucide-react";
import AboutUsHeader from "./AboutUsHeader";
import LeadershipCarousel from "./LeadershipCarousel";
import MissionCard from "./MissionCard";
import ValuesSection from "./ValueSection";
import VisionCard from "./VisionCard";

/**
 * Premium Fintech About Page
 * 
 * Design Philosophy:
 * - Clean, minimal aesthetic inspired by Stripe/Plaid/Brex
 * - Subtle glassmorphic effects with your brand colors
 * - Smooth micro-interactions (200-300ms)
 * - Consistent 12-16px border radius
 * - Soft shadows, no harsh borders
 * - Generous white space for premium feel
 */
const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Hero Section */}
      <AboutUsHeader />

      {/* Main Content Area */}
      <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
        
        {/* Enhanced Intro Section with Glassmorphism */}
        <section className="py-24 px-4 relative overflow-hidden">
          {/* Subtle background gradient orbs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              {/* Premium glassmorphic card */}
              <div className="glass-card rounded-3xl p-12 md:p-16 shadow-xl relative overflow-hidden">
                {/* Decorative corner element */}
                <div className="absolute top-6 right-6 text-primary/20 dark:text-primary/30">
                  <Globe className="w-12 h-12" />
                </div>

                <div className="text-center max-w-5xl mx-auto">
                  {/* Premium badge with gradient */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 border border-primary/20 dark:border-primary/30 text-primary px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-sm"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>About Edumate Global</span>
                  </motion.div>

                  {/* Main headline with gradient text */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight"
                  >
                    <span className="text-foreground">
                      Empowering Students.{" "}
                    </span>
                    <span className="gradient-text">
                      Simplifying Education Loans.
                    </span>
                  </motion.h1>

                  {/* Elegant divider */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-10 rounded-full"
                  />

                  {/* Content with staggered animations */}
                  <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-muted-foreground"
                    >
                      At Edumate, we understand that financing higher education
                      can be a complex, often overwhelming experience. With
                      countless lenders, varying terms, and limited guidance,
                      students and families are frequently left navigating this
                      critical step alone.
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="font-bold text-primary text-2xl"
                    >
                      We're here to change that.
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="text-muted-foreground"
                    >
                      Edumate is a student-first platform designed to simplify
                      the education loan journey. We provide unbiased,
                      end-to-end support—from understanding loan options and
                      comparing offers, to handling documentation and
                      coordinating with Banks and NBFCs. All of this, with one
                      clear goal: helping students access the funding they need,
                      without stress or confusion.
                    </motion.p>

                    {/* Highlighted callout box */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="bg-gradient-to-r from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 border border-primary/10 dark:border-primary/20 rounded-2xl p-8 shadow-soft"
                    >
                      <p className="text-foreground font-semibold text-lg">
                        <span className="font-black text-primary">
                          We are not a lender.
                        </span>{" "}
                        We do not push products that do not make sense to you.
                        We are your partner through the funding journey—fair,
                        transparent, and entirely focused on your needs.
                      </p>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="text-muted-foreground"
                    >
                      Our role is simple, yet powerful: To give students the
                      clarity and confidence they need to move forward—with the
                      right financing and the right support.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                      className="gradient-text font-black text-2xl pt-4"
                    >
                      Let's make your education journey smoother, smarter, and
                      truly empowering.
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 border border-primary/20 dark:border-primary/30 text-primary px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
                <TrendingUp className="w-4 h-4" />
                <span>Our Foundation</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
                Vision & Mission
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Driving our commitment to student success through clear purpose
                and unwavering dedication
              </p>
            </motion.div>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <VisionCard />
              <MissionCard />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <ValuesSection />

        {/* Leadership Section */}
        <LeadershipCarousel />
      </div>
    </div>
  );
};

export default AboutPage;