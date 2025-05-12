import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TechStackData {
    [key: string]: string[];
}

const techStackData: TechSkillsSoftware = {
    'Tech Stack': [
        'JavaScript (ES6+)',
        'TypeScript',
        'React',
        'Node.js',
        'Express.js',
        'Next.js',
        'Tailwind CSS',
        'GraphQL',
        'RESTful APIs',
        'SQL Databases (PostgreSQL, MySQL)',
        'NoSQL Databases (MongoDB)',
        'Git',
        'Docker',
        'CI/CD',
        'WebSockets',
        'Redux/Context API',
        'Testing (Jest, React Testing Library)',
    ],
    'Skills': [
        'Problem Solving',
        'Communication',
        'Teamwork',
        'Adaptability',
        'Time Management',
        'Critical Thinking',
        'Debugging',
        'Agile Methodologies',
        'Object-Oriented Programming',
        'Functional Programming',
        'UI/UX Design Principles',
        'Performance Optimization',
        'Code Reviews',
        'Mentoring',
        'Technical Writing',
    ],
    'Software': [
        'VS Code',
        'IntelliJ IDEA',
        'GitLab',
        'GitHub',
        'Jira',
        'Confluence',
        'Figma',
        'Docker Desktop',
        'Postman',
        'DBeaver',
        'TablePlus',
        'npm/yarn/pnpm',
        'Webpack/Vite',
        'Linux/Unix',
        'MacOS',
        'Windows',
        'AWS/Azure/GCP',
        'Slack/Discord',
    ],
};

const TechSkillsSoftware = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('Tech Stack');

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
            <div className="max-w-4xl w-full space-y-8">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    {['Tech Stack', 'Skills', 'Software'].map((category) => (
                        <motion.div
                            key={category}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={cn(
                                "relative rounded-full p-4 w-40 h-40 flex items-center justify-center",
                                "transition-all duration-300",
                                "cursor-pointer",
                                "border-4",
                                "shadow-lg",
                                selectedCategory === category
                                    ? "border-purple-500/80 bg-purple-500/20 shadow-purple-500/50"
                                    : "border-gray-700 bg-gray-800 hover:border-purple-500/50 hover:bg-purple-500/10",
                            )}
                            onClick={() => setSelectedCategory(category)}
                            aria-label={`View ${category}`}
                        >
                            <span className="text-white text-lg font-semibold">{category}</span>
                            <div className="absolute inset-0 rounded-full border-4 border-gray-700" />
                        </motion.div>
                    ))}
                </div>

                <Card className="bg-gray-800 border-gray-700 shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-white">{selectedCategory}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {techStackData[selectedCategory].map((item) => (
                                <div
                                    key={item}
                                    className="p-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-300"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default TechSkillsSoftware;
