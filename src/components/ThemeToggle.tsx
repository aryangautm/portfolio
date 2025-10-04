import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className="fixed top-6 right-6 z-50 p-3 rounded-full bg-gray-200 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                transition={{ duration: 0.3 }}
            >
                {theme === 'dark' ? (
                    <FiMoon className="w-5 h-5 text-yellow-300" />
                ) : (
                    <FiSun className="w-5 h-5 text-orange-500" />
                )}
            </motion.div>
        </motion.button>
    );
};

