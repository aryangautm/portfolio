import { motion } from 'framer-motion';
import { FiMapPin, FiClock, FiTwitter, FiMail } from 'react-icons/fi';
import {
    SiReact,
    SiTypescript,
    SiNodedotjs,
    SiMongodb,
    SiMysql,
    SiSpringboot,
    SiExpress
} from 'react-icons/si';
import { VscTerminalBash } from 'react-icons/vsc';

export const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-12">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-4xl w-full"
            >
                {/* Profile Header */}
                <motion.div variants={itemVariants} className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs text-gray-500 dark:text-gray-400">Hey it's me 👋</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                            Your Name
                        </h1>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600 dark:text-gray-400 mb-2">
                            <div className="flex items-center gap-1">
                                <FiMapPin className="w-3 h-3" />
                                <span>Location, Country</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <FiClock className="w-3 h-3" />
                                <span>Local Time</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-xs text-green-500 font-medium">Open to work</span>
                        </div>
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="hidden md:block"
                    >
                        <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 overflow-hidden shadow-xl">
                            {/* Replace with your actual image */}
                            <img
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Bio */}
                <motion.div variants={itemVariants} className="mb-6">
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                        Yup! I'm a <span className="font-semibold gradient-text">Full Stack Developer</span>. Big deal, right? But wait... there's more!
                        I'm not just any developer, I love building solutions and solving problems. I enjoy crafting websites with{' '}
                        <span className="inline-flex items-center gap-1 font-medium">
                            <SiReact className="inline text-cyan-500" /> React
                        </span>
                        ,{' '}
                        <span className="inline-flex items-center gap-1 font-medium">
                            <SiTypescript className="inline text-blue-500" /> TypeScript
                        </span>
                        ,{' '}
                        <span className="inline-flex items-center gap-1 font-medium">
                            <SiExpress className="inline text-gray-600 dark:text-gray-300" /> Express
                        </span>
                        ,{' '}
                        <span className="inline-flex items-center gap-1 font-medium">
                            <SiSpringboot className="inline text-green-600" /> Spring Boot
                        </span>
                        {' '}using{' '}
                        <span className="inline-flex items-center gap-1 font-medium">
                            <SiMongodb className="inline text-green-500" /> MongoDB
                        </span>
                        ,{' '}
                        <span className="inline-flex items-center gap-1 font-medium">
                            <SiMysql className="inline text-blue-600" /> MySQL
                        </span>
                        {' '}databases and I live on the{' '}
                        <span className="inline-flex items-center gap-1 font-medium">
                            <VscTerminalBash className="inline text-gray-800 dark:text-gray-200" /> terminal
                        </span>
                        {' '}mostly.
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        I love both <span className="font-semibold">Development</span> & <span className="font-semibold">Design</span>.
                        So, that means I can create beautiful and functional websites. I'm always looking for new opportunities to learn and grow.
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
                    <motion.a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg text-sm font-medium hover:shadow-lg transition-shadow"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <FiTwitter className="w-3 h-3" />
                        Twitter DM
                    </motion.a>
                    <span className="text-gray-500 dark:text-gray-400 flex items-center text-xs">OR</span>
                    <motion.a
                        href="mailto:your.email@example.com"
                        className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg text-sm font-medium hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <FiMail className="w-3 h-3" />
                        Email Me
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
};

