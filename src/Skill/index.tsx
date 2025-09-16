import SectionTitle from "../SectionTitle";

const Skills = () => (
    <section id="skills" className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
            <SectionTitle title="Skills" subtitle="Technologies I Use"/>
            <p className="max-w-xl mx-auto mt-4 text-gray-400">
                A showcase of the diverse technologies and tools I utilize to craft efficient and innovative solutions.
            </p>
            <div className="grid grid-cols-2 mt-12">
                <div className="transition-all duration-300 hover:-translate-y-2">
                    <img 
                        src="https://github-widgetbox.vercel.app/api/skills?languages=java,csharp,js,ts,node,html,css,php,xml,json,yaml,postgresql,mysql,graphql&includeNames=true&theme=darkmode" 
                        alt="GitHub WidgetBox"
                    />
                </div>
                <div className="transition-all duration-300 hover:-translate-y-2">
                    <img 
                        src="https://github-widgetbox.vercel.app/api/skills?frameworks=react,dotnet,dotnetcore,laravel,bootstrap,tailwind,express,git,docker,npm,mongodb,redis,apache,aws&includeNames=true&theme=darkmode" 
                        alt="GitHub WidgetBox"
                    />
                </div>
            </div>
        </div>
    </section>
);
export default Skills;