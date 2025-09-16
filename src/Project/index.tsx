import { useEffect, useState } from 'react';
import dummyData from '../data/dummyData';
import SectionTitle from '../SectionTitle';
import { SquareArrowOutUpRight } from 'lucide-react';

const Projects: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 3;
    const totalItems = dummyData.projects.length;

    useEffect(() => {
        if (totalItems <= itemsToShow) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalItems - itemsToShow + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, [totalItems]);

    return (
        <section id="projects" className="py-20 md:py-28">
            <SectionTitle title="My Work" subtitle="Featured Projects" />
            <p className="text-center max-w-2xl mx-auto mt-4 mb-12 text-gray-400">
                A selection of projects that showcase my passion for creating meaningful digital experiences.
            </p>

            <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
                >
                    {dummyData.projects.map((project, index) => (
                        <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4">
                            <div className="bg-[#1A1A1A] border border-gray-800 rounded-lg p-6 h-full flex flex-col hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-xl hover:shadow-pink-500/20">
                                <div className={`h-40 rounded-md mb-4`}>
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-md" />
                                </div>
                                <a
                                    href={project.url}
                                    target="_blank"
                                    className="flex items-center justify-between mb-2 cursor-pointer hover:text-pink-500"
                                >
                                    <h4 className="text-xl font-bold mb-2 text-white hover:text-pink-500">{project.title}</h4>
                                    <SquareArrowOutUpRight size={16} />
                                </a>
                                <p className="text-gray-400 flex-grow mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="text-xs font-semibold bg-gray-700 text-pink-300 px-2 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
