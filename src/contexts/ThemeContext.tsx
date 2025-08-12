import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Force dark theme as default - no light mode option
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    
         if (theme === 'light') {
       // Professional Light Mode Colors - Enhanced for better visibility
       root.style.setProperty('--background', '0 0% 100%');
       root.style.setProperty('--foreground', '222 84% 4.9%');
       root.style.setProperty('--card', '0 0% 100%');
       root.style.setProperty('--card-foreground', '222 84% 4.9%');
       root.style.setProperty('--popover', '0 0% 100%');
       root.style.setProperty('--popover-foreground', '222 84% 4.9%');
       root.style.setProperty('--primary', '221 83% 53%');
       root.style.setProperty('--primary-foreground', '0 0% 98%');
       root.style.setProperty('--primary-glow', '221 83% 63%');
       root.style.setProperty('--secondary', '210 40% 96%');
       root.style.setProperty('--secondary-foreground', '222 84% 4.9%');
       root.style.setProperty('--secondary-glow', '210 40% 96%');
       root.style.setProperty('--accent', '210 40% 96%');
       root.style.setProperty('--accent-foreground', '222 84% 4.9%');
       root.style.setProperty('--accent-glow', '210 40% 96%');
       root.style.setProperty('--muted', '210 40% 96%');
       root.style.setProperty('--muted-foreground', '215 25% 27%');
       root.style.setProperty('--border', '214 32% 91%');
       root.style.setProperty('--input', '214 32% 91%');
       root.style.setProperty('--ring', '221 83% 53%');
       root.style.setProperty('--gradient-surface', 'linear-gradient(145deg, hsl(0 0% 100%), hsl(210 40% 98%))');
       root.style.setProperty('--shadow-soft', '0 4px 20px hsl(0 0% 0% / 0.08)');
       root.style.setProperty('--shadow-medium', '0 8px 30px hsl(0 0% 0% / 0.12)');
       root.style.setProperty('--shadow-strong', '0 12px 40px hsl(0 0% 0% / 0.16)');
       root.style.setProperty('--shadow-glow', '0 0 20px hsl(221 83% 53% / 0.25)');
       root.style.setProperty('--shadow-glow-strong', '0 0 40px hsl(221 83% 53% / 0.4)');
    } else {
      // Gaming Dark Mode Colors
      root.style.setProperty('--background', '240 10% 3.9%');
      root.style.setProperty('--foreground', '0 0% 98%');
      root.style.setProperty('--card', '240 10% 3.9%');
      root.style.setProperty('--card-foreground', '0 0% 98%');
      root.style.setProperty('--popover', '240 5% 6%');
      root.style.setProperty('--popover-foreground', '0 0% 98%');
      root.style.setProperty('--primary', '267 100% 70%');
      root.style.setProperty('--primary-foreground', '240 10% 3.9%');
      root.style.setProperty('--primary-glow', '267 100% 80%');
      root.style.setProperty('--secondary', '180 100% 70%');
      root.style.setProperty('--secondary-foreground', '240 10% 3.9%');
      root.style.setProperty('--secondary-glow', '180 100% 80%');
      root.style.setProperty('--accent', '210 100% 70%');
      root.style.setProperty('--accent-foreground', '240 10% 3.9%');
      root.style.setProperty('--accent-glow', '210 100% 80%');
      root.style.setProperty('--muted', '240 4% 16%');
      root.style.setProperty('--muted-foreground', '240 5% 65%');
      root.style.setProperty('--border', '240 4% 16%');
      root.style.setProperty('--input', '240 4% 16%');
      root.style.setProperty('--ring', '267 100% 70%');
      root.style.setProperty('--gradient-surface', 'linear-gradient(145deg, hsl(240 6% 8%), hsl(240 4% 12%))');
      root.style.setProperty('--shadow-soft', '0 4px 20px hsl(240 10% 3.9% / 0.4)');
      root.style.setProperty('--shadow-medium', '0 8px 30px hsl(240 10% 3.9% / 0.6)');
      root.style.setProperty('--shadow-strong', '0 12px 40px hsl(240 10% 3.9% / 0.8)');
      root.style.setProperty('--shadow-glow', '0 0 20px hsl(267 100% 70% / 0.3)');
      root.style.setProperty('--shadow-glow-strong', '0 0 40px hsl(267 100% 70% / 0.5)');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    // Disable theme toggle - always stay in dark mode
    setTheme('dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
