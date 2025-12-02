import { memo } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export interface LoanProduct {
  id: string;
  lenderName: string;
  interestRate: number;
  maxAmount: number;
  tenure: number;
  processingFee: number;
  features: string[];
  eligible: boolean;
}

interface LoanCardProps {
  loan: LoanProduct;
}

const LoanCardComponent = ({ loan }: LoanCardProps) => {
  return (
    <Card className="p-8 hover:shadow-strong hover:border-primary/30 transition-all duration-300 border-border group relative overflow-hidden bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-sm transform hover:-translate-y-1">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-70" />
      
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div>
          <h3 className="text-2xl font-display font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">{loan.lenderName}</h3>
          <div className="flex gap-2 mt-2">
            {loan.eligible && (
              <Badge className="bg-accent text-white shadow-medium px-3 py-1 font-medium">
                Best Match
              </Badge>
            )}
          </div>
        </div>
        <div className="text-right bg-accent-light/10 rounded-2xl px-5 py-3 border border-accent/20">
          <p className="text-4xl font-display font-bold text-accent">{loan.interestRate}%</p>
          <p className="text-xs text-muted-foreground font-medium mt-1">Interest Rate</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6 p-5 bg-gradient-to-br from-secondary to-secondary/50 rounded-2xl border border-border/50 shadow-soft relative z-10">
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Max Loan Amount</p>
          <p className="font-bold text-lg font-display">${loan.maxAmount.toLocaleString()}</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Tenure</p>
          <p className="font-bold text-lg font-display">{loan.tenure} years</p>
        </div>
        <div className="space-y-1 col-span-2">
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Processing Fee</p>
          <p className="font-bold text-lg font-display">{loan.processingFee}%</p>
        </div>
      </div>

      <div className="space-y-3 mb-6 relative z-10">
        <p className="text-sm font-semibold mb-4 flex items-center gap-2">
          <span className="w-1 h-4 bg-accent rounded-full" />
          Key Features
        </p>
        {loan.features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">{feature}</p>
          </div>
        ))}
      </div>

      <Button className="w-full gradient-primary group-hover:shadow-glow transition-all duration-300 py-6 text-base font-semibold relative z-10 transform hover:scale-[1.02] active:scale-[0.98]">
        Apply Now
        <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      </Button>
    </Card>
  );
};

export const LoanCard = memo(LoanCardComponent);

