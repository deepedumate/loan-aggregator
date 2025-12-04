import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  gradient: "primary" | "accent" | "success" | "warning";
  index?: number;
}

const gradients = {
  primary: {
    bg: "from-primary to-primary-light",
    light: "from-blue-50 to-slate-50 dark:from-blue-900/30 dark:to-slate-800/50",
    text: "text-primary dark:text-primary-light",
    shadow: "shadow-primary/20",
  },
  accent: {
    bg: "from-accent to-accent-light",
    light: "from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-slate-800/50",
    text: "text-accent dark:text-accent-light",
    shadow: "shadow-accent/20",
  },
  success: {
    bg: "from-green-500 to-emerald-600",
    light: "from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-slate-800/50",
    text: "text-green-700 dark:text-green-400",
    shadow: "shadow-green-500/20",
  },
  warning: {
    bg: "from-amber-500 to-orange-600",
    light: "from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-slate-800/50",
    text: "text-amber-700 dark:text-amber-400",
    shadow: "shadow-amber-500/20",
  },
};

export default function StatsCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  gradient,
  index = 0,
}: StatsCardProps) {
  const colors = gradients[gradient];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className={`
        relative overflow-hidden p-6 rounded-2xl
        bg-gradient-to-br ${colors.light}
        border border-slate-200/50 dark:border-slate-700/50
        shadow-soft hover:shadow-lg ${colors.shadow}
        transition-all duration-300
      `}
    >
      {/* Background decoration */}
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-2xl" />
      
      {/* Icon */}
      <motion.div
        className={`
          inline-flex p-3 rounded-xl mb-4
          bg-gradient-to-br ${colors.bg}
          shadow-lg ${colors.shadow}
        `}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <Icon className="text-white" size={22} />
      </motion.div>

      {/* Content */}
      <div className="relative">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">{title}</p>
        <div className="flex items-end gap-2">
          <motion.p
            className={`font-display font-bold text-3xl ${colors.text}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
          >
            {value}
          </motion.p>
          {trend && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className={`
                text-xs font-semibold px-2 py-0.5 rounded-full mb-1
                ${trend.isPositive 
                  ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" 
                  : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                }
              `}
            >
              {trend.isPositive ? "+" : "-"}{Math.abs(trend.value)}%
            </motion.span>
          )}
        </div>
        {subtitle && (
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">{subtitle}</p>
        )}
      </div>
    </motion.div>
  );
}

// Compact Stats for inline use
interface CompactStatProps {
  label: string;
  value: string | number;
  icon?: LucideIcon;
}

export function CompactStat({ label, value, icon: Icon }: CompactStatProps) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white/60 dark:bg-slate-800/60 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
      {Icon && (
        <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg">
          <Icon size={16} className="text-slate-600 dark:text-slate-400" />
        </div>
      )}
      <div>
        <p className="text-xs text-slate-500 dark:text-slate-400">{label}</p>
        <p className="font-semibold text-slate-800 dark:text-slate-200">{value}</p>
      </div>
    </div>
  );
}
