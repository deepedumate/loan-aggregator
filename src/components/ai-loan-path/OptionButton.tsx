import { memo } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface OptionButtonProps {
  label: string;
  onClick: () => void;
  selected?: boolean;
  icon?: React.ReactNode;
}

const OptionButtonComponent = ({ label, onClick, selected, icon }: OptionButtonProps) => {
  return (
    <Button
      onClick={onClick}
      variant={selected ? "default" : "outline"}
      className={cn(
        "justify-start text-left h-auto py-5 px-6 transition-all duration-300 group relative overflow-hidden",
        "hover:scale-[1.01] active:scale-[0.99] hover:-translate-y-0.5 active:translate-y-0",
        selected 
          ? "gradient-primary shadow-md shadow-primary/20 border-transparent text-primary-foreground" 
          : "bg-card border-border/50 hover:border-primary/40 hover:bg-primary/5 hover:shadow-md",
      )}
    >
      <div className="flex items-center gap-4 w-full">
        {icon && (
          <div className={cn(
            "p-2 rounded-lg transition-all duration-300 group-hover:scale-110",
            selected 
              ? "bg-white/20" 
              : "bg-primary/10 text-primary group-hover:bg-primary/20"
          )}>
            {icon}
          </div>
        )}
        <span className={cn(
          "font-semibold text-base tracking-tight",
          selected ? "text-primary-foreground" : "text-foreground"
        )}>
          {label}
        </span>
      </div>
    </Button>
  );
};

export const OptionButton = memo(OptionButtonComponent);
