import { ThemeToggle } from "./ThemeToggle";

const AILoanHeader = () => {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50 flex-shrink-0 backdrop-blur-sm bg-background/95">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center transition-transform duration-300 hover:scale-110" />
          <div>
            <img src="/edumate_logo.png" alt="Edumate logo" className="h-8 ml-1" />
            <p className="text-[11px] text-muted-foreground font-medium">Smart Education Financing</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-600 dark:text-green-400 font-medium">Live rates</span>
            </div>
            <div className="text-muted-foreground">
              <span className="font-semibold text-accent">12+</span> lenders
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default AILoanHeader;
