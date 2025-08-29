import { useEffect, useState } from "react";

type Project = {
  id: number;
  name: string;
  description: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/projects`
    );
    const data = await res.json();
    setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        {projects.map((p) => (
          <li key={p.id}>
            <strong>{p.name}</strong> - {p.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
