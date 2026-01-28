"use client";
import { motion } from "framer-motion";

// Aantal dots
const DOT_COUNT = 50;

// Willekeurige startposities
const randomPos = () => ({
    x: Math.random() * 100 + "vw",
    y: Math.random() * 100 + "vh",
    size: Math.random() * 40 + 20, // grootte variatie
});

export default function AnimateBackground() {
    const dots = Array.from({ length: DOT_COUNT }, () => randomPos());

    return (
        <div
            style={{
                position: "absolute",
                inset: 0,
                background: "#fff", // witte achtergrond
                overflow: "hidden",
                zIndex: -1,
            }}
        >
            {dots.map((dot, i) => (
                <motion.div
                    key={i}
                    initial={{ x: dot.x, y: dot.y, opacity: 0 }}
                    animate={{
                        x: [`${dot.x}`, `${Math.random() * 100}vw`, `${dot.x}`],
                        y: [`${dot.y}`, `${Math.random() * 100}vh`, `${dot.y}`],
                        opacity: [0.7, 0.3, 0.7],
                    }}
                    transition={{
                        duration: 15 + Math.random() * 10, // traag en rustig
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    style={{
                        position: "absolute",
                        width: dot.size,
                        height: dot.size,
                        borderRadius: "50%",
                        background: `radial-gradient(circle at 30% 30%, #ff5e3a, #ff9a4d)`,
                        filter: "blur(4px)",
                    }}
                />
            ))}
        </div>
    );
}
