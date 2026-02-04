import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface LogoCarouselProps {
  folder: string;
  title: string;
  direction?: "Left" | "Right";
}

const allLogos = import.meta.glob(
  "/src/assets/logos/**/*.{png,svg,jpg}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

export default function LogoCarousel({ folder, title, direction = "Left" }: LogoCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  const logos = Object.entries(allLogos)
    .filter(([path]) => path.includes(`/logos/${folder}/`))
    .map(([, url]) => url as string);

  useEffect(() => {
    const calculateWidth = () => {
      if (containerRef.current) {
        // We delen door 2, en door de pr-16 is dit nu exact de lengte van 1 set + 1 gap
        setWidth(containerRef.current.scrollWidth / 2);
      }
    };

    calculateWidth();

    // Voeg een resize listener toe voor als het schermformaat wijzigt
    window.addEventListener("resize", calculateWidth);
    return () => window.removeEventListener("resize", calculateWidth);
  }, [logos]);

  return (
    <div className="relative max-w-[80%] mx-auto my-8 p-6 overflow-hidden">
      <h2 className="mb-6 text-3xl font-bold">{title}</h2>

      <div className="absolute top-0 left-0 h-full w-24 pointer-events-none bg-gradient-to-r from-white/80 to-transparent z-10" />
      <div className="absolute top-0 right-0 h-full w-24 pointer-events-none bg-gradient-to-l from-white/80 to-transparent z-10" />

      <motion.div
        ref={containerRef}
        // BELANGRIJK: pr-16 toegevoegd om de gap aan het einde te simuleren
        className="flex gap-16 w-max pr-16"
        animate={{ 
          x: direction === "Left" ? [0, -width] : [-width, 0] 
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="skill logo"
            className="w-16 h-16 object-contain flex-shrink-0"
          />
        ))}
      </motion.div>
    </div>
  );
}