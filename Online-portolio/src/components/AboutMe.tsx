import { motion } from "framer-motion";

export default function AboutMe() {
  const silhouette = "images/silhoutte.png";

  return (
    <section className="w-full min-h-screen bg-[#f9fafb] relative flex items-center justify-center">
      {/* Achtergrondafbeelding */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${silhouette})`,
          backgroundSize: "30%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          opacity: 0.2,
        }}
      ></div>

      {/* Inhoud */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left relative z-10 px-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-orange-500">me</span>
          </h2>

          <div className="w-20 h-1 bg-orange-500 rounded-full mb-8"></div>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              I’m a junior Frontend Developer with a strong focus on building
              clean, reusable, and user-friendly interfaces. While I currently
              specialize in frontend development, my long-term goal is to grow
              into a full-stack role and broaden my technical skill set over
              time.
            </p>
            <p>
              I believe that good software starts with clarity. That’s why I
              focus on writing structured, maintainable code and creating
              straightforward UI/UX experiences that feel intuitive and
              accessible for everyone.
            </p>
            <p>
              Before transitioning fully into development, I worked in the
              cybersecurity field after completing my degree in Electronics &
              ICT at AP.
            </p>
            <p>
              Outside of coding, you’ll usually find me on the badminton court
              or unwinding with a game.
            </p>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl shadow-lg p-16 border-l-4 border-orange-500 max-w-xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-4">What I can offer</h3>
          <ul className="space-y-4 text-gray-700">
            <li>✔ Clean & scalable code</li>
            <li>✔ User-first UI/UX</li>
            <li>✔ Accessibility</li>
            <li>✔ Growth toward full-stack</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
