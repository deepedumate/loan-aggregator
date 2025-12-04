import { motion } from "framer-motion";
import { ApplicationStatus, getStatusLabel } from "../../data/applications";
import {
  Clock,
  CheckCircle,
  AlertCircle,
  FileText,
  Send,
  XCircle,
  Banknote,
} from "lucide-react";

interface StatusBadgeProps {
  status: ApplicationStatus;
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
  animated?: boolean;
}

// Updated colors using fintech palette
const statusColors: Record<ApplicationStatus, string> = {
  draft: "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300",
  submitted: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
  under_review: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400",
  documents_pending: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400",
  approved: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
  disbursed: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400",
  rejected: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400",
};

export default function StatusBadge({
  status,
  size = "md",
  showIcon = true,
  animated = false,
}: StatusBadgeProps) {
  const sizeClasses = {
    sm: "text-[10px] px-2 py-0.5 gap-1",
    md: "text-xs px-2.5 py-1 gap-1.5",
    lg: "text-sm px-3 py-1.5 gap-2",
  };

  const iconSizes = {
    sm: 10,
    md: 14,
    lg: 16,
  };

  const Icon = () => {
    return (
      <span className="flex-shrink-0">
        {status === "draft" && <FileText size={iconSizes[size]} />}
        {status === "submitted" && <Send size={iconSizes[size]} />}
        {status === "under_review" && <Clock size={iconSizes[size]} />}
        {status === "documents_pending" && <AlertCircle size={iconSizes[size]} />}
        {status === "approved" && <CheckCircle size={iconSizes[size]} />}
        {status === "disbursed" && <Banknote size={iconSizes[size]} />}
        {status === "rejected" && <XCircle size={iconSizes[size]} />}
      </span>
    );
  };

  const isPending = status === "under_review" || status === "documents_pending";

  return (
    <motion.span
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`
        inline-flex items-center font-semibold rounded-full
        ${statusColors[status]}
        ${sizeClasses[size]}
        ${animated && isPending ? "animate-pulse-soft" : ""}
      `}
    >
      {showIcon && <Icon />}
      <span>{getStatusLabel(status)}</span>
      
      {/* Animated dot for pending statuses */}
      {animated && isPending && (
        <span className="relative flex h-2 w-2 ml-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
        </span>
      )}
    </motion.span>
  );
}

// Progress Status for timelines
interface TimelineStatusProps {
  status: "completed" | "current" | "pending";
  size?: "sm" | "md";
}

export function TimelineStatus({ status, size = "md" }: TimelineStatusProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
  };

  const iconSizeMap = {
    sm: 12,
    md: 16,
  };

  if (status === "completed") {
    return (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/25`}
      >
        <CheckCircle size={iconSizeMap[size]} className="text-white" />
      </motion.div>
    );
  }

  if (status === "current") {
    return (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/25 relative`}
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ opacity: 0.4 }}
        />
        <Clock size={iconSizeMap[size]} className="text-white relative z-10" />
      </motion.div>
    );
  }

  return (
    <div
      className={`${sizeClasses[size]} rounded-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center`}
    >
      <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500" />
    </div>
  );
}
