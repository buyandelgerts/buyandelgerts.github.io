import Interest from './Interest';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import Skill from './Skill';
import Project from './Project';
import Experience from './Experience';
import Contact from './Contact';

export default function App() {
    const handleScroll = (sectionName: string) => {
        const section = document.querySelector<HTMLElement>(sectionName);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            window.history.replaceState(null, '', sectionName);
        }
    };
    return (
        <div
            className="bg-[#111111] text-gray-200 font-sans leading-relaxed"
            style={{
                scrollBehavior: 'smooth',
            }}
        >
            <Header handleScroll={handleScroll} />
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <Hero handleScroll={handleScroll} />
                <Skill />
                <Experience />
                <Project />
                <Interest />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
