import { useTheme } from '@/contexts/ThemeContext';
import { useThemeStyles } from '@/hooks/useThemeStyles';
import { Sun, Moon, Palette, Zap, Gamepad2, Briefcase } from 'lucide-react';

export function ThemeDemo() {
  const { theme, toggleTheme } = useTheme();
  const { styles } = useThemeStyles();

  return (
    <div className={`p-6 rounded-xl ${styles.glass.current} ${styles.border.current}`}>
      <div className="text-center mb-6">
        <h3 className={`text-2xl font-bold mb-2 ${styles.text.current}`}>
          Theme: {theme === 'light' ? 'Professional Light' : 'Gaming Dark'}
        </h3>
        <p className={styles.textSecondary.current}>
          {theme === 'light' 
            ? 'Clean, professional design perfect for business and productivity' 
            : 'Dynamic, gaming-inspired design with neon accents and cyber aesthetics'
          }
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className={`p-4 rounded-lg ${styles.accentBg.current}`}>
          <div className="flex items-center gap-2 mb-2">
            {theme === 'light' ? <Briefcase className="w-5 h-5 text-blue-600" /> : <Gamepad2 className="w-5 h-5 text-cyan-400" />}
            <span className={`font-semibold ${styles.text.current}`}>
              {theme === 'light' ? 'Professional Mode' : 'Gaming Mode'}
            </span>
          </div>
          <p className={`text-sm ${styles.textSecondary.current}`}>
            {theme === 'light' 
              ? 'Clean whites, subtle shadows, and professional blue accents'
              : 'Dark backgrounds, neon glows, and vibrant cyan highlights'
            }
          </p>
        </div>

        <div className={`p-4 rounded-lg ${styles.accentBg.current}`}>
          <div className="flex items-center gap-2 mb-2">
            <Palette className="w-5 h-5 text-purple-500" />
            <span className={`font-semibold ${styles.text.current}`}>Color Scheme</span>
          </div>
          <p className={`text-sm ${styles.textSecondary.current}`}>
            {theme === 'light' 
              ? 'Light backgrounds with dark text for optimal readability'
              : 'Dark backgrounds with bright accents for immersive experience'
            }
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={toggleTheme}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
            theme === 'light' 
              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
              : 'bg-cyan-600 hover:bg-cyan-700 text-white'
          }`}
        >
          {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </div>
  );
}
