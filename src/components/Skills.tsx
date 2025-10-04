import { motion } from 'framer-motion';
import {
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiSpringboot,
    SiSpring,
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiTypescript,
    SiJavascript,
    SiPython,
    SiGo,
    SiDocker,
    SiKubernetes,
    SiGit,
    SiGithub,
    SiVercel,
    SiNetlify,
    SiSupabase,
    SiNotion,
    SiRedis,
    SiTailwindcss,
    SiNextdotjs,
    SiVite,
    SiRender
} from 'react-icons/si';
import { FaAws, FaJava } from 'react-icons/fa';

const skills = [
    { name: 'React', icon: SiReact, color: 'text-cyan-500' },
    { name: 'Node.JS', icon: SiNodedotjs, color: 'text-green-500' },
    { name: 'Express', icon: SiExpress, color: 'text-gray-700 dark:text-gray-300' },
    { name: 'Spring Security', icon: SiSpring, color: 'text-green-600' },
    { name: 'Spring Jpa', icon: SiSpringboot, color: 'text-green-600' },
    { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-600' },
    { name: 'Supabase', icon: SiSupabase, color: 'text-green-500' },
    { name: 'Vercel', icon: SiVercel, color: 'text-gray-900 dark:text-white' },
    { name: 'Netlify', icon: SiNetlify, color: 'text-teal-500' },
    { name: 'Render', icon: SiRender, color: 'text-purple-500' },
    { name: 'Notion', icon: SiNotion, color: 'text-gray-900 dark:text-white' },
    { name: 'Git', icon: SiGit, color: 'text-orange-600' },
    { name: 'GitHub', icon: SiGithub, color: 'text-gray-900 dark:text-white' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-500' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
    { name: 'Python', icon: SiPython, color: 'text-blue-500' },
    { name: 'Java', icon: FaJava, color: 'text-red-600' },
    { name: 'Go', icon: SiGo, color: 'text-cyan-500' },
    { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
    { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-600' },
    { name: 'AWS', icon: FaAws, color: 'text-orange-500' },
    { name: 'Redis', icon: SiRedis, color: 'text-red-600' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-500' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-900 dark:text-white' },
    { name: 'Vite', icon: SiVite, color: 'text-purple-500' },
];

export const Skills = () => {
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
                        [ Things I've Learnt & I know ]
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.01 }}
                            whileHover={{ scale: 1.05 }}
                            className="flex flex-col items-center justify-center p-2 bg-white dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all cursor-default"
                        >
                            <skill.icon className={`w-5 h-5 ${skill.color} mb-1`} />
                            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

