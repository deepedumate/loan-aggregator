import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, TrendingUp, Users } from "lucide-react";

/**
 * LENDING PARTNERS SLIDER COMPONENT - FIXED VERSION
 *
 * Fixes:
 * - White background for better logo visibility
 * - Proper contrast for dark/light modes
 * - Enhanced card styling
 * - Better gradient masks
 */

const LendingPartnersSlider = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const partnersRow1 = [
    { name: "Avanse", logo: "/images/logos/lending-partners/Avanse.png" },
    { name: "Credila", logo: "/images/logos/lending-partners/Credila.png" },
    { name: "MPower", logo: "/images/logos/lending-partners/MPower.png" },
    {
      name: "Prodigy",
      logo: "/images/logos/lending-partners/Prodigy-Finance.png",
    },
    {
      name: "IDFC FIRST",
      logo: "/images/logos/lending-partners/IDFC-FIRST.png",
    },
    { name: "Union Bank", logo: "/images/logos/lending-partners/union.png" },
    { name: "PNB", logo: "/images/logos/lending-partners/pnb.png" },
    { name: "Yes Bank", logo: "/images/logos/lending-partners/yes_bank.png" },
    { name: "Axis Bank", logo: "/images/logos/lending-partners/axis_bank.png" },
    {
      name: "Poonawalla",
      logo: "/images/logos/lending-partners/poonawalla.png",
    },
  ];

  // Duplicate for seamless loop
  const allPartners = [...partnersRow1, ...partnersRow1, ...partnersRow1];

  const features = [
    {
      icon: Shield,
      text: "Trusted Partners",
      color: "text-green-600 dark:text-green-400",
    },
    {
      icon: TrendingUp,
      text: "Best Rates",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Users,
      text: "Expert Support",
      color: "text-purple-600 dark:text-purple-400",
    },
  ];

  return (
    <div
      className="py-16 md:py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
      ref={ref}
    >
      {/* Background gradient orbs for subtle depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary dark:text-primary-light px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20"
            whileHover={{ scale: 1.05 }}
          >
            <Shield className="w-4 h-4" />
            <span>Trusted Financial Partners</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <span className="text-gray-900 dark:text-white">Our </span>
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Lending Partners
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            We've partnered with India's most trusted financial institutions to
            bring you the best education loan options
          </p>

          {/* Features */}
          <div className="flex justify-center gap-6 mb-12 flex-wrap">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <feature.icon className={`w-5 h-5 ${feature.color}`} />
                <span className="text-gray-600 dark:text-gray-300">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        {/* First Row - Moving Left to Right */}
        <div className="mb-8 relative py-4 overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -1680],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 120,
                ease: "linear",
              },
            }}
            style={{ width: "max-content" }}
          >
            {allPartners.map((partner, index) => (
              <motion.div
                key={`row1-${index}`}
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                <div className="group cursor-pointer bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl flex items-center justify-center shadow-md hover:shadow-xl w-56 h-28 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
                  <div className="relative flex items-center justify-center w-44 h-16 p-4">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced gradient fade masks */}
          <div
            className="absolute inset-0 pointer-events-none dark:hidden"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 10%, rgba(255,255,255,0) 90%, rgba(255,255,255,1) 100%)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none hidden dark:block"
            style={{
              background:
                "linear-gradient(to right, rgba(17,24,39,1) 0%, rgba(17,24,39,0) 10%, rgba(17,24,39,0) 90%, rgba(17,24,39,1) 100%)",
            }}
          />
        </div>

        {/* Second Row - Moving Right to Left */}
        <div className="relative py-4 overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [-1680, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 120,
                ease: "linear",
              },
            }}
            style={{ width: "max-content" }}
          >
            {allPartners.map((partner, index) => (
              <motion.div
                key={`row2-${index}`}
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                <div className="group cursor-pointer bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl flex items-center justify-center shadow-md hover:shadow-xl w-56 h-28 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
                  <div className="relative flex items-center justify-center w-44 h-16 p-4">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced gradient fade masks */}
          <div
            className="absolute inset-0 pointer-events-none dark:hidden"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 10%, rgba(255,255,255,0) 90%, rgba(255,255,255,1) 100%)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none hidden dark:block"
            style={{
              background:
                "linear-gradient(to right, rgba(17,24,39,1) 0%, rgba(17,24,39,0) 10%, rgba(17,24,39,0) 90%, rgba(17,24,39,1) 100%)",
            }}
          />
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                value: "15+",
                label: "Lending Partners",
                color: "text-primary",
                bgColor: "bg-primary/10",
              },
              {
                value: "₹1L - ₹2Cr",
                label: "Loan Range",
                color: "text-accent",
                bgColor: "bg-accent/10",
              },
              {
                value: "8.5%+",
                label: "Interest Rates",
                color: "text-success",
                bgColor: "bg-success/10",
              },
            ].map((stat, index) => (
              <motion.div key={index} className="group" whileHover={{ y: -4 }}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  <motion.div
                    className={`text-3xl font-bold mb-2 ${stat.color}`}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                      delay: index * 0.1,
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LendingPartnersSlider;
