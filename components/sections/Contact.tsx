"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="relative w-full py-24 sm:py-32 overflow-hidden" style={{ backgroundColor: "#112b1e" }}>

            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[rgba(34,90,59,0.15)] blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[rgba(60,141,93,0.1)] blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
                    <motion.p
                        className="text-sm font-bold text-[#8ec7a1] uppercase tracking-[0.2em] mb-4 font-sans"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Get In Touch
                    </motion.p>
                    <motion.h2
                        className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight font-heading"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        Let&apos;s Work Together.
                    </motion.h2>
                </div>

                <motion.div
                    className="max-w-4xl mx-auto flex flex-col items-center bg-[#1d4831]/40 backdrop-blur-xl border border-[#3c8d5d]/20 p-8 sm:p-14 lg:p-20 rounded-[2.5rem] shadow-2xl mt-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-heading text-center">
                        I&apos;m currently seeking new opportunities.
                    </h3>
                    <p className="text-[#8ec7a1] text-lg sm:text-xl mb-16 font-sans leading-relaxed text-center max-w-2xl">
                        Whether you have an open position, an exciting project, or just want to say hi, my inbox is always open. I&apos;ll get back to you as soon as I can!
                    </p>

                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 mb-16">

                        <a href="mailto:mtaqieuddin03@gmail.com" className="group flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform duration-500">
                            <div className="w-16 h-16 rounded-2xl bg-[#112b1e]/60 border border-[#3c8d5d]/30 flex items-center justify-center text-[#8ec7a1] group-hover:bg-[#3c8d5d] group-hover:text-white transition-colors duration-300 shadow-xl">
                                <Mail className="w-7 h-7" />
                            </div>
                            <div>
                                <p className="text-sm text-[#8ec7a1] uppercase tracking-wider mb-2 font-semibold">Email</p>
                                <p className="text-white font-medium text-base sm:text-lg">
                                    mtaqieuddin03@gmail.com
                                </p>
                            </div>
                        </a>

                        <div className="group flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform duration-500 cursor-default">
                            <div className="w-16 h-16 rounded-2xl bg-[#112b1e]/60 border border-[#3c8d5d]/30 flex items-center justify-center text-[#8ec7a1] group-hover:bg-[#3c8d5d] group-hover:text-white transition-colors duration-300 shadow-xl">
                                <Phone className="w-7 h-7" />
                            </div>
                            <div>
                                <p className="text-sm text-[#8ec7a1] uppercase tracking-wider mb-2 font-semibold">Phone</p>
                                <p className="text-white font-medium text-base sm:text-lg">
                                    +60 11-2121 9683
                                </p>
                            </div>
                        </div>

                        <div className="group flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform duration-500 cursor-default">
                            <div className="w-16 h-16 rounded-2xl bg-[#112b1e]/60 border border-[#3c8d5d]/30 flex items-center justify-center text-[#8ec7a1] group-hover:bg-[#3c8d5d] group-hover:text-white transition-colors duration-300 shadow-xl">
                                <MapPin className="w-7 h-7" />
                            </div>
                            <div>
                                <p className="text-sm text-[#8ec7a1] uppercase tracking-wider mb-2 font-semibold">Location</p>
                                <p className="text-white font-medium text-base sm:text-lg">
                                    Selangor, Malaysia
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Minimalist Divider */}
                    <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#3c8d5d]/40 to-transparent mb-12" />

                    {/* Social Handles */}
                    <div className="flex gap-6">
                        <a href="https://github.com/TAQIEUDDIN" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#3c8d5d] hover:border-[#3c8d5d] transition-all duration-300 hover:scale-110 shadow-lg">
                            <FaGithub className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/muhammad-taqieuddin03" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-[#0A66C2]/10 border border-[#0A66C2]/30 flex items-center justify-center text-[#e8f5ec] hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300 hover:scale-110 shadow-lg">
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                    </div>
                </motion.div>

            </div>

            {/* Simple Footer built-in to the contact section */}
            <div className="absolute border-t border-[#3c8d5d]/20 bottom-0 left-0 right-0 py-6 text-center z-10 w-full">
                <p className="text-[#8ec7a1]/60 text-sm font-sans flex items-center justify-center gap-2">
                    © {new Date().getFullYear()} Taqieuddin Zailan. Built with React & Next.js.
                </p>
            </div>
        </section>
    );
}