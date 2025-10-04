import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export const Blog = () => {
    return (
        <section className="py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                >
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 font-mono">
                        [ Thoughts in words. ]
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="p-6 bg-white dark:bg-gray-800/50 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 text-center"
                >
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                        You really want to read my blogs? Head over to{' '}
                        <a
                            href="/blogs"
                            className="font-bold underline decoration-2 decoration-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        >
                            My Blogs
                        </a>{' '}
                        page.
                    </p>
                    <motion.a
                        href="/blogs"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-shadow"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Read My Blogs
                        <FiArrowRight className="w-3 h-3" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

