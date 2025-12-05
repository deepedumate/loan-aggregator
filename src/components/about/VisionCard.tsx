import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Sparkles } from "lucide-react";

/**
 * Premium Vision Card Component
 *
 * Design Features:
 * - Glassmorphic background with subtle borders
 * - Icon with gradient background
 * - Hover lift animation with shadow transition
 * - Decorative corner element
 * - Smooth micro-interactions
 */
const VisionCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group h-full"
    >
      {/* Card container with glassmorphism */}
      <div className="relative overflow-hidden h-full">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 rounded-3xl" />

        {/* Decorative corner sparkle */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="absolute top-6 right-6 text-primary/20 dark:text-primary/30 group-hover:text-primary/40 dark:group-hover:text-primary/50 transition-colors duration-300"
        >
          <Sparkles className="w-8 h-8" />
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
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
              className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300"
            >
              <Lightbulb className="w-8 h-8" />
            </motion.div>

            {/* Title */}
            <h3 className="text-3xl font-black text-foreground group-hover:text-primary transition-colors duration-300">
              Vision
            </h3>
          </motion.div>

          {/* Elegant divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mb-6"
            style={{ transformOrigin: "left" }}
          />

          {/* Content */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground leading-relaxed text-lg"
          >
            Empowering students with transparent and comprehensive education
            financing solutions through a trusted platform enabling them to
            pursue academic aspirations with confidence.
          </motion.p>

          {/* Subtle bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </motion.div>
  );
};

export default VisionCard;
