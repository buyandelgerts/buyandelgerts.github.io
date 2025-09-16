import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import dummyData from '../data/dummyData';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20">
            <SectionTitle title="Contact" subtitle="Let's Connect" />
            <p className="text-center max-w-2xl mx-auto mt-4 mb-12 text-gray-400">
                Have a project in mind or just want to say hi? Feel free to reach out.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 text-gray-300">
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <Mail className="text-pink-500 text-2xl" />
                        <span>{dummyData.contact.email}</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="text-pink-500 text-2xl" />
                        <span>{dummyData.contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <MapPin className="text-pink-500 text-2xl" />
                        <span>{dummyData.info.location}</span>
                    </div>
                </div>
                <div className="md:border-l border-gray-700 md:pl-12">
                    <h4 className="font-bold mb-4 text-center md:text-left text-white">Find me on</h4>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a
                            href={dummyData.contact.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Github"
                            className="text-3xl text-pink-500 hover:text-pink-300 transition-colors"
                        >
                            <Github />
                        </a>
                        <a
                            href={dummyData.contact.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Linkedin"
                            className="text-3xl text-pink-500 hover:text-pink-300 transition-colors"
                        >
                            <Linkedin />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
