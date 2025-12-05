import React, { useState } from "react";
import { motion, AnimatePresence, spring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import universityDetails from "../../data/universityDetails.json";

/**
 * UNIVERSITY LOGOS SECTION COMPONENT
 *
 * Premium Features:
 * - Grid layout with hover animations
 * - Glassmorphic logo cards
 * - Expandable view with smooth transitions
 * - Stagger animations on load
 * - Hover lift and scale effects
 */

const UniversityLogosSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const allSchools = universityDetails;
  const displaySchools = showAll ? allSchools : allSchools.slice(0, 12);
  const hasMoreSchools = allSchools.length > 12;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: spring,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="w-full max-w-9xl mx-auto px-4 py-12" ref={ref}>
      {/* Header Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 border border-primary/20"
          whileHover={{ scale: 1.05 }}
        >
          <Sparkles className="w-4 h-4" />
          <span>Schools Supported So Far</span>
        </motion.div>

        <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          We support students applying to world-renowned institutions.
        </h4>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          You can apply for education loans while applying to these institutions
          or any others.
        </p>
      </motion.div>

      {/* Universities Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <AnimatePresence>
          {displaySchools.map((school, index) => (
            <motion.div
              key={`${school.university}_${index}`}
              className="group text-center"
              variants={itemVariants}
              layout
            >
              {/* Logo Card */}
              <motion.div
                className="bg-card/80 backdrop-blur-xl rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary/30 p-6 flex items-center justify-center mb-4"
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <div className="relative w-full h-32 md:h-36">
                  <img
                    src={school.logo_file_name}
                    alt={school.university}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </motion.div>

              {/* University Name */}
              <motion.h3
                className="text-sm font-semibold text-foreground leading-tight group-hover:text-primary transition-colors px-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {school.university}
                {school.school_name ? ` - ${school.school_name}` : ""}
              </motion.h3>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* View All Button */}
      {hasMoreSchools && (
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-accent to-accent/80 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  View All Partner Universities
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </span>

            {/* Shimmer effect on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default UniversityLogosSection;
