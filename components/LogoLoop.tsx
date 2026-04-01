"use client";

import React from "react";
import { motion } from "framer-motion";

type LogoItem = {
    node?: React.ReactNode;
    src?: string;
    alt?: string;
    title?: string;
    href?: string;
};

interface LogoLoopProps {
    logos: LogoItem[];
    speed?: number; // duration in seconds
    direction?: "left" | "right";
    gap?: number; // gap between items
    logoHeight?: number;
}

export default function LogoLoop({
    logos,
    speed = 30,
    direction = "left",
    gap = 60,
    logoHeight = 60,
}: LogoLoopProps) {
    // Duplicate the logos array so we can loop seamlessly
    const loopingLogos = [...logos, ...logos, ...logos, ...logos];

    return (
        <div className="relative w-full overflow-hidden flex" style={{ height: logoHeight }}>
            {/* Fade Out Gradients at edges (optional but recommended for a premium look) */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#112b1e] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#112b1e] to-transparent z-10 pointer-events-none" />

            <motion.div
                className="flex items-center whitespace-nowrap"
                style={{ gap: `${gap}px` }}
                animate={{
                    x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
                }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: speed,
                }}
            >
                {loopingLogos.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center text-white/70 hover:text-white transition-colors duration-300"
                        style={{ height: logoHeight }}
                        title={item.title}
                    >
                        {item.href ? (
                            <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-2">
                                <span className="text-4xl sm:text-5xl">{item.node}</span>
                            </a>
                        ) : (
                            <div className="flex items-center justify-center p-2">
                                <span className="text-4xl sm:text-5xl">{item.node}</span>
                            </div>
                        )}
                        {/* {item.title && <span className="text-xs mt-2 font-medium tracking-wide opacity-50">{item.title}</span>} */}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
