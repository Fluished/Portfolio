export default function Hero() {
    const socials = [
        {
            href: "https://github.com/Fluished",
            label: "GitHub",
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.02 3.24 9.27 7.73 10.77.56.1.77-.24.77-.54v-1.89c-3.14.68-3.8-1.52-3.8-1.52-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.51-.29-5.15-1.26-5.15-5.61 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.01 0 0 .96-.31 3.14 1.16a10.8 10.8 0 0 1 2.86-.38c.97 0 1.94.13 2.86.38 2.18-1.47 3.14-1.16 3.14-1.16.62 1.56.23 2.72.11 3.01.73.79 1.17 1.8 1.17 3.04 0 4.36-2.65 5.31-5.17 5.59.41.35.78 1.05.78 2.12v3.14c0 .3.21.65.78.54a10.99 10.99 0 0 0 7.72-10.77C23.25 5.48 18.27.5 12 .5z" />
                </svg>
            ),
        },
        {
            href: "https://www.linkedin.com/in/miguel-joaquin-gutierrez-861743378/",
            label: "LinkedIn",
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V7H0v17zM8 7h4.8v2.3h.07c.67-1.27 2.3-2.6 4.73-2.6C22.2 6.7 24 9.1 24 13v11h-5v-9.5c0-2.3-.82-3.9-2.88-3.9-1.57 0-2.5 1.05-2.9 2.07-.15.37-.18.88-.18 1.4V24H8V7z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="about" className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-36 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_60%)]">
            <p className="text-[var(--accent)] uppercase tracking-[0.3em] mb-4 text-sm font-medium overflow-hidden whitespace-nowrap border-r-2 border-[var(--accent)] w-fit animate-typing">
                Tech Enthusiast
            </p>

            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight max-w-5xl">
                Miguel Joaquin
            </h2>

            <div>
                <p className="mt-8 text-muted max-w-2xl text-lg leading-relaxed">
                    A passionate developer focused on building scalable and user-friendly
                    applications with clean architecture and modern UI principles.
                </p>
            </div>

            <div className="flex gap-5 mt-6">
                {socials.map((social) => (
                    <a
                        key={social.label}
                        href={social.href}
                        target={social.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-muted hover:text-[var(--accent)] hover:scale-110 transition-all duration-300"
                        aria-label={social.label}
                    >
                        {social.icon}
                    </a>
                ))}
            </div>

            <div className="mt-10 flex gap-4">
                <a href="#projects" className="bg-[var(--accent)] hover:opacity-90 text-background px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-accent/20">
                    View Projects
                </a>

                <a href="#contact" className="border border-card bg-secondary hover:border-[var(--accent)] hover:text-[var(--accent)] px-6 py-3 rounded-xl font-medium transition-all duration-300">
                    Contact Me
                </a>
            </div>
        </section>
    );
}
