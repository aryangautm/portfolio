import { Hero } from '../components/Hero';
import { Skills } from '../components/Skills';
import { Experience } from '../components/Experience';
import { GitHubGraph } from '../components/GitHubGraph';
import { Projects } from '../components/Projects';
import { Blog } from '../components/Blog';
import { Contact } from '../components/Contact';

export const Home = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
            <Hero />
            <Skills />
            <Experience />
            <GitHubGraph />
            <Projects />
            <Blog />
            <Contact />
        </div>
    );
};

