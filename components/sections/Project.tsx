"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        id: "teknikal-lead",
        role: "Technical Lead Intern",
        company: "AMTIS Solution Sdn. Bhd.",
        project: "Sistem Pengurusan Bantuan (YMBI)",
        duration: "Oct 2025 – Mar 2026",
        location: "Ayer Keroh, Melaka",
        description: [
            "Appointed as Technical Lead Intern for the Sistem Pengurusan Bantuan project with Yayasan Menteri Besar Incorporated (YMBI).",
            "Led technical planning by defining the technology stack and conducting pre-project briefings for the development team.",
            "Designed initial system mockups and forked them into the actual project repository.",
            "Collaborated with CTO and Head of Department to define system architecture and technical workflows.",
            "Coordinated with system analysts to break down requirements and assign modules to developers.",
            "Worked closely with database administrators to design and optimise database structure.",
            "Managed staging deployment and ensured smooth transition from development to testing environment."
        ],
        image: "/projects/ymbi.png",
        tags: ["System Architecture", "Leadership", "Database Design", "Deployment"]
    },
    {
        id: "php-dev",
        role: "PHP Developer Intern",
        company: "AMTIS Solution Sdn. Bhd.",
        project: "Sistem e-Tapem (Tabung Pendidikan Amanah Melaka)",
        duration: "May 2025 – Aug 2025",
        description: [
            "Maintained and enhanced a legacy system, Sistem e-Tapem.",
            "Implemented new features based on client requirements to improve system functionality.",
            "Collaborated with senior developers through code reviews to ensure code quality and best practices."
        ],
        image: "/projects/eTapem.png",
        tags: ["PHP", "Legacy System", "Code Review", "Feature Development"]
    },
    {
        id: "qa-tester",
        role: "Software Tester Intern",
        company: "AMTIS Solution Sdn. Bhd.",
        project: "Experience Jerai Hill Mobile App",
        duration: "Mar 2025 – May 2025",
        description: [
            "Performed testing for the Experience Jerai Hill mobile application to identify defects and ensure system quality.",
            "Collaborated with mobile developers to report bugs and track issue resolution.",
            "Prepared user manual documentation to support Technology Transfer (ToT) and end-user adoption."
        ],
        image: "/projects/2.png",
        tags: ["QA Testing", "Mobile App", "Bug Tracking", "Documentation"]
    },
    {
        id: "trainer-wp",
        role: "Assistant Trainer",
        company: "MOTAC / Jabatan Kesihatan Perlis / JAS",
        project: "Joomla CMS & WordPress Security",
        duration: "May 2025 – Sept 2025",
        description: [
            "Assisted in delivering Joomla CMS web development training for MOTAC and Jabatan Kesihatan Perlis.",
            "Prepared training materials and modules, and supported participants during hands-on sessions.",
            "Assisted in conducting WordPress Security training for Jabatan Alam Sekitar Malaysia (JAS).",
            "Gained knowledge in web security concepts including SEO poisoning, XSS attacks, and SQL injection.",
            "Applied WordPress security hardening techniques using reliable plugins and best practices."
        ],
        image: "/projects/1.png",
        tags: ["Joomla", "WordPress Security", "Training", "Cybersecurity"]
    },
    {
        id: "trainer-python",
        role: "Assistant Trainer",
        company: "Faculty of Engineering, UTEM",
        project: "Python Object-Oriented Programming",
        duration: "Sept 2025",
        description: [
            "Assisted in delivering Python OOP training sessions in collaboration with faculty lecturers.",
            "Prepared training modules and practical case studies to facilitate hands-on learning.",
            "Applied the four pillars of Object-Oriented Programming (Polymorphism, Abstraction, Inheritance, and Encapsulation) in practical exercises."
        ],
        image: "/projects/python.jpg",
        tags: ["Python", "OOP", "Mentoring", "Curriculum Design"]
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 sm:py-32 bg-[#f4f9f5] relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#fcfdfc] to-transparent pointer-events-none z-0" />
            <div className="absolute -top-[300px] -right-[200px] w-[800px] h-[800px] rounded-full bg-[#e8f5ec] blur-[120px] pointer-events-none opacity-60 z-0" />
            <div className="absolute -bottom-[200px] -left-[200px] w-[600px] h-[600px] rounded-full bg-[#dcf0e2] blur-[100px] pointer-events-none opacity-50 z-0" />

            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-20 sm:mb-32">
                    <motion.p
                        className="text-sm font-bold text-[#3c8d5d] uppercase tracking-[0.2em] mb-4 font-sans"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        Experience & Projects
                    </motion.p>
                    <motion.h2
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#112b1e] leading-tight font-heading"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        Work that made an impact.
                    </motion.h2>
                </div>

                {/* Projects Timeline / Layout */}
                <div className="flex flex-col gap-24 sm:gap-32 lg:gap-40">
                    {projects.map((project, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={project.id}
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-16`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                                viewport={{ once: true, margin: "-150px" }}
                            >
                                {/* Image Half */}
                                <div className="w-full lg:w-1/2 relative group">
                                    <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-[#e8f5ec] border border-[#d2e8db] shadow-[0_20px_60px_-15px_rgba(25,59,41,0.15)] group-hover:shadow-[0_20px_60px_-10px_rgba(25,59,41,0.25)] transition-shadow duration-500">
                                        {/* You can replace this Image with local images from /public/projects/ */}
                                        <Image
                                            src={project.image}
                                            alt={project.project}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#112b1e]/60 via-transparent to-transparent opacity-80" />

                                        {/* Floating Badge on Image */}
                                        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                            <span className="backdrop-blur-md bg-white/20 text-white border border-white/30 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider font-sans shadow-lg uppercase">
                                                {project.duration}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Text Content Half */}
                                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                    <div className="inline-flex items-center gap-3 mb-4">
                                        <span className="w-8 h-[2px] bg-[#3c8d5d] rounded-full" />
                                        <span className="text-[#3c8d5d] font-bold text-xs uppercase tracking-widest">
                                            {project.company}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl sm:text-4xl font-bold text-[#112b1e] font-heading mb-3 leading-tight">
                                        {project.project}
                                    </h3>

                                    <h4 className="text-xl font-semibold text-[#225a3b] font-sans mb-6">
                                        {project.role}
                                    </h4>

                                    <ul className="space-y-3 mb-8">
                                        {project.description.map((desc, i) => (
                                            <li key={i} className="flex gap-4">
                                                <div className="mt-1.5 flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[#e8f5ec] border border-[#cce8d5]">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#3c8d5d]" />
                                                </div>
                                                <p className="text-[#2d6b47] text-[15px] sm:text-base leading-relaxed font-sans">
                                                    {desc}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-4 py-1.5 rounded-full bg-white border border-[#d2e8db] text-[#3c8d5d] text-xs font-semibold tracking-wide shadow-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}