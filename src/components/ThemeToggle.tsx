
import { Moon, Sun } from 'lucide-react';
import useTheme from '@/hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-secondary/50 hover:bg-secondary text-foreground transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon size={20} className="opacity-80" />
      ) : (
        <Sun size={20} className="opacity-80" />
      )}
    </button>
  );
}
