import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

export function ThemeToggle() {
  const { theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      disabled
      className="relative w-9 h-9 rounded-md border border-border/50 hover:bg-muted/50 transition-all duration-200 opacity-50 cursor-not-allowed"
      aria-label="Theme locked to dark mode"
    >
      <Moon className="h-4 w-4 rotate-0 scale-100 transition-all duration-200" />
      <span className="sr-only">Theme locked to dark mode</span>
    </Button>
  );
}
