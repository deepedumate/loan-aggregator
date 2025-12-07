import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";
import { motion, AnimatePresence, spring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Clock,
  Building2,
  IndianRupee,
  TrendingUp,
  Users,
  Shield,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/**
 * HOME HERO SECTION COMPONENT
 *
 * Premium Fintech Design Features:
 * - Glassmorphic cards with backdrop blur
 * - Smooth Framer Motion animations with spring physics
 * - Interactive insight carousel with touch support
 * - Responsive flag grid with hover states
 * - Clean typography hierarchy
 * - Soft shadows and gradients from design system
 *
 * Performance Optimizations:
 * - Intersection Observer for visibility
 * - Reduced motion support
 * - Optimized image placeholders
 * - Memoized calculations
 */

const ANIMATION_DELAYS = {
  CAROUSEL_INTERVAL: 5000,
  STAGGER: 0.1,
} as const;

const METRICS = {
  STUDENTS_FUNDED: "50,000+",
  TOTAL_DISBURSED: "₹500+ Cr",
  SUCCESS_RATE: "99.2%",
  PROCESSING_TIME: "2 Days",
  LENDERS_COUNT: "12+",
} as const;

const HomeHeroSection = () => {
  const [currentInsight, setCurrentInsight] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [userPrefersReducedMotion, setUserPrefersReducedMotion] =
    useState(false);

  // Intersection observer for scroll animations
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setUserPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => {
      setUserPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Countries data with flags
  const countries = useMemo(
    () => [
      { code: "US", name: "United States", flag: "/images/flags2/usa.jpg" },
      { code: "UK", name: "United Kingdom", flag: "/images/flags2/uk.jpg" },
      { code: "CA", name: "Canada", flag: "/images/flags2/canada.jpg" },
      { code: "AU", name: "Australia", flag: "/images/flags2/australia.jpg" },
      { code: "SG", name: "Singapore", flag: "/images/flags2/singapore.jpg" },
      { code: "DE", name: "Germany", flag: "/images/flags2/germany.jpg" },
      { code: "FR", name: "France", flag: "/images/flags2/france.jpg" },
      { code: "IRE", name: "Ireland", flag: "/images/flags2/ireland.jpg" },
      { code: "AE", name: "UAE", flag: "/images/flags2/uae.jpg" },
      { code: "IN", name: "India", flag: "/images/flags2/india.jpg" },
    ],
    []
  );

  // Platform insights for carousel
  const insights = useMemo(
    () => [
      {
        title: "Market Intelligence",
        metric: `Real-time rates from ${METRICS.LENDERS_COUNT} lenders`,
        description:
          "Our AI continuously monitors interest rates across financial institutions.",
        data: "Updated every 15 minutes",
        icon: "📊",
        gradient: "from-blue-500 to-cyan-500",
      },
      {
        title: "Approval Analytics",
        metric: `${METRICS.SUCCESS_RATE} success rate for qualified applicants`,
        description:
          "Advanced algorithms pre-qualify candidates based on academic performance.",
        data: `Based on ${METRICS.STUDENTS_FUNDED} applications`,
        icon: "🎯",
        gradient: "from-green-500 to-emerald-500",
      },
      {
        title: "Speed Optimization",
        metric: `Average processing: ${METRICS.PROCESSING_TIME}`,
        description:
          "Streamlined digital verification and instant decision algorithms.",
        data: "vs 2-3 weeks industry standard",
        icon: "⚡",
        gradient: "from-purple-500 to-violet-500",
      },
      {
        title: "Cost Transparency",
        metric: "₹0 hidden charges",
        description:
          "Edumate doesn't charge anything. Complete fee transparency.",
        data: "Save ₹15,000+ on average",
        icon: "💎",
        gradient: "from-orange-500 to-amber-500",
      },
    ],
    []
  );

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying || userPrefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentInsight((prev) => (prev + 1) % insights.length);
    }, ANIMATION_DELAYS.CAROUSEL_INTERVAL);

    return () => clearInterval(interval);
  }, [isAutoPlaying, insights.length, userPrefersReducedMotion]);

  // Navigation handlers
  const handlePrevInsight = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentInsight((prev) => (prev - 1 + insights.length) % insights.length);
  }, [insights.length]);

  const handleNextInsight = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentInsight((prev) => (prev + 1) % insights.length);
  }, [insights.length]);

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
        type: spring,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section ref={ref} className="relative min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust indicators header - Glassmorphic style */}
        <motion.header
          className="py-6 mb-12 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-soft"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 px-6">
            {/* Left: Status Indicators */}
            <div className="flex flex-wrap items-center gap-3">
              <motion.div
                className="flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-2 h-2 bg-success rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm font-medium text-success-foreground">
                  Live rates
                </span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary-foreground">
                  {METRICS.STUDENTS_FUNDED} funded
                </span>
              </motion.div>
            </div>

            {/* Right: Statistics */}
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
                <span className="text-muted-foreground">Total disbursed:</span>
                <span className="ml-2 font-bold text-foreground">
                  {METRICS.TOTAL_DISBURSED}
                </span>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
                <span className="text-muted-foreground">Success:</span>
                <span className="ml-2 font-bold text-success">
                  {METRICS.SUCCESS_RATE}
                </span>
              </div>
            </div>
          </div>
        </motion.header>

        <main className="grid lg:grid-cols-5 gap-12">
          {/* Main content - Left side */}
          <motion.div
            className="lg:col-span-3 space-y-10"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Hero heading with gradient */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1]">
                <span className="text-foreground">Smart Students Make </span>
                <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
                  Smarter Funding Decisions
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                Access exclusive education loan rates, get instant approvals,
                and make data-driven decisions with our comprehensive comparison
                platform.
              </p>
            </motion.div>

            {/* Enhanced Metrics Grid - Desktop */}
            <motion.div
              variants={itemVariants}
              className="hidden sm:grid sm:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: Clock,
                  value: "2 min",
                  label: "For Pre-eligibility",
                  color: "primary",
                  gradient: "from-primary-50 to-primary-100/50",
                },
                {
                  icon: Building2,
                  value: METRICS.LENDERS_COUNT,
                  label: "Marquee Lenders",
                  color: "accent",
                  gradient: "from-accent-50 to-accent-100/50",
                },
                {
                  icon: IndianRupee,
                  value: "₹0",
                  label: "Edumate charges",
                  color: "success",
                  gradient: "from-green-50 to-green-100/50",
                },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
                  whileHover={{ y: -4, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 bg-${metric.color}/10 rounded-xl`}>
                        <metric.icon
                          className={`w-6 h-6 text-${metric.color}`}
                        />
                      </div>
                      <TrendingUp
                        className={`w-5 h-5 text-${metric.color} opacity-60`}
                      />
                    </div>
                    <div
                      className={`text-4xl font-black text-${metric.color} mb-2`}
                    >
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {metric.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile Timeline */}
            <motion.div variants={itemVariants} className="sm:hidden">
              <MobileTimeline />
            </motion.div>

            {/* Process flow - Premium badges */}
            <motion.nav variants={itemVariants} className="w-full">
              <ol className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                {[
                  { color: "primary", text: "Apply digitally" },
                  { color: "accent", text: "Lender Approval" },
                  { color: "success", text: "Fund disbursement" },
                ].map((step, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`w-2 h-2 bg-${step.color} rounded-full`} />
                    <span>{step.text}</span>
                  </motion.li>
                ))}
              </ol>
            </motion.nav>

            {/* Study destinations - Interactive flags */}
            {inView && (
              <motion.section
                variants={itemVariants}
                className="bg-card/60 backdrop-blur-xl rounded-2xl p-6 border border-border shadow-soft"
              >
                <h2 className="text-lg font-semibold text-foreground mb-4">
                  Study Destinations
                </h2>
                <div className="flex flex-wrap gap-3">
                  {countries.map((country, index) => (
                    <motion.div
                      key={country.code}
                      className="group cursor-pointer relative"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {/* Flag */}
                      <div className="w-12 h-12 rounded-xl overflow-hidden ring-2 ring-border group-hover:ring-primary transition-all shadow-md">
                        <img
                          src={country.flag}
                          alt={`${country.name} flag`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      {/* Tooltip */}
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10">
                        <div className="bg-foreground text-background text-xs px-3 py-2 rounded-xl shadow-xl whitespace-nowrap font-medium">
                          {country.name}
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  <span className="text-xs text-muted-foreground self-center">
                    & many more
                  </span>
                </div>
              </motion.section>
            )}
          </motion.div>

          {/* Insights Carousel - Right side */}
          <aside className="lg:col-span-2">
            {inView && (
              <motion.div
                className="lg:sticky lg:top-32"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="card-interactive p-6">
                  <header className="mb-6">
                    <h2 className="text-xl font-bold text-foreground">
                      Platform Intelligence
                    </h2>
                    <p className="text-muted-foreground text-sm mt-1">
                      Data-driven insights
                    </p>
                  </header>

                  {/* Carousel */}
                  <div className="relative min-h-[360px] overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-accent/5">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentInsight}
                        className="absolute inset-0 p-6"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="h-full flex flex-col justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-start gap-3 mb-4">
                              <div className="text-2xl">
                                {insights[currentInsight].icon}
                              </div>
                              <div className="text-sm font-semibold text-primary uppercase tracking-wide">
                                {insights[currentInsight].title}
                              </div>
                            </div>

                            <div className="mb-4">
                              <div className="text-xl font-bold text-foreground mb-2 leading-tight">
                                {insights[currentInsight].metric}
                              </div>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {insights[currentInsight].description}
                              </p>
                            </div>
                          </div>

                          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 border border-border">
                            <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                              Data point
                            </div>
                            <div className="text-sm font-semibold text-foreground">
                              {insights[currentInsight].data}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-end gap-2 mt-4">
                    <motion.button
                      onClick={handlePrevInsight}
                      className="p-3 bg-muted hover:bg-muted/80 rounded-xl transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      onClick={handleNextInsight}
                      className="p-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </aside>
        </main>

        {/* Footer */}
        <motion.footer
          className="border-t border-border mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="py-8 text-center">
            <p className="text-muted-foreground text-sm">
              Trusted by students at 3000+ Pre Approved Universities | 30+
              Countries Supported | Loans available for UG, Certification,
              Executive & PG Programs
            </p>
          </div>
        </motion.footer>
      </div>
    </section>
  );
};

/**
 * MOBILE TIMELINE COMPONENT
 * Vertical timeline for mobile devices
 */
const MobileTimeline = () => {
  const steps = [
    {
      icon: Clock,
      label: "Lightning Fast",
      value: "2 minutes",
      desc: "Complete pre-eligibility check",
      color: "primary",
    },
    {
      icon: Building2,
      label: "Vast Network",
      value: "12+ lenders",
      desc: "Marquee Indian & international banks",
      color: "accent",
    },
    {
      icon: IndianRupee,
      label: "100% Free",
      value: "₹0 charges",
      desc: "No hidden fees, completely transparent",
      color: "success",
    },
  ];

  return (
    <div className="relative py-4">
      {/* Connecting line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-success" />

      <div className="space-y-5">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative flex items-start gap-3 pl-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="relative z-10 flex-shrink-0">
              <div
                className={`w-10 h-10 rounded-full bg-gradient-to-br from-${step.color} to-${step.color}/80 flex items-center justify-center shadow-lg ring-4 ring-background`}
              >
                <step.icon className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="flex-1 pt-0.5">
              <div
                className={`bg-gradient-to-br from-${step.color}/10 to-${step.color}/5 rounded-xl p-4 border-l-3 border-${step.color}`}
              >
                <div className="text-xs font-bold text-${step.color} uppercase tracking-wider mb-1">
                  {step.label}
                </div>
                <div className={`text-2xl font-black text-${step.color} mb-1`}>
                  {step.value}
                </div>
                <p className="text-xs text-muted-foreground font-medium leading-snug">
                  {step.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomeHeroSection;
