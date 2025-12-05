import React from "react";
import { motion, spring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TrendingUp, ExternalLink } from "lucide-react";

/**
 * SCHOLARSHIP SECTION COMPONENT
 *
 * Premium Features:
 * - Scholarship cards with image overlays
 * - Glassmorphic amount badges
 * - Hover animations with lift and scale
 * - Gradient CTA buttons
 * - Stagger animations for cards
 */

const ScholarshipSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scholarships = [
    {
      id: "S66da9a21c213h",
      school_id: "U66ddae00a7668",
      name: "SEED Golden Ticket Club Scholarship",
      subheading: "Apply for 2 awards covering up to $5,000",
      about: "#",
      thumbnail: "/images/scholarship/SEED golden ticket.jpg",
      total: 10000,
      category: "business",
    },
    {
      id: "S66da9a21ce72g",
      school_id: "U66ddae00a7668",
      name: "SEED Business Leadership Scholarship",
      subheading:
        "Apply for 1 award covering up to $5,000 of your tuition fees.",
      about: "#",
      thumbnail: "/images/scholarship/Business Leadership.png",
      total: 5000,
      category: "business",
    },
    {
      id: "S66da9a21ce88t",
      school_id: "U66ddae00a7668",
      name: "SEED STEM Leadership Scholarship",
      subheading:
        "Apply for 1 award covering up to $5,000 of your tuition fees.",
      about: "#",
      thumbnail: "/images/scholarship/Stem Leadership.png",
      total: 5000,
      category: "STEM",
    },
    {
      id: "S66da9a21ce95x",
      school_id: "U66ddae00a7668",
      name: "SEED Women in Leadership Scholarship",
      subheading:
        "Apply for 1 award covering up to $5,000 of your tuition fees.",
      about: "#",
      thumbnail: "/images/scholarship/Women Leadership.png",
      total: 5000,
      category: null,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
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
      className="py-16 md:py-20 bg-gradient-to-br from-muted via-background to-primary/5 relative overflow-hidden"
      ref={ref}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20"
            whileHover={{ scale: 1.05 }}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Scholarship Opportunities</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Access </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              $3.5M
            </span>
            <span className="text-foreground"> in SEED Scholarships</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Fill out the interest form and get eligible for the SEED Scholarship
            Fund
          </p>
        </motion.div>

        {/* Scholarship Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {scholarships.map((scholarship, index) => (
            <motion.div
              key={scholarship.id}
              className="group cursor-pointer"
              variants={cardVariants}
              whileHover={{ y: -12 }}
            >
              <div className="bg-card/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border h-full flex flex-col">
                {/* Image Section */}
                <div className="relative overflow-hidden h-48 bg-muted">
                  <img
                    src={scholarship.thumbnail}
                    alt={`${scholarship.name} scholarship program`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category badge */}
                  {scholarship.category && (
                    <motion.div
                      className="absolute top-4 right-4 px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {scholarship.category.toUpperCase()}
                    </motion.div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6 text-center flex-1 flex flex-col">
                  <h5 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors leading-tight">
                    {scholarship.name}
                  </h5>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
                    {scholarship.subheading}
                  </p>

                  {/* Amount Card */}
                  <motion.div
                    className="bg-gradient-to-r from-foreground to-foreground/90 text-primary-foreground rounded-xl p-4 mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold">
                        USD {scholarship.total.toLocaleString()}
                      </div>
                      <div className="text-xs opacity-80">
                        Scholarship Amount
                      </div>
                    </div>
                  </motion.div>

                  {/* Apply Button */}
                  <motion.a
                    href={`https://scholarships.seedglobaleducation.com/scholarship.php?id=${scholarship.id}`}
                    className={`group/btn relative inline-flex items-center justify-center gap-2 w-full px-6 py-3 text-white font-semibold rounded-xl transition-all duration-300 overflow-hidden ${
                      scholarship.category === "STEM"
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                        : "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    role="button"
                  >
                    <span className="relative z-10">Apply Now</span>
                    <ExternalLink className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />

                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-2xl shadow-lg text-lg overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Explore More Scholarships</span>

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ScholarshipSection;
