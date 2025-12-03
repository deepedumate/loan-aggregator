import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, Home, Banknote, Clock } from "lucide-react";
import { CurrencyDisplay } from "@/components/chat-journey/CurrencyDisplay";

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
    <Card className="p-8 bg-gradient-to-br from-card to-primary/5 border-border/50 shadow-xl backdrop-blur-sm my-6 animate-fade-in">
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex items-center gap-3 pb-4 border-b border-border/50">
          <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-primary-light text-primary-foreground shadow-sm">
            <Banknote className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Program Cost Breakdown</h3>
            <p className="text-sm text-muted-foreground">Complete financial overview</p>
          </div>
        </div>

        {/* Total Cost - Hero Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-6 border border-primary/20">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Total Investment
              </span>
            </div>
            <div className="flex items-baseline gap-3">
              <div className="text-4xl font-bold text-foreground tracking-tight">
                <CurrencyDisplay value={totalCost} />
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/50 border border-border/50">
                <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">
                  {duration}
                </span>
              </div>
            </div>
          </div>
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
        </div>

        {/* Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Tuition Card */}
          <div className="group relative overflow-hidden rounded-xl bg-muted/30 p-5 border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-md">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Tuition Fees
                </div>
                <div className="text-xl font-bold text-foreground mb-1">
                  <CurrencyDisplay value={tuition} />
                </div>
                {showPerYear && tuitionPerYear && (
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <div className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                    <span><CurrencyDisplay value={tuitionPerYear} /> per year</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Living Expenses Card */}
          <div className="group relative overflow-hidden rounded-xl bg-muted/30 p-5 border border-border/50 hover:border-accent/40 transition-all duration-300 hover:shadow-md">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                <Home className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Living Costs
                </div>
                <div className="text-xl font-bold text-foreground mb-1">
                  <CurrencyDisplay value={living} />
                </div>
                {showPerYear && livingPerYear && (
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <div className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                    <span><CurrencyDisplay value={livingPerYear} /> per year</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Info Footer */}
        <div className="flex items-center gap-2 pt-4 border-t border-border/30">
          <div className="w-1 h-1 rounded-full bg-muted-foreground/50" />
          <p className="text-xs text-muted-foreground">
            All costs are estimates and may vary by institution
          </p>
        </div>
      </div>
    </Card>
  );
};
