import { motion } from "framer-motion";

interface ProjectCardProps {
    title: string;
    status: "Planned" | "In Progress" | "Completed" | "Not Defined";
    projectInfo: string;
    technologies: string[];
    imageUrl?: string;
}

export default function ProjectCard({
    title,
    status,
    projectInfo,
    technologies,
    imageUrl,
}: ProjectCardProps) {
    return (
        <motion.div
            className="max-w-md w-full mx-auto rounded-xl shadow-md overflow-hidden border-l-4 border-orange-500 bg-white p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            {/* Image */}
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-48 object-cover rounded-lg"
                />
            )}

            {/* Content */}
            <div className="p-8">
                {/* Title + Status */}
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold">{title}</h3>

                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-orange-100 text-orange-600">
                        {status}
                    </span>
                </div>

                {/* Project info */}
                <p className="text-gray-600 leading-relaxed mb-6">
                    {projectInfo}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
