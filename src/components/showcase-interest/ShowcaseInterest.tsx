import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import HomeHeroSection from "./HomeHeroSection";
import WhyEdumate from "./WhyEdumate";
import ProcessSteps from "./ProcessStep";
import StudyAbroadSection from "./StudyAbrodSection";
import LendingPartnersSlider from "./LendingPartnerSlider";
import UniversityLogosSection from "./UniversityLogosSection";
// import ScholarshipSection from "./ScholarshipSection";

/**
 * MAIN HOME PAGE COMPONENT
 *
 * Design Philosophy:
 * - Clean, premium fintech aesthetic inspired by Stripe and Plaid
 * - Smooth Framer Motion animations with stagger effects
 * - Glassmorphic cards with subtle depth
 * - Consistent 16px border radius for modern feel
 * - Soft shadows and gradient accents using existing color palette
 * - Mobile-first responsive design
 *
 * Color Usage:
 * - Primary (Trust Blue): Main CTAs, accents, important elements
 * - Accent (Energy Orange): Secondary CTAs, highlights
 * - Success (Green): Positive states, achievements
 * - Muted: Backgrounds, cards, subtle elements
 */

const ShowcaseInterest = () => {
  // Animation variants for page sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const, // Custom easing for premium feel
      },
    },
  } as const;

  return (
    <div className="presentation-page bg-gradient-to-br from-gray-50 via-white to-primary-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900/10 transition-colors duration-300 overflow-hidden">
      {/* Animated background gradient orbs for depth */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 bg-primary-200/20 dark:bg-primary-800/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-accent-200/20 dark:bg-accent-800/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Main Content with stagger animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section with enhanced animations */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <HomeHeroSection />
        </motion.section>

        {/* Why Edumate Section with slide-in animation */}
        <motion.section
          className="py-16 md:py-20 px-4 md:px-8 bg-white dark:bg-gray-900 relative"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Subtle section divider */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <WhyEdumate />
        </motion.section>

        {/* Process Steps with stagger effect */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <ProcessSteps />
        </motion.section>

        {/* Study Abroad Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <StudyAbroadSection />
        </motion.section>

        {/* University Partners Section with fade effect */}
        <motion.section
          className="py-16 md:py-20 bg-gradient-to-br from-muted via-background to-muted"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container mx-auto px-4">
            <UniversityLogosSection />
          </div>
        </motion.section>

        {/* Scholarship Section (Optional - currently commented) */}
        {/* <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <ScholarshipSection />
        </motion.section> */}

        {/* Partner Slider with smooth entrance */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <LendingPartnersSlider />
        </motion.section>

        {/* Footer CTA Section - Premium Dark Theme */}
        <motion.section
          className="relative py-20 md:py-28 lg:py-32 overflow-hidden"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Rich dark gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

          {/* Subtle animated gradient orbs using theme colors */}
          <motion.div
            className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"
            animate={{
              scale: [1.15, 1, 1.15],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-center"
              >
                {/* Trust Badge */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/10 mb-8 md:mb-10"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                  </span>
                  <span className="text-sm font-medium text-white/95">
                    Trusted by 10,000+ students
                  </span>
                </motion.div>

                {/* Main Heading with Theme Gradient */}
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 leading-[1.15] tracking-tight px-4"
                >
                  <span className="text-white">Ready to Start Your</span>
                  <br className="hidden sm:block" />
                  <span className="inline-block mt-1 sm:mt-2 bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
                    Education Journey?
                  </span>
                </motion.h2>

                {/* Subtitle with Better Readability */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-base md:text-lg lg:text-xl text-slate-300 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
                >
                  Join thousands of students who have successfully secured their
                  education funding through our AI-powered platform. Get
                  personalized loan offers in minutes.
                </motion.p>

                {/* CTA Buttons with Theme Colors */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14 md:mb-16"
                >
                  {/* Primary CTA - Using Theme Primary Color */}
                  <motion.button
                    className="group relative px-8 py-3.5 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-xl shadow-lg shadow-primary/25 overflow-hidden min-w-[200px] transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Get Started Now
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>

                    {/* Shimmer effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.button>

                  {/* Secondary CTA - Refined */}
                  <motion.button
                    className="group px-8 py-3.5 bg-white/[0.06] backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300 min-w-[200px]"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Learn More
                      <svg
                        className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </span>
                  </motion.button>
                </motion.div>

                {/* Trust Indicators with Theme Success Color */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-12 text-sm text-slate-400"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-success"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                    </div>
                    <span className="whitespace-nowrap text-slate-300">
                      No credit score impact
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-success"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                    </div>
                    <span className="whitespace-nowrap text-slate-300">
                      100% secure & confidential
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-success"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                    </div>
                    <span className="whitespace-nowrap text-slate-300">
                      Get offers in 2 minutes
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </motion.div>

      {/* Scroll to top button - Premium style */}
      <ScrollToTop />
    </div>
  );
};

/**
 * SCROLL TO TOP COMPONENT
 * Premium animated button that appears on scroll
 */
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-primary-600 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow group"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="w-6 h-6 rotate-[-90deg] group-hover:rotate-[-90deg] transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ShowcaseInterest;
