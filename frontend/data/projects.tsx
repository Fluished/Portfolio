export type Project = {
    name: string;
    desc: string;
    fullDesc: string;
    img: string | null;
    tech: string[];
    github?: string;
};

export const projects: Project[] = [
    {
        name: "TiwalaChain",
        desc: "A blockchain-based freelance web application for secure contracts.",
        fullDesc:
            "TiwalaChain is a decentralized freelance web application that ensures contract integrity using blockchain technology.",
        img: "/assets/tiwalachain.png",
        tech: ["Next.js", "Tailwind CSS", "C#", "ASP.NET Core", "Python", "FastAPI", "PostgreSQL", "Solidity", "Hugging Face", "Blockchain"],
        github: "https://tiwala-chain.vercel.app/",
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
    {
        name: "Ark Mod Manager",
        desc: "A mod organization tool for Ark Survival Evolved dedicated servers.",
        fullDesc:
            "Ark Mod Manager is a tool designed to help the process of managing mods for Ark Survival Evolved dedicated servers, providing an interface for simple mod management.",
        img: "/assets/arkmodmanager.png",
        tech: ["React.js", "Tauri", "Rust"],
        github: "https://github.com/Fluished/ArkModManager",
    }
];