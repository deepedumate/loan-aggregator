import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/ai-loan-path/ThemeProvider"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className={cn(
        "relative overflow-hidden rounded-full w-12 h-12 border-border/50 hover:border-primary/50 transition-all duration-500 group",
        "bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:shadow-medium"
      )}
    >
      <Sun className={cn(
        "h-5 w-5 rotate-0 scale-100 transition-all duration-500 absolute text-accent",
        theme === "dark" && "rotate-90 scale-0"
      )} />
      <Moon className={cn(
        "h-5 w-5 rotate-90 scale-0 transition-all duration-500 absolute text-primary",
        theme === "dark" && "rotate-0 scale-100"
      )} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
