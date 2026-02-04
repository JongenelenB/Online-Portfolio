import { motion } from "framer-motion";

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

export default function LogoCarousel({folder,title,direction = "Left",}: LogoCarouselProps) {

  // Filter de logos op basis van folder
  const logos = Object.entries(allLogos)
    .filter(([path]) => path.includes(`/logos/${folder}/`))
    .map(([, url]) => url);

  // Animatie X afhankelijk van de richting
  const animationX =
    direction === "Left" ? ["0%", "-50%"] : ["-50%", "0%"];

  return (
    <div className="relative max-w-[80%] mx-auto my-8 p-6 overflow-hidden">
      <h2 className="mb-6 text-3xl font-bold">{title}</h2>

      {/* Transparante fade overlays */}
<div className="absolute top-0 left-0 h-full w-24 pointer-events-none bg-gradient-to-r from-white/80 to-transparent z-10" />
<div className="absolute top-0 right-0 h-full w-24 pointer-events-none bg-gradient-to-l from-white/80 to-transparent z-10" />

      <motion.div
        className="flex gap-16 w-max"
        animate={{ x: animationX }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo as string}
            alt="skill logo"
            className="w-16 h-16 object-contain flex-shrink-0"
          />
        ))}
      </motion.div>
    </div>
  );
}
