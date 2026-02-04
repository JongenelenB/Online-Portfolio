import ProjectCard from "./ProjectCard";

export default function Projects() {
  const cases = [
    {
      title: "Bugger",
      status: "Completed",
      projectInfo:
        "Dashboard voor het beheren van gebruikers, rollen en rechten met focus op security en schaalbaarheid.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      imageUrl: "./src/assets/images/Bugger.png",
    },

    {
      title: "NR Power Solutions",
      status: "In Progress",
      projectInfo:
        "A simple, professional website that informs potential customers about services, provides contact options, and builds trust through a portfolio of projects.",
      technologies: ["React", "Motion", "Tailwind CSS", "Firebase"],
      imageUrl: "./src/assets/images/Power solutions.png",
    },

    {
      title: "Court One E-shop",
      status: "Planned",
      projectInfo:
        "A modern, user-friendly e-commerce website that lets customers browse and purchase products. The site also shows which shopping behaviour, helping customers discover trending items and assisting the store in managing inventory.",
      technologies: [
        "Angular",
        "typescript",
        "Bootstrap",
        "Firebase",
        "PostgreSQL",
      ],
      imageUrl: "./src/assets/images/Court One.png",
    },
  ];

  return (
    <div>
      <h2 className="text-4xl font-bold mb-4 text-center m-5 p-5">
        Projects{" "}
        <span className=" text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-400">
          Portfolio
        </span>
      </h2>

      <div className="flex flex-wrap gap-6 m-5">
        {cases.map((c) => (
          <ProjectCard
            key={c.title}
            title={c.title}
            projectInfo={c.projectInfo}
            technologies={c.technologies}
            imageUrl={c.imageUrl}
            status={
              c.status === "Completed"
                ? "Completed"
                : c.status === "In Progress"
                  ? "In Progress"
                  : c.status === "Planned"
                    ? "Planned"
                    : "Not Defined" // fallback
            }
          />
        ))}
      </div>
    </div>
  );
}
