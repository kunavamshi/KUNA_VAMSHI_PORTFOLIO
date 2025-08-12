import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = (offset: number = 0) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll to desired position when route changes
    const timer = setTimeout(() => {
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, offset]);
};
