import React from 'react';
import dummyData from '../data/dummyData';
import SectionTitle from '../SectionTitle';
import './styles.css';
import {SquareArrowOutUpRight } from 'lucide-react';
import Certificate from '../Certificate';

const Experience: React.FC = () => {
  
    return (
      <section id="experience" className="py-16">
        <SectionTitle title="Career path" subtitle="Work Experience" />
        <p className="text-center max-w-2xl mx-auto mt-4 mb-12 text-gray-400">
          My professional journey as a software engineer, from my early days to my most recent role.
        </p>
        <div className='grid grid-cols-2'>
          <div>
            <ul>
              {dummyData.experiences.map((item, index) => (
                <li className="flex gap-x-3" key={index}>
                <div className="relative flex h-full flex-col items-center">
                  <div className="absolute top-12 w-0.5 h-full bg-gradient-to-b from-pink-500 to-orange-500"></div>
                  
                  <div className={`flex h-12 w-10 items-center justify-center rounded-full z-10 ${item.iconBgColor}`}>
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full ${item.iconColor} bg-gray-800 ring-2`}>
                      {React.createElement(item.icon, { size: 20, className: "text-white" })}
                    </div>
                  </div>
                </div>
          
                <div className="flex-1 pb-5">
                  <div className="p-6 rounded-2xl transition-transform hover:scale-[1.02] hover:border-pink-500">
                    <p className="text-sm text-gray-400 mb-1">{item.date}</p>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <a
                      href={item.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-x-2 text-sky-400 hover:text-sky-300 transition-colors"
                    >
                      {item.company}
                      <SquareArrowOutUpRight size={16} />
                    </a>
                  </div>
                </div>
              </li>
              ))}
            </ul>
          </div>
          <div>
            <Certificate />
          </div>
        </div>
        
      </section>
      
    );
  };

export default Experience;