import { motion } from 'framer-motion';
import { FiTwitter, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const socialLinks = [
    {
        name: 'Twitter',
        icon: FiTwitter,
        url: 'https://twitter.com/yourusername',
        color: 'hover:text-blue-400'
    },
    {
        name: 'GitHub',
        icon: FiGithub,
        url: 'https://github.com/yourusername',
        color: 'hover:text-gray-600 dark:hover:text-gray-300'
    },
    {
        name: 'LinkedIn',
        icon: FiLinkedin,
        url: 'https://linkedin.com/in/yourusername',
        color: 'hover:text-blue-600'
    },
    {
        name: 'Resume',
        icon: FiMail,
        url: '/resume.pdf',
        color: 'hover:text-red-500'
    }
];

export const Contact = () => {
    return (
        <section className="py-10 px-4 mb-20">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Let's Connect
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                        Feel free to reach out through any of these platforms
                    </p>

                    <div className="flex justify-center gap-3 flex-wrap mb-6">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-900 dark:text-white transition-colors ${social.color}`}
                            >
                                <social.icon className="w-4 h-4" />
                                {social.name}
                            </motion.a>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="italic text-xs text-gray-600 dark:text-gray-400"
                    >
                        "Nothing Is Perfect — But You Can Make It Better."
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

