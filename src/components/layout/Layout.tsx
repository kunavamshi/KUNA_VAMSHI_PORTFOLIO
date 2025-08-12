import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useTheme } from '@/contexts/ThemeContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // Ensure consistent scroll behavior across all pages
  useScrollToTop(0);
  const location = useLocation();
  const { theme } = useTheme();
  
  // Only apply theme styling for non-Home pages
  const isHomePage = location.pathname === '/';
  const themeClass = isHomePage ? '' : `theme-${theme}`;

  return (
    <div className={`min-h-screen bg-background ${themeClass}`}>
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
};

export default Layout;