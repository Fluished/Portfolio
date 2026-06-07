"use client";

import { useEffect, useState } from "react";

type Project = {
  name: string;
  desc: string;
  fullDesc: string;
  img: string | null;
  tech: string[];
  github?: string;
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
  }, [selectedProject]);

  const projects: Project[] = [
    {
      name: "TiwalaChain",
      desc: "A blockchain-based freelance web application for secure contracts.",
      fullDesc:
        "TiwalaChain is a decentralized freelance web application that ensures contract integrity using blockchain technology.",
      img: "/assets/tiwalachain.png",
      tech: ["Next.js", "Tailwind CSS", "C#", "ASP.NET Core", "PostgreSQL", "Solidity", "Hugging Face"],
      github: "https://github.com/rustumsk/Tiwala-Chain",
    },
    {
      name: "Shelflyx",
      desc: "A webtoon/manga web application for managing and discovering digital content.",
      fullDesc:
        "Shelflyx is a web application that allows users to manage and discover digital content such as webtoons and manga, providing a seamless reading experience.",
      img: "/assets/shelflyx.png",
      tech: ["C#", "ASP.NET Core", "SQL Server"],
      github: "https://github.com/Fluished/Shelflyx",
    },
    {
      name: "Nutriscan",
      desc: "A food nutrition scanner with AI-chatbot for health insights.",
      fullDesc:
        "Nutriscan analyzes food labels and provides instant nutritional breakdowns and get health suggestions from an AI chatbot.",
      img: null,
      tech: ["Flutter", "Firebase"],
      github: "https://github.com/Fluished/Nutriscan",
    },
  ];

  return (
    <div className="bg-background">
      <section id="projects" className="relative py-28 px-6">
        <div className="bg-[linear-gradient(to_top,#020817,#0f172a)] max-w-6xl mx-auto rounded-2xl p-5 md:p-10">
          <div className="mb-14 text-center">
            <p className="text-accent uppercase tracking-[0.35em] text-xs font-medium">
              Projects
            </p>

            <h3 className="text-4xl md:text-5xl font-bold mt-4">
              Things I’ve worked on.
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div key={index} onClick={() => setSelectedProject(project)} className="group cursor-pointer rounded-2xl overflow-hidden bg-card/80 border border-white/5 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* IMAGE */}
                <div className="h-44 bg-secondary flex items-center justify-center overflow-hidden">
                  {project.img ? (
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  ) : (
                    <span className="text-muted text-2xl tracking-widest">
                      ...
                    </span>
                  )}
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-accent transition">
                    {project.name}
                  </h4>

                  <p className="text-muted text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* MODAL */}
          {selectedProject && (
            <div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
              onClick={() => setSelectedProject(null)}
            >
              <div
                className="bg-card w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                {/* IMAGE */}
                <ProjectPreview project={selectedProject} />

                {/* CONTENT */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">
                    {selectedProject.github ? (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="hover:text-[var(--accent)] transition"
                      >
                        {selectedProject.name}
                      </a>
                    ) : (
                      selectedProject.name
                    )}
                  </h2>

                  <p className="text-muted mb-5 leading-relaxed">
                    {selectedProject.fullDesc}
                  </p>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-secondary border border-white/10 text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-full bg-accent text-black py-2.5 rounded-xl font-semibold hover:opacity-90 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className="h-56 bg-secondary flex items-center justify-center">
      {project.img ? (
        <img
          src={project.img}
          alt={project.name}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="text-muted text-3xl tracking-widest">
          ...
        </span>
      )}
    </div>
  );
}