import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Shield,
  Users,
  CheckCircle,
  Heart,
  Lightbulb,
} from "lucide-react";

/**
 * Premium Values Section Component
 *
 * Design Features:
 * - Grid layout with glassmorphic cards
 * - Icon with gradient backgrounds
 * - Staggered reveal animations
 * - Hover lift and scale effects
 * - Premium section header with badge
 */
const ValueSection: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description:
        "Building relationships through honest communication and clear processes",
      gradient: "from-primary to-primary-light",
    },
    {
      icon: Users,
      title: "Student-First Approach",
      description:
        "Every decision is made with student success and wellbeing in mind",
      gradient: "from-accent to-accent-light",
    },
    {
      icon: GraduationCap,
      title: "Educational Excellence",
      description:
        "Supporting academic dreams with the right financial foundation",
      gradient: "from-success to-emerald-500",
    },
    {
      icon: Heart,
      title: "Personalized Support",
      description:
        "Understanding that every student's journey is unique and valuable",
      gradient: "from-pink-500 to-pink-600",
    },
    {
      icon: CheckCircle,
      title: "Reliability",
      description:
        "Consistent, dependable service throughout your education journey",
      gradient: "from-primary-light to-accent",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Continuously improving our platform for better student experiences",
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 border border-primary/20 dark:border-primary/30 text-primary px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
            <Heart className="w-4 h-4" />
            <span>Our Values</span>
          </div>

          {/* Section title */}
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            What Drives Us Forward
          </h2>

          {/* Elegant divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
          />
        </motion.div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {values.map((value, index) => {
            const IconComponent = value.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group h-full"
              >
                {/* Premium card container */}
                <div className="glass-card rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 h-full relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
                  />

                  {/* Content */}
                  <div className="relative text-center">
                    {/* Icon with gradient background */}
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <IconComponent className="w-8 h-8" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-black text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </h3>

                    {/* Elegant mini divider */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                      className={`h-0.5 w-16 bg-gradient-to-r ${value.gradient} mx-auto mb-4 rounded-full`}
                    />

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
