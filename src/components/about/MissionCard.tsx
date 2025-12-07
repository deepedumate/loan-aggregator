import React from "react";
import { motion } from "framer-motion";
import { Target, CheckCircle } from "lucide-react";

/**
 * Premium Mission Card Component
 *
 * Design Features:
 * - Glassmorphic background with gradient accents
 * - Animated list items with custom bullets
 * - Staggered reveal animations
 * - Hover effects on individual items
 * - Gradient icon and divider
 */
const MissionCard: React.FC = () => {
  const missionPoints = [
    "Supports students in finding the right education loans through a transparent and unbiased process",
    "Eliminates confusion by offering clear, expert guidance—at no cost to students",
    "Collaborates with trusted banks and NBFCs without compromising student interests",
    "Builds confidence and clarity into every step of the loan journey",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group h-full"
    >
      {/* Card container with glassmorphism */}
      <div className="relative overflow-hidden h-full">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 dark:from-accent/10 dark:to-primary/10 rounded-3xl" />

        {/* Decorative corner element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="absolute top-6 right-6 text-accent/20 dark:text-accent/30 group-hover:text-accent/40 dark:group-hover:text-accent/50 transition-colors duration-300"
        >
          <CheckCircle className="w-8 h-8" />
        </motion.div>

        {/* Main card with glass effect */}
        <div className="relative glass-card rounded-3xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 h-full">
          {/* Icon header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center gap-4 mb-6"
          >
            {/* Gradient icon container */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ duration: 0.3 }}
              className="w-16 h-16 bg-gradient-to-r from-accent to-accent-light rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300"
            >
              <Target className="w-8 h-8" />
            </motion.div>

            {/* Title */}
            <h3 className="text-3xl font-black text-foreground group-hover:text-accent transition-colors duration-300">
              Mission
            </h3>
          </motion.div>

          {/* Elegant divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-20 bg-gradient-to-r from-accent to-primary rounded-full mb-6"
            style={{ transformOrigin: "left" }}
          />

          {/* Mission points list with staggered animation */}
          <div className="space-y-4">
            {missionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 5, scale: 1.01 }}
                className="flex items-start gap-3 group/item"
              >
                {/* Custom gradient bullet */}
                <motion.div
                  whileHover={{ scale: 1.3, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-accent to-primary mt-2 shadow-sm"
                />

                {/* Point text */}
                <p className="text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors duration-200">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Subtle bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </motion.div>
  );
};

export default MissionCard;
