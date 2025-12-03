"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-9 h-9 rounded-full">
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  const toggleTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="w-9 h-9 rounded-full hover:bg-[var(--st-primary)]/10"
      onClick={toggleTheme}
    >
      {resolvedTheme === "dark" ? (
        <Moon className="h-4 w-4 text-[var(--st-primary)]" />
      ) : (
        <Sun className="h-4 w-4 text-[var(--st-primary)]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
