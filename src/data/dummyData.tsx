import { Rocket, GraduationCap, GitBranch } from 'lucide-react';

const dummyData = {
    info: {
        name: 'Buyandelger Tsendsuren',
        profession: 'Software Developer',
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
    techSkills: [
        {
            icon: 'Rocket',
            bgColor: 'bg-red-500',
            iconColor: 'text-red-400',
            name: 'Python',
            description: 'Blasting off with backend logic!',
        },
        {
            icon: 'Zap',
            bgColor: 'bg-yellow-500',
            iconColor: 'text-yellow-400',
            name: 'JavaScript',
            description: 'Making web pages shockingly interactive.',
        },
        {
            icon: 'Award',
            bgColor: 'bg-blue-500',
            iconColor: 'text-blue-400',
            name: 'Java',
            description: 'Building robust and scalable applications.',
        },
    ],
    projects: [
        {
            title: 'Xyp service call client',
            description: 'Xyp service call client using fingerprint authentication. Built with C#.',
            tags: ['C#', 'SOAP', 'Windows Forms', 'FingerPrint'],
            gradient: 'from-orange-400 to-rose-400',
            url: 'https://github.com/buyakaa13/xyp-csharp',
        },
        {
            title: 'E-commerce Application',
            description: 'A serverless full-stack E-Commerce web app using React and Node.js, deployed entirely on AWS.',
            tags: ['React', 'Typescript', 'Node.js', 'Tailwind CSS', 'AWS'],
            gradient: 'from-slate-500 to-gray-400',
            url: 'https://github.com/buyakaa13/cloud-project-backend',
        },
        {
            title: 'Bakery Blog',
            description: 'A blog management application where users can create, and interact with blog posts.',
            tags: ['React', 'Typescript', 'TailwindCSS', 'Node.js', 'Express'],
            gradient: 'from-blue-500 to-cyan-400',
            url: 'https://github.com/buyakaa13/bakery_blog',
        },
        {
            title: 'Coffee shop',
            description: 'A coffee shop creative API services. Built with React and Three.js.',
            tags: ['Java', 'Spring Boot', 'Hibernate', 'Docker', 'ArtemisMQ'],
            gradient: 'from-pink-500 to-purple-600',
            url: 'https://github.com/buyakaa13/CS544_Project',
        },
        {
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
            date: 'Software Developer',
            title: 'Junior Web Developer',
            company: 'SmartLogic LLC',
            companyLink: 'https://smartlogic.mn/',
            icon: GraduationCap,
            iconColor: 'text-sky-400',
            iconBgColor: 'bg-sky-900/20',
        },
    ],
};

export default dummyData;
