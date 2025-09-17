import { Rocket, GraduationCap, GitBranch } from 'lucide-react';
import xypLogo from '../assets/xypLogo.jpeg';
import coffeeShop from '../assets/coffeeShop.png';
import contactManager from '../assets/contactManager.png';
import bakeryBlog from '../assets/bakeryBlog.png';
import ecommerce from '../assets/ecommerce.png';

const dummyData = {
    info: {
        name: 'Buyandelger Tsendsuren',
        profession: 'Software Engineer',
        location: 'Chicago, IL',
    },
    contact: {
        email: 'buyan.tsendsuren@gmail.com',
        phone: '+1-641-233-9584',
        linkedin: 'https://www.linkedin.com/in/tsbuyandelger',
        github: 'https://www.github.com/buyakaa13',
    },
    interests: [
        {
            icon: 'Code2',
            title: 'Coding',
            description: 'Exploring new technologies and building fun side projects.',
        },
        {
            icon: 'BookOpen',
            title: 'Reading',
            description: 'Diving into sci-fi worlds and non-fiction books.',
        },
        {
            icon: 'Music',
            title: 'Music',
            description: 'Playing the guitar and discovering new artists and genres.',
        },
        // {
        //     icon: "Mountain",
        //     title: 'Hiking',
        //     description: 'Exploring nature trails and conquering new peaks.',
        // },
    ],
    projects: [
        {
            image: xypLogo,
            title: 'Xyp service call client',
            description: 'Xyp service call client using fingerprint authentication. Built with C#.',
            tags: ['C#', 'SOAP', 'Windows Forms', 'FingerPrint'],
            gradient: 'from-orange-400 to-rose-400',
            url: 'https://github.com/buyakaa13/xyp-csharp',
        },
        {
            image: ecommerce,
            title: 'E-commerce Application',
            description: 'A serverless full-stack E-Commerce web app using React and Node.js, deployed entirely on AWS.',
            tags: ['React', 'Typescript', 'Node.js', 'Tailwind CSS', 'AWS'],
            gradient: 'from-slate-500 to-gray-400',
            url: 'https://github.com/buyakaa13/cloud-project-backend',
        },
        {
            image: bakeryBlog,
            title: 'Bakery Blog',
            description: 'A blog management application where users can create, and interact with blog posts.',
            tags: ['React', 'Typescript', 'TailwindCSS', 'Node.js', 'Express'],
            gradient: 'from-blue-500 to-cyan-400',
            url: 'https://github.com/buyakaa13/bakery_blog',
        },
        {
            image: coffeeShop,
            title: 'Coffee shop',
            description: 'A coffee shop creative API services.',
            tags: ['Java', 'Spring Boot', 'Hibernate', 'Docker', 'ArtemisMQ'],
            gradient: 'from-pink-500 to-purple-600',
            url: 'https://github.com/buyakaa13/CS544_Project',
        },
        {
            image: contactManager,
            title: 'Contact Manager App',
            description: 'A contact management application where users can create, and interact with contacts.',
            tags: ['React', 'Typescript', 'TailwindCSS', 'Node.js', 'Express'],
            gradient: 'from-emerald-500 to-lime-500',
            url: 'https://github.com/buyakaa13/phone-contact',
        },
    ],
    experiences: [
        {
            date: 'May 2023 - Aug 2024',
            title: 'System Engineer',
            company: 'E-Mongolia academy',
            companyLink: 'https://ema.gov.mn',
            icon: Rocket,
            iconColor: 'text-purple-400',
            iconBgColor: 'bg-purple-900/20',
        },
        {
            date: 'Aug 2021 - May 2023',
            title: 'Backend Developer',
            company: 'Mongolian National Datacenter',
            companyLink: 'https://datacenter.gov.mn',
            icon: GitBranch,
            iconColor: 'text-red-400',
            iconBgColor: 'bg-red-900/20',
        },
        {
            date: 'Jul 2018 - Aug 2021',
            title: 'Software Developer',
            company: 'SmartLogic LLC',
            companyLink: 'https://smartlogic.mn/',
            icon: GraduationCap,
            iconColor: 'text-sky-400',
            iconBgColor: 'bg-sky-900/20',
        },
    ],
};

export default dummyData;
