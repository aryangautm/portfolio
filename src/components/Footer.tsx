import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export const Footer = () => {
    const [visitors, setVisitors] = useState(0);

    useEffect(() => {
        // Try to fetch from backend, fallback to localStorage
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';

        fetch(`${apiUrl}/api/visitors/increment`, {
            method: 'POST',
        })
            .then(res => res.json())
            .then(data => setVisitors(data.count))
            .catch(() => {
                // Fallback to localStorage if backend is not available
                const count = parseInt(localStorage.getItem('visitorCount') || '0');
                const newCount = count + 1;
                localStorage.setItem('visitorCount', newCount.toString());
                setVisitors(newCount);
            });
    }, []);

    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-black/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 z-40"
        >
            <div className="max-w-7xl mx-auto px-4 py-2">
                <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <span>2025. All rights reserved</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <span>Designed & Made with</span>
                        <FiHeart className="w-4 h-4 text-red-500 fill-red-500" />
                    </div>

                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <span>Visitors</span>
                        <span className="font-mono font-bold text-purple-600 dark:text-purple-400">
                            #{visitors.toString().padStart(3, '0')}
                        </span>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

