import dummyData from '../data/dummyData';
import './styles.css';
import profile from '../assets/profile.jpg';

interface HeaderProps {
    handleScroll: (sectionId: string) => void;
}

const Hero: React.FC<HeaderProps> = ({ handleScroll }) => (
    <section id="about" className="text-center py-20">
        <img src={profile} alt="My Profile" className="w-35 h-35 rounded-xl mx-auto mb-4 shadow-xl hover:scale-125" />
        <h1 className="text-5xl font-bold text-white mb-2">{dummyData.info.name}</h1>
        <h2 className="text-2xl mb-4">
            <span className="text-pink-500">{dummyData.info.profession}</span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400 mb-8">
            I create robust and user-focused software solutions across backend and frontend technologies. Passionate about clean code, continuous
            learning, and leveraging cloud and AI tools to deliver innovation.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-3 rounded-lg hover:scale-105 transition-transform shadow-lg"
                onClick={() => handleScroll('#projects')}
            >
                View My Work
            </button>
            <a
                href="https://drive.google.com/file/d/15m9Q0GUaLtSqmfgUvMY3EWiI4eVSzOJf/view"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white hover:text-pink-400 transition-colors"
            >
                Download CV &rarr;
            </a>
        </div>
    </section>
);

export default Hero;
