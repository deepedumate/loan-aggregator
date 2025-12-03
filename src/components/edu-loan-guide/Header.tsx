import { Moon, Sun, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "./NavLink";
import { useTheme } from "../chat-journey/ThemeProvider";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 font-heading text-xl font-bold text-foreground hover:text-primary transition-colors">
          {/* <GraduationCap className="h-6 w-6 text-primary" /> */}
          <img src="/edumate_logo.png" alt="Edumate logo" className="h-6 ml-1" />
        </NavLink>

        <nav className="flex items-center gap-6">
          <NavLink
            to="/loan-offers"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            activeClassName="text-foreground font-semibold"
          >
            Loan Aggregator
          </NavLink>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="h-9 w-9"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>
      </div>
    </header>
  );
};
