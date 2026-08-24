"use client";

import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);

    return (
        <header>
            <div className="fixed z-50 top-0 left-0 w-full backdrop-blur-md bg-background/70 border-b border-white/5">
                <nav className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto">
                    <h1 className="text-2xl font-bold tracking-wide">
                        Miguel<span className="text-[var(--accent)]">.</span>
                    </h1>

                    {/* DESKTOP MENU */}
                    <div className="hidden md:flex gap-6 text-sm text-muted">
                        <a href="#about" className="hover:text-[var(--accent)] transition-colors duration-300">
                            About
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[var(--accent)] transition-colors duration-300"
                        >
                            Resume
                        </a>
                        <a href="#projects" className="hover:text-[var(--accent)] transition-colors duration-300">
                            Projects
                        </a>
                        <a href="#contact" className="hover:text-[var(--accent)] transition-colors duration-300">
                            Contact
                        </a>
                    </div>

                    {/* BURGER BUTTON (Mobile only) */}
                    <button
                        onClick={toggleMenu}
                        aria-label="Toggle Navigation Menu"
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
                    >
                        <span
                            className={`h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        />
                        <span
                            className={`h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        />
                    </button>
                </nav>

                {/* MOBILE DROPDOWN MENU */}
                {isOpen && (
                    <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-white/10 px-8 py-6 flex flex-col gap-4 text-sm text-muted animate-in slide-in-from-top-2 duration-200">
                        <a
                            href="#about"
                            onClick={closeMenu}
                            className="hover:text-[var(--accent)] transition-colors duration-300 py-1"
                        >
                            About
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMenu}
                            className="hover:text-[var(--accent)] transition-colors duration-300 py-1"
                        >
                            Resume
                        </a>
                        <a
                            href="#projects"
                            onClick={closeMenu}
                            className="hover:text-[var(--accent)] transition-colors duration-300 py-1"
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            onClick={closeMenu}
                            className="hover:text-[var(--accent)] transition-colors duration-300 py-1"
                        >
                            Contact
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
}