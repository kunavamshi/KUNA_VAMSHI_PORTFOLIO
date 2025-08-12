# Theme System Documentation

## Overview

This portfolio website now features a comprehensive dark/light mode theme system that automatically applies different styling based on the current theme. The Home page maintains its original dark theme, while all other pages support both themes with professional and gaming-styled colors.

## Features

### 🎨 Dual Theme Support
- **Professional Light Mode**: Clean, business-appropriate design with subtle shadows and professional blue accents
- **Gaming Dark Mode**: Dynamic, cyberpunk-inspired design with neon glows and vibrant cyan highlights

### 🏠 Home Page Exception
- The Home page (`/`) always maintains its original dark theme for consistency
- All other pages (`/about`, `/skills`, `/projects`, etc.) support theme switching

### 🔄 Automatic Theme Persistence
- Theme preference is saved to localStorage
- Respects system color scheme preference on first visit
- Smooth transitions between themes

## Implementation

### Core Components

#### 1. ThemeContext (`src/contexts/ThemeContext.tsx`)
- Manages theme state and provides theme switching functionality
- Automatically applies CSS custom properties for each theme
- Handles localStorage persistence and system preference detection

#### 2. ThemeToggle (`src/components/ui/theme-toggle.tsx`)
- Animated toggle button with sun/moon icons
- Positioned in the navigation bar for easy access
- Responsive design for both desktop and mobile

#### 3. useThemeStyles Hook (`src/hooks/useThemeStyles.tsx`)
- Provides theme-aware styling utilities
- Returns appropriate classes for cards, text, backgrounds, and more
- Ensures consistent theming across all components

### Theme-Specific Styling

#### Professional Light Mode
```css
--background: 0 0% 98%          /* Light gray background */
--foreground: 240 10% 3.9%      /* Dark text */
--primary: 221 83% 53%          /* Professional blue */
--card: 0 0% 100%               /* Pure white cards */
--glass-bg: rgba(255, 255, 255, 0.15)
--glass-border: rgba(0, 0, 0, 0.1)
```

#### Gaming Dark Mode
```css
--background: 240 10% 3.9%      /* Dark background */
--foreground: 0 0% 98%          /* Light text */
--primary: 267 100% 70%         /* Vibrant purple */
--card: 240 10% 3.9%            /* Dark cards */
--glass-bg: rgba(255, 255, 255, 0.05)
--glass-border: rgba(255, 255, 255, 0.1)
```

### CSS Custom Properties

The theme system uses CSS custom properties that are dynamically updated:

```css
:root {
  --background: hsl(var(--background));
  --foreground: hsl(var(--foreground));
  --primary: hsl(var(--primary));
  --glass-bg: var(--glass-bg, rgba(255, 255, 255, 0.05));
  --glass-border: var(--glass-border, rgba(255, 255, 255, 0.1));
}
```

## Usage

### Basic Theme Switching
```tsx
import { useTheme } from '@/contexts/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}
```

### Theme-Aware Styling
```tsx
import { useThemeStyles } from '@/hooks/useThemeStyles';

function MyComponent() {
  const { styles } = useThemeStyles();
  
  return (
    <div className={`${styles.card.current} ${styles.text.current}`}>
      This content adapts to the current theme
    </div>
  );
}
```

### Conditional Theming
```tsx
import { useLocation } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';

function Layout({ children }) {
  const location = useLocation();
  const { theme } = useTheme();
  
  // Only apply theme styling for non-Home pages
  const isHomePage = location.pathname === '/';
  const themeClass = isHomePage ? '' : `theme-${theme}`;
  
  return (
    <div className={`min-h-screen bg-background ${themeClass}`}>
      {children}
    </div>
  );
}
```

## File Structure

```
src/
├── contexts/
│   └── ThemeContext.tsx          # Theme state management
├── hooks/
│   └── useThemeStyles.tsx        # Theme-aware styling utilities
├── components/
│   ├── ui/
│   │   ├── theme-toggle.tsx      # Theme toggle button
│   │   └── theme-demo.tsx        # Theme showcase component
│   └── layout/
│       ├── Layout.tsx            # Theme-aware layout wrapper
│       └── Navigation.tsx        # Navigation with theme toggle
├── pages/
│   ├── Home.tsx                  # Always dark theme
│   ├── About.tsx                 # Theme-aware (updated)
│   ├── Skills.tsx                # Theme-aware
│   ├── Projects.tsx              # Theme-aware
│   └── ...                       # Other theme-aware pages
└── index.css                     # Theme-specific CSS variables
```

## Customization

### Adding New Themes
1. Extend the `Theme` type in `ThemeContext.tsx`
2. Add new color schemes in the `useEffect` hook
3. Update the `useThemeStyles` hook with new style variants

### Modifying Existing Themes
1. Update CSS custom properties in `ThemeContext.tsx`
2. Modify theme-specific styles in `index.css`
3. Adjust component styles using the `useThemeStyles` hook

### Theme-Specific Components
Create components that automatically adapt to the current theme:

```tsx
function ThemedCard({ children, className = '' }) {
  const { styles } = useThemeStyles();
  
  return (
    <div className={`${styles.card.current} ${styles.border.current} ${className}`}>
      {children}
    </div>
  );
}
```

## Browser Support

- Modern browsers with CSS custom properties support
- Graceful fallback to dark theme for older browsers
- Responsive design for all screen sizes

## Performance

- Theme switching is instant with CSS custom properties
- No re-renders required for theme changes
- Smooth transitions with CSS animations
- Minimal bundle size impact

## Future Enhancements

- Additional theme variants (e.g., high contrast, sepia)
- Automatic theme switching based on time of day
- User preference synchronization across devices
- Theme import/export functionality
- Advanced color palette customization
