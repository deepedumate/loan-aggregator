import { motion } from "framer-motion";
import { ApplicationTimeline } from "../../data/applications";
import { TimelineStatus } from "./StatusBadge";

interface TimelineProps {
  items: ApplicationTimeline[];
  variant?: "vertical" | "horizontal";
}

export default function Timeline({ items, variant = "vertical" }: TimelineProps) {
  if (variant === "horizontal") {
    return (
      <div className="relative">
        {/* Connection line */}
        <div className="absolute top-4 left-4 right-4 h-0.5 bg-slate-200 dark:bg-slate-700 rounded-full" />
        
        {/* Progress line */}
        <motion.div
          className="absolute top-4 left-4 h-0.5 bg-gradient-to-r from-green-500 via-primary to-primary rounded-full"
          initial={{ width: 0 }}
          animate={{
            width: `${
              (items.filter((i) => i.status === "completed").length / (items.length - 1)) * 100
            }%`,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        <div className="flex justify-between relative">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center w-24"
            >
              <TimelineStatus status={item.status} size="sm" />
              <p
                className={`mt-2 text-xs font-medium truncate w-full ${
                  item.status === "pending" ? "text-slate-400 dark:text-slate-500" : "text-slate-700 dark:text-slate-300"
                }`}
              >
                {item.step}
              </p>
              {item.date && (
                <p className="text-[10px] text-slate-400 dark:text-slate-500">{item.date}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex gap-4 pb-6 last:pb-0"
        >
          {/* Timeline indicator */}
          <div className="flex flex-col items-center">
            <TimelineStatus status={item.status} />
            {index < items.length - 1 && (
              <div className="flex-1 w-0.5 mt-2 bg-slate-200 dark:bg-slate-700 rounded-full relative overflow-hidden">
                {item.status === "completed" && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-green-500 to-green-400"
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  />
                )}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 pb-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p
                  className={`font-semibold ${
                    item.status === "pending" ? "text-slate-400 dark:text-slate-500" : "text-slate-800 dark:text-slate-200"
                  }`}
                >
                  {item.step}
                </p>
                <p
                  className={`text-sm mt-0.5 ${
                    item.status === "pending" ? "text-slate-300 dark:text-slate-600" : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {item.description}
                </p>
              </div>
              {item.date && (
                <span className="text-xs text-slate-400 dark:text-slate-500 whitespace-nowrap">{item.date}</span>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Simple progress timeline for dashboard
interface SimpleTimelineProps {
  currentStep: number;
  totalSteps: number;
  labels?: string[];
}

export function SimpleTimeline({ currentStep, totalSteps, labels }: SimpleTimelineProps) {
  return (
    <div className="space-y-3">
      {/* Progress bar */}
      <div className="flex items-center gap-1">
        {[...Array(totalSteps)].map((_, index) => (
          <motion.div
            key={index}
            className={`h-2 flex-1 rounded-full ${
              index < currentStep
                ? "bg-gradient-to-r from-green-500 to-emerald-500"
                : index === currentStep
                ? "bg-gradient-to-r from-primary to-accent"
                : "bg-slate-200 dark:bg-slate-700"
            }`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          />
        ))}
      </div>

      {/* Labels */}
      {labels && (
        <div className="flex justify-between">
          {labels.map((label, index) => (
            <span
              key={index}
              className={`text-xs ${
                index <= currentStep ? "text-slate-700 dark:text-slate-300 font-medium" : "text-slate-400 dark:text-slate-500"
              }`}
            >
              {label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
