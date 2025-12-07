import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  ArrowLeft,
  CheckCircle2,
  Circle,
  Sparkles,
  Shield,
  TrendingUp,
  FileText,
  Clock,
  Award,
} from "lucide-react";
import  {ProfileStage}  from "./ProfileStage";
import { EligibilityStage } from "./EligibilityStage";
import { LenderDiscoveryStage } from "./LenderDiscoveryStage";
import { DocumentationStage } from "./DocumentationStage";
import { ApplicationTrackingStage } from "./ApplicationTrackingStage";
import { LoanSummaryStage } from "./LoanSummaryStage";

/**
 * PREMIUM FINTECH LOAN AGGREGATOR APP
 *
 * Design Philosophy:
 * - Clean, minimal interface inspired by Stripe, Plaid, and modern fintech apps
 * - Glassmorphic cards with subtle depth and shadows
 * - Smooth Framer Motion animations throughout
 * - Progressive disclosure with clear visual hierarchy
 * - Trust-building elements with premium aesthetics
 * - Mobile-first responsive design
 *
 * Color Usage (from Edumate Design System):
 * - Primary (Trust Blue): Main actions, progress indicators
 * - Accent (Energy Orange): Highlights, completed states
 * - Success (Green): Achievements, positive feedback
 * - Muted: Backgrounds, subtle elements
 */

export default function StudentLoan() {
  // State Management
  const [currentStage, setCurrentStage] = useState(1);
  const [studentProfile, setStudentProfile] = useState(null);
  const [eligibilityScore, setEligibilityScore] = useState(null);
  const [selectedLender, setSelectedLender] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [application, setApplication] = useState(null);

  // Smooth scroll to top on stage change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentStage]);

  // Stage completion handlers
  const handleProfileComplete = (profile) => {
    setStudentProfile(profile);
    setCurrentStage(2);
  };

  const handleEligibilityComplete = (score) => {
    setEligibilityScore(score);
    setCurrentStage(3);
  };

  const handleLenderSelected = (lender) => {
    setSelectedLender(lender);
    setCurrentStage(4);
  };

  const handleDocumentsComplete = (docs) => {
    setDocuments(docs);
    const newApplication = {
      id: `APP${Date.now()}`,
      studentName: studentProfile?.fullName || "",
      lenderName: selectedLender?.lenderName || "",
      loanAmount: selectedLender?.requestedAmount || 0,
      status: "in-progress",
      currentStage: "documentation",
      submittedDate: new Date().toISOString(),
      expectedDecisionDate: new Date(
        Date.now() + 7 * 24 * 60 * 60 * 1000
      ).toISOString(),
    };
    setApplication(newApplication);
    setCurrentStage(5);
  };

  const handleViewSummary = () => {
    setCurrentStage(6);
  };

  // Navigation handlers
  const handleBack = () => {
    if (currentStage > 1) {
      setCurrentStage(currentStage - 1);
    }
  };

  const handleStageClick = (stageNumber) => {
    if (stageNumber <= currentStage) {
      setCurrentStage(stageNumber);
    }
  };

  const handleHome = () => {
    if (
      confirm("Are you sure you want to start over? All progress will be lost.")
    ) {
      window.location.reload();
    }
  };

  // Stage configuration with icons
  const stages = [
    {
      number: 1,
      title: "Profile",
      icon: FileText,
      completed: currentStage > 1,
      description: "Basic Information",
    },
    {
      number: 2,
      title: "Eligibility",
      icon: Shield,
      completed: currentStage > 2,
      description: "Check Eligibility",
    },
    {
      number: 3,
      title: "Lenders",
      icon: TrendingUp,
      completed: currentStage > 3,
      description: "Find Best Rates",
    },
    {
      number: 4,
      title: "Documents",
      icon: FileText,
      completed: currentStage > 4,
      description: "Upload Files",
    },
    {
      number: 5,
      title: "Tracking",
      icon: Clock,
      completed: currentStage > 5,
      description: "Track Progress",
    },
    {
      number: 6,
      title: "Summary",
      icon: Award,
      completed: currentStage > 6,
      description: "Review & Confirm",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-primary/5 dark:from-slate-900 dark:via-slate-800 dark:to-primary/5 transition-colors duration-300">
      {/* Animated background gradient orbs for depth */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Premium Header with Glassmorphic Effect */}
      <motion.div
        className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/50 dark:border-slate-700/50 shadow-soft"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Header Content */}
          <motion.div className="mb-6" variants={itemVariants}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-lg shadow-primary/25"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Sparkles className="w-5 h-5 text-white" />
                </motion.div>
                <div>
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
                    Student Loan Application
                  </h1>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                    Secure your education funding in minutes
                  </p>
                </div>
              </div>

              {/* Progress Badge */}
              <motion.div
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-semibold text-primary">
                    Step {currentStage} of {stages.length}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Current Stage Info */}
            <motion.p
              className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2"
              key={currentStage}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">
                {currentStage}
              </span>
              {stages[currentStage - 1]?.title} -{" "}
              {stages[currentStage - 1]?.description}
            </motion.p>
          </motion.div>

          {/* Premium Stage Navigation */}
          <PremiumStageNavigation
            stages={stages}
            currentStage={currentStage}
            onStageClick={handleStageClick}
          />
        </div>
      </motion.div>

      {/* Main Content Area with Animation */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentStage === 1 && (
              <ProfileStage
                onComplete={handleProfileComplete}
                initialData={studentProfile}
              />
            )}
            {currentStage === 2 && studentProfile && (
              <EligibilityStage
                profile={studentProfile}
                onComplete={handleEligibilityComplete}
              />
            )}
            {currentStage === 3 && studentProfile && eligibilityScore && (
              <LenderDiscoveryStage
                profile={studentProfile}
                eligibilityScore={eligibilityScore}
                onLenderSelected={handleLenderSelected}
              />
            )}
            {currentStage === 4 && studentProfile && selectedLender && (
              <DocumentationStage
                lender={selectedLender}
                onComplete={handleDocumentsComplete}
                profile={studentProfile}
              />
            )}
            {currentStage === 5 && application && (
              <ApplicationTrackingStage
                application={application}
                onViewSummary={handleViewSummary}
              />
            )}
            {currentStage === 6 && selectedLender && application && (
              <LoanSummaryStage
                lender={selectedLender}
                application={application}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Premium Bottom Navigation Bar */}
      <PremiumNavigationBar
        currentStage={currentStage}
        totalStages={stages.length}
        onBack={handleBack}
        onHome={handleHome}
        showBack={currentStage > 1}
      />
    </div>
  );
}

/**
 * PREMIUM STAGE NAVIGATION COMPONENT
 * Modern progress indicator with glassmorphic cards
 */
function PremiumStageNavigation({ stages, currentStage, onStageClick }) {
  return (
    <div className="relative">
      {/* Desktop: Horizontal Stepper */}
      <div className="hidden lg:flex items-center justify-between gap-2">
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          const isActive = stage.number === currentStage;
          const isCompleted = stage.completed;
          const isAccessible = stage.number <= currentStage;

          return (
            <div key={stage.number} className="flex-1 flex items-center">
              {/* Stage Card */}
              <motion.button
                onClick={() => isAccessible && onStageClick(stage.number)}
                disabled={!isAccessible}
                className={`
                  relative w-full group
                  ${isAccessible ? "cursor-pointer" : "cursor-not-allowed"}
                `}
                whileHover={isAccessible ? { scale: 1.02, y: -2 } : {}}
                whileTap={isAccessible ? { scale: 0.98 } : {}}
              >
                <div
                  className={`
                  relative overflow-hidden rounded-xl p-4 transition-all duration-300
                  ${
                    isActive
                      ? "bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary shadow-lg shadow-primary/20"
                      : isCompleted
                      ? "bg-gradient-to-br from-success/10 to-success/5 border border-success/30"
                      : "bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50"
                  }
                  ${isAccessible && "hover:shadow-md"}
                `}
                >
                  {/* Shimmer effect for active stage */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  )}

                  <div className="relative flex items-center gap-3">
                    {/* Icon Circle */}
                    <div
                      className={`
                      flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                      ${
                        isActive
                          ? "bg-gradient-to-br from-primary to-primary-light shadow-lg shadow-primary/30"
                          : isCompleted
                          ? "bg-success"
                          : "bg-slate-200 dark:bg-slate-700"
                      }
                    `}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      ) : (
                        <Icon
                          className={`w-5 h-5 ${
                            isActive ? "text-white" : "text-slate-500"
                          }`}
                        />
                      )}
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 min-w-0 text-left">
                      <div
                        className={`
                        text-sm font-semibold truncate transition-colors
                        ${
                          isActive
                            ? "text-primary"
                            : isCompleted
                            ? "text-success"
                            : "text-slate-600 dark:text-slate-400"
                        }
                      `}
                      >
                        {stage.title}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-500 truncate">
                        {stage.description}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.button>

              {/* Connector Line */}
              {index < stages.length - 1 && (
                <div className="w-8 px-2">
                  <div
                    className={`
                    h-0.5 rounded-full transition-colors duration-300
                    ${
                      isCompleted
                        ? "bg-success"
                        : "bg-slate-200 dark:bg-slate-700"
                    }
                  `}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile & Tablet: Compact Stepper */}
      <div className="lg:hidden">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {stages.map((stage) => {
            const Icon = stage.icon;
            const isActive = stage.number === currentStage;
            const isCompleted = stage.completed;
            const isAccessible = stage.number <= currentStage;

            return (
              <motion.button
                key={stage.number}
                onClick={() => isAccessible && onStageClick(stage.number)}
                disabled={!isAccessible}
                className={`
                  flex-shrink-0 flex flex-col items-center gap-2 p-3 rounded-xl min-w-[90px] transition-all duration-300
                  ${
                    isActive
                      ? "bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary"
                      : isCompleted
                      ? "bg-success/10 border border-success/30"
                      : "bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50"
                  }
                  ${
                    isAccessible
                      ? "cursor-pointer"
                      : "cursor-not-allowed opacity-50"
                  }
                `}
                whileTap={isAccessible ? { scale: 0.95 } : {}}
              >
                <div
                  className={`
                  w-8 h-8 rounded-full flex items-center justify-center transition-all
                  ${
                    isActive
                      ? "bg-gradient-to-br from-primary to-primary-light"
                      : isCompleted
                      ? "bg-success"
                      : "bg-slate-200 dark:bg-slate-700"
                  }
                `}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  ) : (
                    <Icon
                      className={`w-4 h-4 ${
                        isActive ? "text-white" : "text-slate-500"
                      }`}
                    />
                  )}
                </div>
                <span
                  className={`
                  text-xs font-medium text-center
                  ${
                    isActive
                      ? "text-primary"
                      : isCompleted
                      ? "text-success"
                      : "text-slate-600 dark:text-slate-400"
                  }
                `}
                >
                  {stage.title}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/**
 * PREMIUM NAVIGATION BAR
 * Fixed bottom navigation with glassmorphic design
 */
function PremiumNavigationBar({
  currentStage,
  totalStages,
  onBack,
  onHome,
  showBack,
}) {
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Glassmorphic Container */}
      <div className="backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border-t border-slate-200/50 dark:border-slate-700/50 shadow-strong">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Home Button */}
            <motion.button
              onClick={onHome}
              className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200 border border-slate-200 dark:border-slate-700"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Home className="w-4 h-4 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
              <span className="hidden sm:inline text-sm font-medium text-slate-700 dark:text-slate-300">
                Start Over
              </span>
            </motion.button>

            {/* Center: Progress Indicator */}
            <div className="flex-1 max-w-md">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400 whitespace-nowrap">
                  {currentStage} of {totalStages}
                </span>
                <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
                    initial={{ width: 0 }}
                    animate={{
                      width: `${(currentStage / totalStages) * 100}%`,
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
                <span className="text-sm font-bold text-primary whitespace-nowrap">
                  {Math.round((currentStage / totalStages) * 100)}%
                </span>
              </div>
            </div>

            {/* Right: Back Button */}
            {showBack && (
              <motion.button
                onClick={onBack}
                className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all duration-200 border border-primary/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <ArrowLeft className="w-4 h-4 text-primary group-hover:text-primary-light transition-colors" />
                <span className="hidden sm:inline text-sm font-medium text-primary">
                  Back
                </span>
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
