import { useEffect } from "react";
import { motion } from "framer-motion";
import WhyPartnerEdumate from "./WhyPartnerEdumate";
import PartnerHeader from "./PartnerHeader";

/**
 * Premium Fintech Partner Page - Main Component
 *
 * Design Decisions:
 * - Smooth page transitions with Framer Motion
 * - Seamless section flow
 * - Maintained form redirect functionality
 * - Clean, modern layout structure
 * - Optimized for performance
 */

export default function PremiumPartnerPage() {
  useEffect(() => {
    // Setup form redirect functionality
    const setupFormRedirect = () => {
      const formRedirectElements =
        document.getElementsByClassName("form-redirect");
      Array.from(formRedirectElements).forEach((item) => {
        item.addEventListener("click", bringFormInFrame);
      });
    };

    const bringFormInFrame = () => {
      const partnerForm = document.getElementById("aqewa");
      if (partnerForm) {
        partnerForm.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    setupFormRedirect();

    // Cleanup function
    return () => {
      const formRedirectElements =
        document.getElementsByClassName("form-redirect");
      Array.from(formRedirectElements).forEach((item) => {
        item.removeEventListener("click", bringFormInFrame);
      });
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="presentation-page bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      {/* Premium Header Section */}
      <PartnerHeader />

      {/* Premium Why Partner Section */}
      <WhyPartnerEdumate />
    </motion.div>
  );
}
