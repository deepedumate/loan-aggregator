import React from "react";
import { motion, spring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Calendar,
  User,
  FileText,
  Shield,
  DollarSign,
  ArrowRight,
  ArrowDown,
  CheckCircle,
} from "lucide-react";

/**
 * PROCESS STEPS COMPONENT
 *
 * Premium Fintech Design:
 * - Horizontal flow for desktop with connecting arrows
 * - Vertical timeline for mobile with animated connectors
 * - Glassmorphic step cards with hover lift effects
 * - Gradient badges and icons
 * - Smooth stagger animations
 * - Numbered badges with shadow effects
 */

const ProcessSteps = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: Calendar,
      title: "Book Appointment",
      description:
        "Schedule a convenient time to discuss your education plans and financial needs.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      iconColor: "text-blue-600 dark:text-blue-400",
      badgeColor: "bg-blue-600 dark:bg-blue-500",
      arrowColor: "text-blue-400",
      details: [
        "Quick 15-min consultation",
        "Flexible timing",
        "No commitment required",
      ],
    },
    {
      icon: User,
      title: "Connect with Counselor",
      description:
        "Get paired with our expert education loan counselors for personalized guidance.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      iconColor: "text-orange-600 dark:text-orange-400",
      badgeColor: "bg-orange-600 dark:bg-orange-500",
      arrowColor: "text-orange-400",
      details: [
        "Experienced professionals",
        "Personalized approach",
        "University-specific advice",
      ],
    },
    {
      icon: FileText,
      title: "Document Assessment",
      description:
        "Our team reviews your profile to identify the best loan options for your needs.",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
      iconColor: "text-cyan-600 dark:text-cyan-400",
      badgeColor: "bg-cyan-600 dark:bg-cyan-500",
      arrowColor: "text-cyan-400",
      details: [
        "Complete profile review",
        "Eligibility assessment",
        "Best match identification",
      ],
    },
    {
      icon: Shield,
      title: "We Handle Everything",
      description:
        "Sit back while we manage all communications with lenders for a stress-free experience.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      iconColor: "text-green-600 dark:text-green-400",
      badgeColor: "bg-green-600 dark:bg-green-500",
      arrowColor: "text-green-400",
      details: [
        "End-to-end management",
        "Regular updates",
        "Hassle-free process",
      ],
    },
    {
      icon: DollarSign,
      title: "Receive Funds",
      description:
        "Get quick approval and seamless fund disbursement directly to your institution.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      iconColor: "text-purple-600 dark:text-purple-400",
      badgeColor: "bg-purple-600 dark:bg-purple-500",
      arrowColor: "text-purple-400",
      details: [
        "Fast approval process",
        "Direct disbursement",
        "Multiple payment options",
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section
      className="py-16 md:py-20 bg-gradient-to-br from-muted via-background to-accent/5 relative overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20"
            whileHover={{ scale: 1.05 }}
          >
            <CheckCircle className="w-4 h-4" />
            <span>Simple 5-Step Process</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Your Loan Approval </span>
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Roadmap
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Navigate through our streamlined process to secure your education
            funding smoothly and efficiently
          </p>
        </motion.div>

        {/* Steps - Desktop Horizontal Layout */}
        <div className="relative">
          <motion.div
            className="hidden lg:flex justify-center items-stretch gap-4 relative px-2"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                {/* Step Card */}
                <motion.div className="flex-1 max-w-sm" variants={stepVariants}>
                  <motion.div
                    className="bg-card/80 backdrop-blur-xl rounded-3xl shadow-lg border border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden group"
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    {/* Gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />

                    <div className="p-8 text-center relative z-10 flex flex-col h-full">
                      {/* Icon Container */}
                      <div className="relative mb-8">
                        <motion.div
                          className={`mx-auto w-20 h-20 rounded-2xl flex items-center justify-center ${step.bgColor} relative shadow-lg`}
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <step.icon
                            className={`w-10 h-10 ${step.iconColor}`}
                          />
                          {/* Number badge */}
                          <span
                            className={`absolute -top-3 -right-3 w-8 h-8 ${step.badgeColor} text-white text-sm font-bold rounded-full flex items-center justify-center shadow-lg ring-4 ring-background`}
                          >
                            {index + 1}
                          </span>
                        </motion.div>
                      </div>

                      {/* Content */}
                      <h6 className="text-xl font-bold mb-4 text-foreground leading-tight">
                        {step.title}
                      </h6>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                        {step.description}
                      </p>

                      {/* Details list - Shows on hover */}
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ height: 0 }}
                      >
                        <div className="space-y-2 text-xs text-muted-foreground">
                          {step.details.map((detail, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 justify-center"
                            >
                              <CheckCircle className="w-3 h-3 text-success" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <motion.div
                    className={`flex items-center justify-center mt-12 ${step.arrowColor} relative z-20 flex-shrink-0`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
                  >
                    <div className="bg-card/80 backdrop-blur-sm rounded-full p-3 shadow-lg border border-border">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Steps - Mobile/Tablet Vertical Layout */}
          <motion.div
            className="lg:hidden space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <motion.div variants={stepVariants}>
                  <motion.div
                    className="bg-card/80 backdrop-blur-xl rounded-3xl shadow-lg border border-border hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                    whileHover={{ x: 4 }}
                  >
                    {/* Gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />

                    <div className="p-6 relative z-10">
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className="flex-shrink-0">
                          <div
                            className={`w-16 h-16 rounded-2xl flex items-center justify-center ${step.bgColor} relative shadow-md`}
                          >
                            <step.icon
                              className={`w-8 h-8 ${step.iconColor}`}
                            />
                            <span
                              className={`absolute -top-2 -right-2 w-7 h-7 ${step.badgeColor} text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg`}
                            >
                              {index + 1}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h6 className="text-lg font-bold mb-2 text-foreground">
                            {step.title}
                          </h6>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                            {step.description}
                          </p>

                          {/* Details */}
                          <div className="space-y-1">
                            {step.details.map((detail, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-2 text-xs text-muted-foreground"
                              >
                                <CheckCircle className="w-3 h-3 text-success flex-shrink-0" />
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Arrow down for mobile */}
                {index < steps.length - 1 && (
                  <motion.div
                    className={`flex justify-center ${step.arrowColor} -my-3`}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
                  >
                    <div className="bg-card/80 backdrop-blur-sm rounded-full p-3 shadow-lg border border-border">
                      <ArrowDown className="w-5 h-5" />
                    </div>
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
