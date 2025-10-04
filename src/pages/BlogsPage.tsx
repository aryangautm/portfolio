import { motion } from 'framer-motion';
import { FiArrowLeft, FiCalendar, FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface BlogPost {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    tags: string[];
    image: string;
}

const blogPosts: BlogPost[] = [
    {
        title: 'Building Scalable Web Applications with React and TypeScript',
        excerpt: 'Learn how to structure and build production-ready React applications using TypeScript, best practices, and modern tooling.',
        date: 'Oct 1, 2025',
        readTime: '8 min read',
        tags: ['React', 'TypeScript', 'Web Development'],
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop'
    },
    {
        title: 'Mastering Node.js: From Basics to Advanced Concepts',
        excerpt: 'A comprehensive guide to Node.js covering everything from event loops to building production-grade APIs.',
        date: 'Sep 28, 2025',
        readTime: '12 min read',
        tags: ['Node.js', 'Backend', 'JavaScript'],
        image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop'
    },
    {
        title: 'Understanding Design Patterns in Modern Software Development',
        excerpt: 'Explore the most common design patterns and learn when and how to apply them in your projects.',
        date: 'Sep 20, 2025',
        readTime: '10 min read',
        tags: ['Design Patterns', 'Software Architecture', 'Best Practices'],
        image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&h=400&fit=crop'
    }
];

export const BlogsPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black transition-colors duration-300 py-20 px-4 pb-32">
            <div className="max-w-4xl mx-auto">
                {/* Back button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                        <FiArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        My Blog
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Thoughts, learnings, and experiences from my journey in tech
                    </p>
                </motion.div>

                {/* Blog posts */}
                <div className="space-y-8">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.01 }}
                            className="group cursor-pointer"
                        >
                            <div className="bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-gray-300 dark:hover:border-gray-600 transition-all card-hover">
                                <div className="md:flex">
                                    {/* Post Image */}
                                    <div className="md:w-2/5 relative overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Post Content */}
                                    <div className="md:w-3/5 p-6">
                                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                                            <div className="flex items-center gap-1">
                                                <FiCalendar className="w-4 h-4" />
                                                {post.date}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <FiClock className="w-4 h-4" />
                                                {post.readTime}
                                            </div>
                                        </div>

                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                            {post.title}
                                        </h2>

                                        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {post.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Coming soon message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 text-center p-8 bg-white dark:bg-gray-800/50 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700"
                >
                    <p className="text-gray-600 dark:text-gray-400">
                        More awesome content coming soon! 🚀
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

