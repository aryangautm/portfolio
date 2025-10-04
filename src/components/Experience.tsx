import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    location: string;
    logo: string;
    link?: string;
    status?: string;
}

const experiences: ExperienceItem[] = [
    {
        company: 'Jabsz Gaming Studios',
        role: 'Full Stack Dev Intern',
        period: 'May 2025 - Sep 2025',
        location: 'India (Remote)',
        logo: '🎮',
        status: 'Completed'
    },
    // Add more experiences as needed
];

export const Experience = () => {
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
                        [ Places I've Made an Impact ]
                    </h2>
                </motion.div>

                <div className="space-y-3">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.01 }}
                            className="relative group"
                        >
                            <div className="p-4 bg-white dark:bg-gray-800/50 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 transition-all">
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex items-start gap-3 flex-1">
                                        <div className="text-2xl">{exp.logo}</div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="text-base font-bold text-gray-900 dark:text-white">
                                                    {exp.company}
                                                </h3>
                                                {exp.link && (
                                                    <a
                                                        href={exp.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                                                    >
                                                        <FiExternalLink className="w-3 h-3" />
                                                    </a>
                                                )}
                                                {exp.status && (
                                                    <span className="flex items-center gap-1 px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded-full">
                                                        <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                                                        {exp.status}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                                                {exp.role}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right text-xs">
                                        <p className="text-gray-600 dark:text-gray-400 font-medium whitespace-nowrap">
                                            {exp.period}
                                        </p>
                                        <p className="text-gray-500 dark:text-gray-500 whitespace-nowrap">
                                            {exp.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

