import { motion } from "framer-motion";
import { Calendar, ArrowRight, MapPin, GraduationCap, FileText } from "lucide-react";
import { Application } from "../../data/applications";
import { formatCurrency } from "../../data/loans";
import StatusBadge from "./StatusBadge";

interface ApplicationCardProps {
  application: Application;
  onViewDetails?: (application: Application) => void;
  index?: number;
}

export default function ApplicationCard({
  application,
  onViewDetails,
  index = 0,
}: ApplicationCardProps) {
  const progressPercentage = (application.documentsSubmitted / application.documentsRequired) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="glass-card rounded-2xl overflow-hidden card-hover bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <motion.img
              src={application.lenderLogo}
              alt={application.lenderName}
              className="w-12 h-12 rounded-xl object-cover shadow-md ring-2 ring-white dark:ring-slate-700"
              whileHover={{ scale: 1.05 }}
            />
            <div>
              <h3 className="font-display font-bold text-slate-800 dark:text-slate-100">
                {application.lenderName}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {application.interestRate}% p.a. • {application.tenure / 12} years
              </p>
            </div>
          </div>
          <StatusBadge status={application.status} animated />
        </div>

        {/* Loan Amount */}
        <div className="mb-4 p-4 bg-gradient-to-br from-slate-50 to-slate-100/50 dark:from-slate-700/50 dark:to-slate-800/50 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Loan Amount</p>
          <p className="font-display font-bold text-2xl gradient-text">
            {formatCurrency(application.amount, application.currency)}
          </p>
        </div>

        {/* Course Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <GraduationCap size={16} className="text-primary dark:text-primary-light" />
            <span className="text-sm">{application.course}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <MapPin size={16} className="text-accent dark:text-accent-light" />
            <span className="text-sm">{application.university}, {application.country}</span>
          </div>
        </div>

        {/* Documents Progress */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <FileText size={14} className="text-slate-500 dark:text-slate-400" />
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Documents</span>
            </div>
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              {application.documentsSubmitted}/{application.documentsRequired}
            </span>
          </div>
          <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Next Step */}
        {application.nextStep && (
          <div className="mb-4 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 rounded-xl">
            <p className="text-xs font-medium text-amber-800 dark:text-amber-400">
              Next Step: {application.nextStep}
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <Calendar size={14} />
            <span className="text-xs">Updated {application.updatedDate}</span>
          </div>
          
          <motion.button
            onClick={() => onViewDetails?.(application)}
            className="flex items-center gap-1 text-sm font-semibold text-primary dark:text-primary-light hover:text-primary-light dark:hover:text-primary transition-colors"
            whileHover={{ x: 4 }}
          >
            View Details
            <ArrowRight size={14} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

// Mini version for dashboard
interface ApplicationMiniCardProps {
  application: Application;
  onClick?: () => void;
}

export function ApplicationMiniCard({ application, onClick }: ApplicationMiniCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="flex items-center gap-3 p-3 bg-white/80 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-primary dark:hover:border-primary transition-all"
    >
      <img
        src={application.lenderLogo}
        alt={application.lenderName}
        className="w-10 h-10 rounded-lg object-cover"
      />
      <div className="flex-1 min-w-0">
        <p className="font-medium text-sm text-slate-800 dark:text-slate-200 truncate">{application.lenderName}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">{formatCurrency(application.amount)}</p>
      </div>
      <StatusBadge status={application.status} size="sm" showIcon={false} />
    </motion.div>
  );
}
