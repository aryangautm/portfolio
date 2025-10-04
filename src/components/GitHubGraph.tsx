import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const GITHUB_USERNAME = 'aryangautm';

const fetchGitHubContributions = async (username: string) => {
    try {
        // Using public API - no token required!
        const response = await fetch(
            `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch GitHub data');
        }

        const result = await response.json();

        const contributions: { date: string; count: number }[] = [];
        let totalCount = 0;

        result.contributions.forEach((day: any) => {
            contributions.push({
                date: day.date,
                count: day.count,
            });
            totalCount += day.count;
        });

        return {
            contributions,
            total: totalCount,
        };
    } catch (error) {
        console.error('Error fetching GitHub contributions:', error);
        return null;
    }
};

// Fallback mock data if API fails
const generateMockData = () => {
    const data: { date: string; count: number }[] = [];
    const today = new Date();

    for (let i = 364; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const count = Math.floor(Math.random() * 5);
        data.push({
            date: date.toISOString().split('T')[0],
            count
        });
    }

    return data;
};

const getColorIntensity = (count: number) => {
    if (count === 0) return 'bg-gray-200 dark:bg-gray-800';
    if (count === 1) return 'bg-green-300 dark:bg-green-900';
    if (count === 2) return 'bg-green-400 dark:bg-green-700';
    if (count === 3) return 'bg-green-500 dark:bg-green-600';
    return 'bg-green-600 dark:bg-green-500';
};

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const GitHubGraph = () => {
    const [data, setData] = useState(generateMockData());
    const [totalContributions, setTotalContributions] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadGitHubData = async () => {
            setLoading(true);
            const githubData = await fetchGitHubContributions(GITHUB_USERNAME);

            if (githubData) {
                setData(githubData.contributions);
                setTotalContributions(githubData.total);
            } else {
                // Fallback to mock data
                const mockData = generateMockData();
                setData(mockData);
                setTotalContributions(mockData.reduce((sum, day) => sum + day.count, 0));
            }
            setLoading(false);
        };

        loadGitHubData();
    }, []);

    // Group data by weeks
    const weeks: { date: string; count: number }[][] = [];
    let currentWeek: { date: string; count: number }[] = [];

    data.forEach((day, index) => {
        currentWeek.push(day);
        if ((index + 1) % 7 === 0) {
            weeks.push(currentWeek);
            currentWeek = [];
        }
    });

    if (currentWeek.length > 0) {
        weeks.push(currentWeek);
    }

    return (
        <section className="py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="p-4 bg-white dark:bg-gray-800/50 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700"
                >
                    {/* Month labels */}
                    <div className="flex justify-between mb-2 text-xs text-gray-600 dark:text-gray-400 overflow-x-auto">
                        {months.map((month, i) => (
                            <span key={i} className="min-w-[40px]">{month}</span>
                        ))}
                    </div>

                    {/* Contribution grid */}
                    <div className="overflow-x-auto pb-4">
                        <div className="flex gap-1 min-w-max">
                            {weeks.map((week, weekIndex) => (
                                <div key={weekIndex} className="flex flex-col gap-1">
                                    {week.map((day, dayIndex) => (
                                        <motion.div
                                            key={`${weekIndex}-${dayIndex}`}
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.2, delay: (weekIndex * 7 + dayIndex) * 0.001 }}
                                            whileHover={{ scale: 1.2 }}
                                            className={`w-3 h-3 rounded-sm ${getColorIntensity(day.count)} cursor-pointer`}
                                            title={`${day.date}: ${day.count} contributions`}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Legend and stats */}
                    <div className="flex items-center justify-between mt-3 flex-wrap gap-3">
                        <div className="text-xs text-gray-700 dark:text-gray-300">
                            This year, I achieved <span className="font-bold text-green-600 dark:text-green-400">{totalContributions} contributions</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400">
                            <span>Less</span>
                            <div className="flex gap-0.5">
                                <div className="w-2 h-2 bg-gray-200 dark:bg-gray-800 rounded-sm"></div>
                                <div className="w-2 h-2 bg-green-300 dark:bg-green-900 rounded-sm"></div>
                                <div className="w-2 h-2 bg-green-400 dark:bg-green-700 rounded-sm"></div>
                                <div className="w-2 h-2 bg-green-500 dark:bg-green-600 rounded-sm"></div>
                                <div className="w-2 h-2 bg-green-600 dark:bg-green-500 rounded-sm"></div>
                            </div>
                            <span>More</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

