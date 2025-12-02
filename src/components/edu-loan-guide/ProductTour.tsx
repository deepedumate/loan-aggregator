import { useState, useEffect } from "react";
import Joyride, { Step, CallBackProps, STATUS, ACTIONS, EVENTS } from "react-joyride";
import { Button } from "@/components/ui/button";
import { HelpCircle, Sparkles } from "lucide-react";

export function ProductTour() {
  const [runTour, setRunTour] = useState(false);
  const [tourShown, setTourShown] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    // Check if tour has been shown before
    const hasSeenTour = localStorage.getItem("edumate-tour-completed");
    if (!hasSeenTour) {
      // Auto-start tour for first-time users after a brief delay
      const timer = setTimeout(() => {
        setRunTour(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
    setTourShown(true);
  }, []);

  const steps: Step[] = [
    {
      target: "body",
      content: (
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold font-heading bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Welcome to Edumate!
            </h3>
          </div>
          <p className="text-base leading-relaxed text-foreground">
            Your enterprise-grade education loan comparison tool. Let's take a quick tour to help you navigate the platform like a pro.
          </p>
          <div className="flex items-center gap-2 pt-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs">
              7
            </span>
            <span>steps • 2 minutes</span>
          </div>
        </div>
      ),
      placement: "center",
      disableBeacon: true,
    },
    {
      target: ".filter-section",
      content: (
        <div className="space-y-2">
          <h4 className="font-bold text-lg mb-2">Advanced Filtering System</h4>
          <p className="text-sm leading-relaxed">
            Click the <strong>Filters</strong> button to access comprehensive filtering options including:
          </p>
          <ul className="text-sm space-y-1 mt-2 ml-4">
            <li>• Study level and intake period</li>
            <li>• Application status tracking</li>
            <li>• School and program preferences</li>
            <li>• Loan amount and financial details</li>
          </ul>
        </div>
      ),
      placement: "bottom",
      disableBeacon: true,
    },
    {
      target: ".sort-controls",
      content: (
        <div className="space-y-2">
          <h4 className="font-bold text-lg mb-2">Smart Sorting</h4>
          <p className="text-sm leading-relaxed">
            Sort loans by multiple criteria to find your best match. Toggle between ascending and descending order with one click.
          </p>
          <div className="mt-3 p-2 bg-accent/10 rounded-lg text-xs">
            <strong>💡 Tip:</strong> Sort by interest rate to find the most competitive offers first.
          </div>
        </div>
      ),
      placement: "bottom",
      disableBeacon: true,
    },
    {
      target: ".preset-actions",
      content: (
        <div className="space-y-2">
          <h4 className="font-bold text-lg mb-2">Save Your Preferences</h4>
          <p className="text-sm leading-relaxed">
            Once you've applied filters, save them as a preset for instant access later. Perfect for comparing multiple scenarios!
          </p>
        </div>
      ),
      placement: "bottom",
      disableBeacon: true,
      spotlightClicks: true,
    },
    {
      target: "body",
      content: (
        <div className="space-y-2">
          <h4 className="font-bold text-lg mb-2">Loan Cards - Your Quick Overview</h4>
          <p className="text-sm leading-relaxed mb-3">
            Each loan card displays essential information at a glance:
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2 bg-muted/30 rounded-lg">
              <strong>Interest Rate</strong>
              <p className="text-muted-foreground">Annual percentage</p>
            </div>
            <div className="p-2 bg-muted/30 rounded-lg">
              <strong>Max Amount</strong>
              <p className="text-muted-foreground">Loan limit</p>
            </div>
            <div className="p-2 bg-muted/30 rounded-lg">
              <strong>Features</strong>
              <p className="text-muted-foreground">Key benefits</p>
            </div>
            <div className="p-2 bg-muted/30 rounded-lg">
              <strong>Two CTAs</strong>
              <p className="text-muted-foreground">Interest & Compare</p>
            </div>
          </div>
          <div className="mt-3 p-2 bg-primary/10 rounded-lg text-xs">
            <strong>❤️ Favorite loans</strong> to bookmark them for later review!
          </div>
        </div>
      ),
      placement: "center",
      disableBeacon: true,
    },
    {
      target: "body",
      content: (
        <div className="space-y-2">
          <h4 className="font-bold text-lg mb-2">Comparison Feature</h4>
          <p className="text-sm leading-relaxed">
            Select up to <strong>4 loans</strong> using the Compare button on each card. A floating button will appear at the bottom of the screen.
          </p>
          <div className="mt-3 p-3 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg border border-accent/30">
            <p className="text-sm font-semibold mb-1">When comparing, you'll see:</p>
            <ul className="text-xs space-y-1 ml-4">
              <li>• Side-by-side metric comparison</li>
              <li>• "Best" badges on top values</li>
              <li>• "Best Overall" loan highlight</li>
              <li>• Personal notes for each loan</li>
              <li>• Export to CSV or Print options</li>
            </ul>
          </div>
        </div>
      ),
      placement: "center",
      disableBeacon: true,
    },
    {
      target: "body",
      content: (
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-success to-accent flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold font-heading">You're All Set! 🎉</h3>
          </div>
          <p className="text-sm leading-relaxed">
            You're now ready to find your perfect education loan. Remember to:
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Use filters to narrow down options</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Compare multiple loans before deciding</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Click "Interested?" to submit your details</span>
            </div>
          </div>
          <div className="mt-4 p-3 bg-muted/30 rounded-lg text-xs text-center">
            Need help? Click the <HelpCircle className="w-3 h-3 inline mx-1" /> button anytime to restart this tour.
          </div>
        </div>
      ),
      placement: "center",
      disableBeacon: true,
    },
  ];

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status, action, index, type } = data;
    
    if (type === EVENTS.STEP_AFTER || type === EVENTS.TARGET_NOT_FOUND) {
      setStepIndex(index + (action === ACTIONS.PREV ? -1 : 1));
    }
    
    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      setRunTour(false);
      setTourShown(true);
      setStepIndex(0);
      localStorage.setItem("edumate-tour-completed", "true");
    }
  };

  return (
    <>
      <Joyride
        steps={steps}
        run={runTour}
        stepIndex={stepIndex}
        continuous
        showProgress
        showSkipButton
        scrollToFirstStep
        disableScrolling={false}
        spotlightPadding={8}
        callback={handleJoyrideCallback}
        floaterProps={{
          disableAnimation: false,
          styles: {
            floater: {
              filter: "drop-shadow(0 4px 20px rgba(0, 0, 0, 0.15))",
            },
          },
        }}
        styles={{
          options: {
            primaryColor: "hsl(var(--primary))",
            textColor: "hsl(var(--foreground))",
            backgroundColor: "hsl(var(--card))",
            arrowColor: "hsl(var(--card))",
            overlayColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 10000,
            width: 420,
          },
          tooltip: {
            borderRadius: "16px",
            padding: "24px",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2), 0 0 0 1px hsl(var(--border))",
          },
          tooltipContainer: {
            textAlign: "left",
          },
          tooltipContent: {
            padding: "0 0 16px 0",
          },
          buttonNext: {
            backgroundColor: "hsl(var(--primary))",
            color: "hsl(var(--primary-foreground))",
            borderRadius: "10px",
            padding: "10px 20px",
            fontSize: "14px",
            fontWeight: 600,
            transition: "all 0.2s ease",
            boxShadow: "0 2px 8px hsl(var(--primary) / 0.3)",
          },
          buttonBack: {
            color: "hsl(var(--muted-foreground))",
            marginRight: "10px",
            padding: "10px 16px",
            borderRadius: "10px",
            fontSize: "14px",
          },
          buttonSkip: {
            color: "hsl(var(--muted-foreground))",
            padding: "10px 16px",
            borderRadius: "10px",
            fontSize: "14px",
          },
          spotlight: {
            borderRadius: "12px",
            boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.6)",
          },
          beacon: {
            display: "none",
          },
        }}
        locale={{
          back: "Back",
          close: "Close",
          last: "Finish Tour",
          next: "Next",
          skip: "Skip Tour",
        }}
      />

      {tourShown && (
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            setRunTour(true);
            setStepIndex(0);
          }}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-xl z-50 hover:scale-110 transition-all duration-300 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20"
          title="Restart Product Tour"
        >
          <HelpCircle className="h-6 w-6 text-primary" />
        </Button>
      )}
    </>
  );
}
