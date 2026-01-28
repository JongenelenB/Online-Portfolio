import { motion } from "framer-motion";

export default function AboutMe() {

    const silhouette = "./src/assets/images/silhoutte.png";

    return (
        <section className="w-full min-h-screen bg-[#f9fafb] flex items-center justify-center px-10 my-20">
            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left">

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
                            I’m a junior Frontend Developer with a strong focus on building clean,
                            reusable, and user-friendly interfaces. While I currently specialize in
                            frontend development, my long-term goal is to grow into a full-stack role
                            and broaden my technical skill set over time.
                        </p>

                        <p>
                            I believe that good software starts with clarity. That’s why I focus on
                            writing structured, maintainable code and creating straightforward UI/UX
                            experiences that feel intuitive and accessible for everyone. My goal is
                            always to make applications easy to use, without unnecessary complexity.
                        </p>

                        <p>
                            Before transitioning fully into development, I worked in the cybersecurity
                            field after completing my degree in Electronics & ICT at AP. This background
                            helped me develop a strong technical foundation, attention to detail, and an
                            understanding of how important reliability and security are in modern
                            applications.
                        </p>

                        <p>
                            Outside of coding, you’ll usually find me on the badminton court or
                            unwinding with a game. Staying active helps me keep a clear mind and brings
                            fresh energy and focus back into my work.
                        </p>
                    </div>
                </motion.div>

                {/* Right */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ backgroundImage: `url(${silhouette})` }}
                    className="rounded-2xl shadow-lg p-10 border-l-4 border-orange-500"
                >
                    <h3 className="text-2xl font-semibold mb-4">What I focus on</h3>
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
