export default function Header() {
    return (
        <header>
            <div className="fixed z-50 top-0 left-0 w-full backdrop-blur-md bg-background/70">
                <nav className="flex items-center justify-between px-8 py-6">
                    <h1 className="text-2xl font-bold tracking-wide">
                        Miguel<span className="text-accent">.</span>
                    </h1>

                    <div className="flex gap-6 text-sm text-muted">
                        <a href="#about" className="hover:text-accent transition-colors duration-300">
                            About
                        </a>

                        <a href="#projects" className="hover:text-accent transition-colors duration-300">
                            Projects
                        </a>

                        <a href="#contact" className="hover:text-accent transition-colors duration-300">
                            Contact
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}