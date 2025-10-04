import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiAlertTriangle } from 'react-icons/fi';

interface Project {
    title: string;
    description: string;
    tech: string[];
    liveUrl?: string;
    githubUrl?: string;
    image: string;
    status?: 'live' | 'warning';
    statusText?: string;
}

const projects: Project[] = [
    {
        title: 'Secure2FA',
        description: 'A robust two-factor authentication system implementing Time-based One-Time Password (TOTP) for enhanced application security.',
        tech: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Java', 'SpringBoot', 'Spring Security'],
        liveUrl: 'https://secure2fa.example.com',
        githubUrl: 'https://github.com/yourusername/secure2fa',
        image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&h=500&fit=crop',
        status: 'warning',
        statusText: 'Live'
    },
    {
        title: 'BlogZone',
        description: 'About Blog Zone Blog Zone is a modern platform designed to empower writers, bloggers, and content creators to share their stories with the world.',
        tech: ['Html', 'CSS', 'JavaScript', 'Node.js', 'MongoDB', 'Express'],
        liveUrl: 'https://blogzone.example.com',
        githubUrl: 'https://github.com/yourusername/blogzone',
        image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop',
        status: 'live',
        statusText: 'Live'
    },
];

export const Projects = () => {
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
                        [ Things I've Built ]
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-white dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-gray-300 dark:hover:border-gray-600 transition-all">
                                <div className="md:flex">
                                    {/* Project Image */}
                                    <div className="md:w-2/5 relative overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-32 md:h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                                        />
                                    </div>

                                    {/* Project Info */}
                                    <div className="md:w-3/5 p-4">
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="text-base font-bold text-gray-900 dark:text-white">
                                                {project.title}
                                            </h3>
                                            <div className="flex gap-1.5">
                                                {project.liveUrl && (
                                                    <a
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                                                        title="View Live"
                                                    >
                                                        <FiExternalLink className="w-3.5 h-3.5 text-gray-700 dark:text-gray-300" />
                                                    </a>
                                                )}
                                                {project.githubUrl && (
                                                    <a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                                                        title="View Code"
                                                    >
                                                        <FiGithub className="w-3.5 h-3.5 text-gray-700 dark:text-gray-300" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        {project.status && (
                                            <div className="flex items-center gap-1 mb-2">
                                                {project.status === 'warning' && (
                                                    <FiAlertTriangle className="w-3 h-3 text-yellow-500" />
                                                )}
                                                <span className={`text-xs font-medium ${project.status === 'live' ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'
                                                    }`}>
                                                    {project.statusText}
                                                </span>
                                            </div>
                                        )}

                                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div>
                                            <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                                                Technologies Used:
                                            </p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {project.tech.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-2 py-0.5 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-6 text-center"
                >
                    <motion.a
                        href="/projects"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg text-sm font-medium hover:shadow-lg transition-shadow"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        More Projects
                        <FiExternalLink className="w-3 h-3" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

