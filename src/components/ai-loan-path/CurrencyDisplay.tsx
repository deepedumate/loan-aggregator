import { memo, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface CurrencyDisplayProps {
  value: string;
  className?: string;
}

const CurrencyDisplayComponent = ({ value, className }: CurrencyDisplayProps) => {
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    setIsChanging(true);
    const timer = setTimeout(() => setIsChanging(false), 300);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <span 
      className={cn(
        "inline-block transition-all duration-300",
        isChanging && "animate-pulse scale-105",
        className
      )}
    >
      {value}
    </span>
  );
};

export const CurrencyDisplay = memo(CurrencyDisplayComponent);
