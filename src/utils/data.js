import frontendIcon from '../assets/frontend.png';
import backendIcon from '../assets/backend.png';
import toolsIcon from '../assets/tools.png';
import softSkillsIcon from '../assets/softskills.png';


import blogAppImage from '../assets/blg.png';
import medConnectImage from '../assets/med.png';
import project3Image from '../assets/port.png';

import one from '../assets/img1.png';
import two from '../assets/img2.png';
import three from '../assets/img3.png';
import four from '../assets/img4.png';
import five from '../assets/img5.png';
export const SKILLS = [
    {
        title: "Frontend",
        icon: frontendIcon,
        skills: [
            {skill: "HTML5" , percentage: "80%"},
            {skill: "CSS3" , percentage: "90%"},
            {skill: "JavaScript" , percentage: "75%"},
            {skill: "React" , percentage: "80%"},
        ],
    },
    {
        title: "Backend",
        icon: backendIcon,
        skills: [
            {skill: "Node.js" , percentage: "70%"},
            {skill: "Express.js" , percentage: "65%"},
            {skill: "MongoDB" , percentage: "60%"},
        ],
    },
    {
        title: "Tools",
        icon: toolsIcon,
        skills: [
            {skill: "Git & GitHub" , percentage: "85%"},
            {skill: "Visual Studio Code" , percentage: "90%"},
            {skill: "MS Word & Office" , percentage: "60%"},
            {skill: "Postman" , percentage: "65%"},
        ],
    },
    {
        title: "Soft Skills",
        icon: softSkillsIcon,
        skills: [
            {skill: "Collaboration" , percentage: "90%"},
            {skill: "Team work" , percentage: "85%"},
            {skill: "Communication" , percentage: "80%"},
            {skill: "Deadline Adherence" , percentage: "75%"},
            {skill: "Adaptibility" , percentage: "75%"},
        ]
    }

]

export const WORK_EXPERIENCE = [
    {
        title: "Frontend Intern at Scora Technologies Pvt. Ltd",
        date: "May 2024 - July 2024",  
        responsibilities: [
            "Designed and developed the user interface of the 'Question Bank Generator' using HTML, CSS, JavaScript, React, and Tailwind CSS",
            "Collaborated with team members to integrate the frontend with the backend, ensuring seamless data handling and efficient user interactions.",
        ],
    },
    {
        
            title: "Android Development Intern at AICTE Eduskills",
            date: "Jan 2024 - March 2024",
            responsibilities: [
                "Developed mobile applications using Android Studio, Java, and Kotlin, ensuring responsive and user-friendly interfaces.",
                "Learned Kotlin programming language and applied its features such as null safety, lambda functions, and extension functions to enhance Android development.",
                "Familiarized with Android fundamentals including Activities, Fragments, and Views to build and manage app screens.",
                "Collaborated with the team to integrate APIs for dynamic data fetching and functionality enhancements.",
                
            ],
        
        
    },
    {
        title: "Software Developer Intern at ABC Solutions",
        date: "Sep 2023 - Nov 2023",  
        responsibilities: [
            "Developed and maintained software applications using Java, Spring Boot, and MySQL, ensuring efficient data processing and management.",
            "Collaborated with the team to identify and resolve software issues, ensuring the smooth operation of the applications.",
        ],

    },
    {
        title: "Web Development Intern at PQR Technologies",
        date: "May 2023 - July 2023",  
        responsibilities: [
            "Developed the frontend of the company website using HTML, CSS, and JavaScript, ensuring a user-friendly and responsive design.",
            "Collaborated with the design team to implement new features and enhancements, ensuring a seamless user experience.",
        ],
    },
]     



export const PROJECTS = [
    {
        title: "Blog Application",
        description: "A fully functional blog application where users can post, edit, and delete articles. Includes authentication and user management features.",
        date: "February 2024 - April 2024",
        image: blogAppImage,
        codeLink: "https://github.com/T-Fathima",
        liveLink: "https://blog-app-live-link.com"
    },
    {
        title: "Med Connect App",
        description: "A healthcare app designed to connect patients and doctors. Users can book appointments, view medical records, and get prescriptions.",
        date: "October 2024 - Present",
        image: medConnectImage,
        codeLink: "https://github.com/T-Fathima",
        liveLink: "https://med-connect-live-link.com"
    },
    {
        title: "Portfolio Website",
        description: "A dynamic portfolio website built using React and Redux, showcasing skills, projects, and achievements.",
        date: "Nov 2023 - Dec 2023",
        image: project3Image,
        codeLink: "https://github.com/T-Fathima",
        liveLink: "https://project3-live-link.com"
    }
];

export const EXTRA_CURRICULARS = [
    {
        title: "GSSoC Top 100 Contributor",
        subtitle: "GirlScript Summer of Code- Exteded Edition 2024",
        date: "October 2024 - November 2024",
        image: one,
        description: "Achieved 77th rank among 3900+ active contributors and 60k+ participants, contributing to open-source projects.",
    },
    {
        title: "Secretary",
        subtitle: "Association of Computer Intellects (ASCI) Club",
        date: "November 2024 - Present",
        image: two,
        description: "Served as the secretary, leading initiatives and organizing technical and non-technical events.",
    },
    {
        title: "Participant",
        subtitle: "IEEE International Women In Leadership Summit",
        date: "September 2023",
        image: three,
        description: "Engaged in discussions and activities focused on empowering women in engineering and technology.",
    },
    {
        title: "Participant",
        subtitle: "Machine Learning Hackathon",
        date: "March 2024",
        image: four,
        description: "Participated in the Machine Learning Hackathon at ANITS, learnt skills in building ML models using no-code (Orange) and low-code (PyCaret) platforms. ",
    },
    {
        title: "Speaker & Event Organizer",
        subtitle: "IEEE WIE(Women In Engineering)",
        date: "March 2023",
        image: five,
        description: "Hosted the 'Invest in Career, Accelerate Progress' event, sponsored by IEEE Women in Engineering (WIE).",
    }
];

