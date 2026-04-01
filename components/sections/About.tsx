"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import ShapeBlur from "../ShapeBlur";
import BorderGlow from "../BorderGlow";

const Lanyard = dynamic(() => import("../Lanyard"), { ssr: false });

export default function About() {
    return (
        <section
            id="about"
            className="flex flex-col lg:flex-row min-h-screen w-full bg-[#fcfdfc] overflow-hidden relative"
        >
            {/* Left - Lanyard */}
            <div
                className="w-full lg:w-[40%] h-[50vh] lg:h-screen relative shrink-0 pointer-events-auto cursor-grab active:cursor-grabbing"
            >
                <Lanyard position={[0, 0, 16]} fov={16} gravity={[0, -40, 0]} />
            </div>

            {/* Right - Content */}
            <div
                className="w-full lg:w-[60%] flex items-center justify-center px-4 sm:px-10 lg:px-14 py-12 lg:py-12 z-10"
            >
                {/* Premium Card with Animated Gradient Border */}
                <div
                    className="about-card w-full max-w-[640px] p-6 sm:p-10 lg:p-12"
                >
                    {/* ShapeBlur Background - subtle texture */}
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
                        <ShapeBlur
                            variation={0}
                            pixelRatioProp={typeof window !== 'undefined' ? window.devicePixelRatio : 1}
                            shapeSize={1.6}
                            roundness={0.5}
                            borderSize={0.04}
                            circleSize={0.35}
                            circleEdge={1.2}
                        />
                        {/* Strong frosted overlay for readability */}
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(252, 253, 252, 0.72)', backdropFilter: 'blur(10px)' }} />
                    </div>

                    {/* Foreground Text */}
                    <div style={{ position: 'relative', zIndex: 10 }}>
                        <motion.p
                            className="text-sm font-semibold text-[#3c8d5d] uppercase tracking-widest mb-4 font-sans"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            About Me
                        </motion.p>

                        <motion.h2
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#112b1e] leading-tight mb-6 font-heading"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            Jr. Full-Stack Developer &<br />IT Explorer.
                        </motion.h2>

                        <motion.div
                            className="text-[#225a3b] text-sm sm:text-base leading-relaxed mb-8 font-sans space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <p>
                                Aspiring software developer with hands-on experience in full-stack web development using <strong>Laravel</strong> and <strong>Vue.js</strong>. My workflow integrates API development, Git, CI/CD pipelines, and containerized staging deployments.
                            </p>
                            <p>
                                Served as a <strong>Technical Lead Intern</strong> on a real-world project. Also experienced as an IT Assistant Trainer in web development and cybersecurity fundamentals.
                            </p>
                        </motion.div>

                        <motion.div
                            className="pt-6 border-t border-[#3c8d5d]/15"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg font-bold text-[#112b1e] font-heading mb-0.5">Universiti Teknologi MARA (UiTM)</h3>
                            <p className="text-[#3c8d5d] font-semibold text-xs uppercase tracking-widest mb-4">
                                B.IS (Hons.) Information Systems Engineering
                            </p>

                            <ul className="space-y-2 text-[#225a3b] font-sans text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#3c8d5d] mt-1.5 flex-shrink-0" />
                                    <span>CGPA: <strong>3.81</strong></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#3c8d5d] mt-1.5 flex-shrink-0" />
                                    <span><strong>Dean's List</strong> — 7/7 consecutive semesters</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#3c8d5d] mt-1.5 flex-shrink-0" />
                                    <span><strong>Vice-Chancellor Award (ANC)</strong> recipient</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}