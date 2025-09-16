import { Rabbit } from 'lucide-react';
import './styles.css';
import { Link } from 'react-scroll';

interface HeaderProps {
    handleScroll: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ handleScroll }) => {
    return (
        <header className="py-6 px-4 md:px-0">
            <div className="container mx-auto flex justify-between items-center">
                <Rabbit size={30} className="text-pink-500" />
                <nav className="hidden md:flex items-center space-x-8">
                    <Link smooth={true} duration={600} to="about" className="text-gray-400 cursor-pointer hover:text-white transition-colors">
                        About
                    </Link>
                    <Link smooth={true} duration={600} to="experience" className="text-gray-400 cursor-pointer hover:text-white transition-colors">
                        Experience
                    </Link>
                    <Link smooth={true} duration={600} to="projects" className="text-gray-400 cursor-pointer hover:text-white transition-colors">
                        Projects
                    </Link>
                    <Link smooth={true} duration={600} to="interests" className="text-gray-400 cursor-pointer hover:text-white transition-colors">
                        Interests
                    </Link>
                    <Link smooth={true} duration={600} to="contact" className="text-gray-400 cursor-pointer hover:text-white transition-colors">
                        Contact
                    </Link>
                </nav>
                <button
                    className="bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold px-5 py-2 rounded-lg hover:scale-105 transition-transform"
                    onClick={() => handleScroll('#contact')}
                >
                    Get In Touch
                </button>
            </div>
        </header>
    );
};
export default Header;
