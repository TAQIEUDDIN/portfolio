"use client";

import { motion } from "framer-motion";
import LogoLoop from "../LogoLoop";
import Image from "next/image";
import {
    SiVuedotjs,
    SiTypescript,
    SiTailwindcss,
    SiBootstrap,
    SiLaravel,
    SiSpringboot,
    SiMysql,
    SiPostgresql,
    SiGit,
    SiDocker,
    SiUbuntu,
    SiJavascript,
    SiHtml5,
    SiN8N,
    SiCplusplus,
    SiCss
} from "react-icons/si";

const techLogos = [
    { node: <SiVuedotjs />, title: "Vue.js" },
    { node: <SiTypescript />, title: "TypeScript" },
    { node: <SiTailwindcss />, title: "Tailwind CSS" },
    { node: <SiBootstrap />, title: "Bootstrap 5" },
    { node: <SiLaravel />, title: "Laravel" },
    { node: <SiSpringboot />, title: "Spring Boot" },
    { node: <SiMysql />, title: "MySQL" },
    { node: <SiPostgresql />, title: "PostgreSQL" },
    { node: <SiGit />, title: "Git" },
    { node: <SiDocker />, title: "Docker" },
    { node: <SiUbuntu />, title: "Ubuntu" },
    { node: <SiJavascript />, title: "JavaScript" },
    { node: <SiHtml5 />, title: "HTML5" },
    { node: <SiN8N />, title: "n8n" },
    { node: <SiCplusplus />, title: "C++" },
    { node: <SiCss />, title: "CSS3" },
];

const achievements = [
    {
        title: "Certified Professional Requirements Engineering",
        issuer: "Malaysian Software Testing Board",
        date: "Oct 2024",
        image: "/projects/cpre.png",
        colSpan: "col-span-1 md:col-span-2",
        rowSpan: "row-span-2"
    },
    {
        title: "Assistant Program Director",
        issuer: "Cyber Security Awareness, Kolej Yayasan Saad",
        date: "Dec 2024",
        image: "/projects/kys.jpg",
        colSpan: "col-span-1",
        rowSpan: "row-span-1"
    },
    {
        title: "Finalist - RAKSASA CTF",
        issuer: "Southern Malaysian Universities 2023",
        date: "Oct 2023",
        image: "/projects/ctf.jpg",
        colSpan: "col-span-1",
        rowSpan: "row-span-1"
    }
];

export default function Skills() {
    return (
        <section id="skills" className="relative w-full min-h-screen py-24 sm:py-32 overflow-hidden" style={{ backgroundColor: "#112b1e" }}>
            
            {/* Background Glows matching Hero */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-[rgba(34,90,59,0.15)] blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[rgba(60,141,93,0.1)] blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10 flex flex-col items-center">
                
                {/* Header */}
                <div className="text-center max-w-3xl mb-16">
                    <motion.p
                        className="text-sm font-bold text-[#8ec7a1] uppercase tracking-[0.2em] mb-4 font-sans"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Arsenal & Accolades
                    </motion.p>
                    <motion.h2
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-heading"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        Tools I Command.
                    </motion.h2>
                </div>

                {/* Logo Loop - Tech Stack */}
                <motion.div 
                    className="w-full mb-32"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <LogoLoop
                        logos={techLogos}
                        speed={40}      // Slightly slower for elegance
                        direction="left"
                        logoHeight={80}
                        gap={80}
                    />
                    {/* Reverse Loop for variety */}
                    <div className="mt-8">
                        <LogoLoop
                            logos={techLogos.slice().reverse()}
                            speed={45}
                            direction="right"
                            logoHeight={80}
                            gap={80}
                        />
                    </div>
                </motion.div>


                {/* Certifications & Achievements "Gallery" */}
                <div className="w-full">
                    <motion.div
                        className="inline-flex items-center gap-3 mb-10"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <span className="w-12 h-[2px] bg-[#3c8d5d] rounded-full" />
                        <h3 className="text-2xl font-bold text-white font-heading tracking-wide uppercase">
                            Certifications & Achievements
                        </h3>
                    </motion.div>

                    {/* Bento Grid Gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6">
                        {achievements.map((achievement, i) => (
                            <motion.div
                                key={i}
                                className={`relative group rounded-3xl overflow-hidden border border-[#3c8d5d]/20 bg-[#1d4831]/40 backdrop-blur-md ${achievement.colSpan} ${achievement.rowSpan}`}
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                                viewport={{ once: true, margin: "-50px" }}
                            >
                                <Image 
                                    src={achievement.image} 
                                    alt={achievement.title} 
                                    fill 
                                    className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 ease-in-out"
                                />
                                
                                <div className="absolute inset-0 bg-gradient-to-t from-[#112b1e] via-[#112b1e]/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                        <div className="inline-block px-3 py-1 mb-3 rounded-full bg-[#fcfdfc]/10 backdrop-blur-xl border border-white/10 text-[#8ec7a1] text-xs font-bold tracking-wider uppercase shadow-xl">
                                            {achievement.date}
                                        </div>
                                        <h4 className="text-2xl md:text-3xl font-bold text-white font-heading leading-snug mb-2">
                                            {achievement.title}
                                        </h4>
                                        <p className="text-[#8ec7a1] font-sans text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            {achievement.issuer}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
