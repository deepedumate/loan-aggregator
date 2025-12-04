import { motion } from "framer-motion";
import { Star, TrendingUp, Clock, Percent, Building2, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Loan, formatCurrency } from "../../data/loans";

interface LoanCardProps {
  loan: Loan;
  isSelected?: boolean;
  onSelect?: (loan: Loan) => void;
  onViewDetails?: (loan: Loan) => void;
  variant?: "default" | "compact" | "comparison";
}

export default function LoanCard({
  loan,
  isSelected = false,
  onSelect,
  onViewDetails,
  variant = "default",
}: LoanCardProps) {
  if (variant === "compact") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -2 }}
        className={`
          relative p-4 rounded-2xl cursor-pointer transition-all duration-300
          ${isSelected 
            ? "bg-gradient-to-br from-orange-50 to-blue-50 dark:from-orange-900/20 dark:to-blue-900/20 border-2 border-accent dark:border-accent shadow-lg shadow-accent/10" 
            : "bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 hover:border-accent/50 dark:hover:border-accent/50 hover:shadow-md"
          }
        `}
        onClick={() => onSelect?.(loan)}
      >
        {/* Selection indicator */}
        {isSelected && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center shadow-lg shadow-accent/30"
          >
            <CheckCircle2 size={14} className="text-white" />
          </motion.div>
        )}

        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={loan.lenderLogo}
              alt={loan.lenderName}
              className="w-12 h-12 rounded-xl object-cover shadow-sm ring-1 ring-slate-200/50 dark:ring-slate-700/50"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 truncate">{loan.lenderName}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {loan.interestRate.min}% - {loan.interestRate.max}% p.a.
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  // Determine card style based on featured/recommended status
  const cardClass = "card-interactive";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className={`relative ${cardClass} overflow-hidden`}
    >
      {/* Subtle top gradient accent for featured cards */}
      {(loan.featured || loan.recommended) && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-light to-primary" />
      )}

      {/* Featured/Recommended Badge */}
      {(loan.featured || loan.recommended) && (
        <div className="absolute top-3 right-3 z-10">
          <motion.div 
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            className={`
              flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wide
              ${loan.featured 
                ? "bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-500/30" 
                : "bg-gradient-to-r from-accent to-accent-light text-white shadow-lg shadow-accent/30"
              }
            `}
          >
            <Sparkles size={12} />
            {loan.featured ? "Featured" : "Best Match"}
          </motion.div>
        </div>
      )}

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-5">
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={loan.lenderLogo}
              alt={loan.lenderName}
              className="w-14 h-14 rounded-xl object-cover shadow-md ring-2 ring-white dark:ring-slate-700"
            />
            {/* Online indicator */}
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-slate-800" />
          </motion.div>
          <div className="flex-1 min-w-0 pt-1">
            <h3 className="font-display font-bold text-lg text-slate-800 dark:text-slate-100 truncate">
              {loan.lenderName}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={i < Math.floor(loan.rating) 
                      ? "text-amber-400 fill-amber-400" 
                      : "text-slate-200 dark:text-slate-600"
                    }
                  />
                ))}
              </div>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                {loan.rating}
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-500">
                ({loan.reviewCount.toLocaleString()})
              </span>
            </div>
          </div>
        </div>

        {/* Key Stats - Redesigned */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {/* Interest Rate */}
          <div className="relative p-4 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100/50 dark:from-slate-800/80 dark:to-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 overflow-hidden">
            {/* Subtle accent */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-primary-light rounded-r" />
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/40">
                <Percent size={12} className="text-primary dark:text-primary-light" />
              </div>
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                Interest
              </span>
            </div>
            <p className="font-display font-bold text-xl text-slate-800 dark:text-slate-100">
              {loan.interestRate.min}%
              <span className="text-sm font-medium text-slate-400 dark:text-slate-500"> – {loan.interestRate.max}%</span>
            </p>
          </div>
          
          {/* Max Amount */}
          <div className="relative p-4 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100/50 dark:from-slate-800/80 dark:to-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 overflow-hidden">
            {/* Subtle accent */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-accent-light rounded-r" />
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 rounded-lg bg-orange-100 dark:bg-orange-900/40">
                <TrendingUp size={12} className="text-accent dark:text-accent-light" />
              </div>
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                Max Amount
              </span>
            </div>
            <p className="font-display font-bold text-xl text-slate-800 dark:text-slate-100">
              {formatCurrency(loan.loanAmount.max)}
            </p>
          </div>
        </div>

        {/* Quick Info Row */}
        <div className="flex items-center justify-between py-3 px-1 border-y border-slate-100 dark:border-slate-700/50 mb-4">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <Clock size={14} />
            <span className="text-sm">Up to {loan.tenure.max / 12} yrs</span>
          </div>
          <div className="w-px h-4 bg-slate-200 dark:bg-slate-700" />
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <Building2 size={14} />
            <span className="text-sm">{loan.processingFee}</span>
          </div>
        </div>

        {/* Highlights */}
        <div className="space-y-2.5 mb-6">
          {loan.highlights.slice(0, 3).map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-2.5"
            >
              <div className="mt-0.5 p-0.5 rounded-full bg-green-100 dark:bg-green-900/30">
                <CheckCircle2 size={12} className="text-green-600 dark:text-green-400" />
              </div>
              <span className="text-sm text-slate-600 dark:text-slate-400 leading-tight">{highlight}</span>
            </motion.div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <motion.button
            onClick={() => onViewDetails?.(loan)}
            className="flex-1 py-3 px-4 bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            View Details
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </motion.button>
          
          {onSelect && (
            <motion.button
              onClick={() => onSelect(loan)}
              className={`
                p-3 rounded-xl border-2 transition-all
                ${isSelected 
                  ? "border-accent bg-orange-50 dark:bg-orange-900/30 text-accent dark:text-accent-light" 
                  : "border-slate-200 dark:border-slate-700 hover:border-accent dark:hover:border-accent text-slate-400 dark:text-slate-500 hover:text-accent"
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CheckCircle2 size={20} />
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
