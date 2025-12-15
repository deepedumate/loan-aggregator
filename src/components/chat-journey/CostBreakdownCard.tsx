import { Card } from "@/components/ui/card";
import { GraduationCap, Home, Banknote, Clock, TrendingUp, Info } from "lucide-react";
import { CurrencyDisplay } from "@/components/chat-journey/CurrencyDisplay";
import { cn } from "@/lib/utils";

interface CostBreakdownCardProps {
  totalCost: string;
  duration: string;
  tuition: string;
  tuitionPerYear?: string;
  living: string;
  livingPerYear?: string;
  showPerYear: boolean;
}

export const CostBreakdownCard = ({
  totalCost,
  duration,
  tuition,
  tuitionPerYear,
  living,
  livingPerYear,
  showPerYear
}: CostBreakdownCardProps) => {
  return (
    <Card className="h-full p-6 bg-gradient-to-br from-card via-card to-accent/5 border-border/50 shadow-lg backdrop-blur-sm">
      <div className="flex flex-col h-full space-y-5">
        {/* Header Section */}
        <div className="flex items-center justify-between pb-3 border-b border-border/50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-sm">
              <Banknote className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base">Program Cost</h3>
              <p className="text-xs text-muted-foreground">Financial overview</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
            <Clock className="w-3 h-3 text-primary" />
            <span className="text-xs font-semibold text-primary">
              {duration}
            </span>
          </div>
        </div>

        {/* Total Cost - Hero Section */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 p-5 border border-primary/20">
          <div className="relative z-10">
            <div className="flex items-center gap-1.5 mb-2">
              <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                Total Investment
              </span>
            </div>
            <div className="flex items-baseline justify-between gap-3">
              <div className="text-3xl font-bold text-foreground tracking-tight">
                <CurrencyDisplay value={totalCost} />
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>full program</span>
              </div>
            </div>
          </div>
          <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
        </div>

        {/* Breakdown Section */}
        <div className="flex-1 space-y-3">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
            Cost Breakdown
          </label>
          
          <div className="space-y-2.5">
            {/* Tuition Card */}
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-muted/40 to-muted/20 p-4 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-md">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-0.5">
                      Tuition Fees
                    </div>
                    <div className="text-lg font-bold text-foreground">
                      <CurrencyDisplay value={tuition} />
                    </div>
                  </div>
                </div>
                {showPerYear && tuitionPerYear && (
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">per year</div>
                    <div className="text-sm font-semibold text-foreground">
                      <CurrencyDisplay value={tuitionPerYear} />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Living Expenses Card */}
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-muted/40 to-muted/20 p-4 border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-md">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                    <Home className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-0.5">
                      Living Costs
                    </div>
                    <div className="text-lg font-bold text-foreground">
                      <CurrencyDisplay value={living} />
                    </div>
                  </div>
                </div>
                {showPerYear && livingPerYear && (
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">per year</div>
                    <div className="text-sm font-semibold text-foreground">
                      <CurrencyDisplay value={livingPerYear} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-2 gap-2 pt-2">
            <div className="p-2.5 rounded-lg bg-primary/5 border border-primary/20">
              <div className="text-[10px] text-muted-foreground mb-1">Tuition %</div>
              <div className="text-sm font-bold text-primary">
                {((parseFloat(tuition.replace(/[^0-9.-]+/g, "")) / parseFloat(totalCost.replace(/[^0-9.-]+/g, ""))) * 100).toFixed(0)}%
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-accent/5 border border-accent/20">
              <div className="text-[10px] text-muted-foreground mb-1">Living %</div>
              <div className="text-sm font-bold text-accent">
                {((parseFloat(living.replace(/[^0-9.-]+/g, "")) / parseFloat(totalCost.replace(/[^0-9.-]+/g, ""))) * 100).toFixed(0)}%
              </div>
            </div>
          </div>
        </div>

        {/* Info Footer */}
        <div className="pt-3 border-t border-border/30">
          <div className="flex items-start gap-2">
            <Info className="w-3 h-3 text-muted-foreground mt-0.5 flex-shrink-0" />
            <p className="text-[10px] text-muted-foreground leading-relaxed">
              Estimated costs based on typical program expenses
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};