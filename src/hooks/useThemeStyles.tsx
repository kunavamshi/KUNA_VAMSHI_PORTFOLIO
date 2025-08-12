import { useTheme } from '@/contexts/ThemeContext';

export const useThemeStyles = () => {
  const { theme } = useTheme();
  
  const isLight = theme === 'light';
  const isDark = theme === 'dark';
  
  const themeStyles = {
    // Card and container styles
    card: {
      light: 'bg-white border-gray-200 shadow-lg',
      dark: 'bg-black/20 border-white/10 shadow-xl',
      current: isLight ? 'bg-white border-gray-200 shadow-lg' : 'bg-black/20 border-white/10 shadow-xl'
    },
    
    // Text styles - Enhanced for better visibility
    text: {
      light: 'text-gray-900 font-semibold',
      dark: 'text-white',
      current: isLight ? 'text-gray-900 font-semibold' : 'text-white'
    },
    
    textSecondary: {
      light: 'text-gray-700',
      dark: 'text-gray-300',
      current: isLight ? 'text-gray-700' : 'text-gray-300'
    },
    
    // Background styles
    background: {
      light: 'bg-gradient-to-br from-white to-blue-50',
      dark: 'bg-gradient-to-br from-gray-900 to-black',
      current: isLight ? 'bg-gradient-to-br from-white to-blue-50' : 'bg-gradient-to-br from-gray-900 to-black'
    },
    
    // Border styles
    border: {
      light: 'border-blue-200',
      dark: 'border-gray-700',
      current: isLight ? 'border-blue-200' : 'border-gray-700'
    },
    
    // Hover effects
    hover: {
      light: 'hover:bg-blue-50 hover:shadow-md',
      dark: 'hover:bg-gray-800 hover:shadow-2xl',
      current: isLight ? 'hover:bg-blue-50 hover:shadow-md' : 'hover:bg-gray-800 hover:shadow-2xl'
    },
    
    // Glassmorphism
    glass: {
      light: 'bg-white/90 backdrop-blur-sm border-blue-200 shadow-lg',
      dark: 'bg-black/20 backdrop-blur-sm border-white/10',
      current: isLight ? 'bg-white/90 backdrop-blur-sm border-blue-200 shadow-lg' : 'bg-black/20 backdrop-blur-sm border-white/10'
    },
    
    // Accent colors - More vibrant for light mode
    accent: {
      light: 'text-blue-600 font-bold',
      dark: 'text-cyan-400',
      current: isLight ? 'text-blue-600 font-bold' : 'text-cyan-400'
    },
    
    accentBg: {
      light: 'bg-blue-100',
      dark: 'bg-cyan-900/20',
      current: isLight ? 'bg-blue-100' : 'bg-cyan-900/20'
    },
    
    // Enhanced text styles for better visibility
    heading: {
      light: 'text-gray-900 font-bold',
      dark: 'text-white font-bold',
      current: isLight ? 'text-gray-900 font-bold' : 'text-white font-bold'
    },
    
    subheading: {
      light: 'text-blue-800 font-semibold',
      dark: 'text-blue-300 font-semibold',
      current: isLight ? 'text-blue-800 font-semibold' : 'text-blue-300 font-semibold'
    },
    
    // 3D animation specific colors
    skillOrb: {
      light: 'text-blue-600 bg-blue-100 border-blue-300',
      dark: 'text-cyan-400 bg-cyan-900/30 border-cyan-500/50',
      current: isLight ? 'text-blue-600 bg-blue-100 border-blue-300' : 'text-cyan-400 bg-cyan-900/30 border-cyan-500/50'
    }
  };
  
  return {
    theme,
    isLight,
    isDark,
    styles: themeStyles
  };
};
