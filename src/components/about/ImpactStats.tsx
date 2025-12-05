import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Award,
  Zap,
  Target,
  DollarSign,
} from "lucide-react";

/**
 * Impact Stats Component - Social Proof That Converts
 *
 * Shows massive numbers and achievements
 * No fade effects - pure scale and slide animations
 * Bold, colorful, impossible to miss
 */
const ImpactStats: React.FC = () => {
  const stats = [
    {
      icon: Users,
      number: "50,000+",
      label: "Students Funded",
      sublabel: "Across 30+ countries",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: DollarSign,
      number: "₹500+ Cr",
      label: "Loans Processed",
      sublabel: "With 50+ bank partners",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    },
    {
      icon: Award,
      number: "99.2%",
      label: "Approval Rate",
      sublabel: "Industry-leading success",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
    },
    {
      icon: Zap,
      number: "24 Hours",
      label: "Average Response",
      sublabel: "Fast when it matters",
      color: "from-violet-500 to-violet-600",
      bgColor: "bg-violet-50 dark:bg-violet-900/20",
    },
    {
      icon: Target,
      number: "100+",
      label: "Universities",
      sublabel: "Worldwide coverage",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
    },
    {
      icon: TrendingUp,
      number: "₹1-50L",
      label: "Loan Range",
      sublabel: "Flexible amounts",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header - Bold and Clear */}
        <motion.div
          initial={{ y: 40, scale: 0.95 }}
          whileInView={{ y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-black rounded-full text-lg mb-6 shadow-xl">
            <TrendingUp className="w-5 h-5" />
            By The Numbers
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Real Results. Real Impact.
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-semibold">
            Not just promises—here's what we've actually achieved
          </p>
        </motion.div>

        {/* Stats Grid - Bold Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, scale: 0.9 }}
              whileInView={{ y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="group relative"
            >
              {/* Card Background with gradient */}
              <div
                className={`${stat.bgColor} rounded-3xl p-8 border-2 border-gray-200 dark:border-gray-700 group-hover:border-transparent transition-all shadow-lg group-hover:shadow-2xl`}
              >
                {/* Gradient border on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity -z-10`}
                />

                {/* Icon */}
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  transition={{ duration: 0.3 }}
                  className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg group-hover:shadow-xl transition-shadow`}
                >
                  <stat.icon className="w-8 h-8" />
                </motion.div>

                {/* Number - HUGE */}
                <div className="mb-3">
                  <div
                    className={`text-5xl font-black bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-2`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-xl font-bold text-gray-900 dark:text-white">
                    {stat.label}
                  </div>
                </div>

                {/* Sublabel */}
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.sublabel}
                </div>

                {/* Progress bar animation */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.08 }}
                  className={`h-1 bg-gradient-to-r ${stat.color} rounded-full mt-4`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout - Trust Signal */}
        <motion.div
          initial={{ y: 40, scale: 0.95 }}
          whileInView={{ y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-gradient-to-r from-success/20 via-primary/10 to-success/20 dark:from-success/30 dark:via-primary/20 dark:to-success/30 px-10 py-6 rounded-3xl border-2 border-success/30">
            <div className="text-5xl">🏆</div>
            <div className="text-left">
              <p className="text-2xl font-black text-gray-900 dark:text-white">
                Trusted by Students Nationwide
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
                Join thousands who found their perfect loan match
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStats;
