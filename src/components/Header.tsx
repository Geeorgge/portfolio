"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect border-b" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold gradient-text">
          &lt;Dev&gt;
        </Link>

        <ul className="flex gap-8 text-sm md:text-base">
          <li>
            <Link href="#about" className="hover:text-indigo-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-indigo-400 transition">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-indigo-400 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#experience" className="hover:text-indigo-400 transition">
              Experience
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-indigo-400 transition">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
