import dummyData from '../data/dummyData';
import { Code2, Music, Camera, BookOpen, Gamepad2, Mountain } from 'lucide-react';
import './styles.css';
import Card from '../Card';
import SectionTitle from '../SectionTitle';

const Interest: React.FC = () => (
    <section id="interests" className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
            <SectionTitle title="INTERESTS" subtitle="What I Do For Fun" />
            <p className="max-w-xl mx-auto mt-4 text-gray-400">
                Beyond the screen, I'm passionate about a few other things that keep my life exciting and balanced.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-left">
                {dummyData.interests.map((interest) => {
                    const iconMap: Record<string, React.ElementType> = {
                        Code2,
                        Music,
                        Camera,
                        BookOpen,
                        Gamepad2,
                        Mountain,
                    };
                    const CardComponent = iconMap[interest.icon] || Code2;
                    return (
                        <div
                            key={interest.title}
                            className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-pink-500"
                        >
                            <Card component={CardComponent} className="h-7 w-7 text-pink-500 mb-4" />
                            <h4 className="text-xl font-bold text-white mb-2">{interest.title}</h4>
                            <p className="text-gray-400">{interest.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
);
export default Interest;
