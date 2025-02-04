"use client"; // For handling mobile menu state

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  return (
    <header className="top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logos.png" // Ensure this image is inside /public folder
            alt="Logo"
            width={300}
            height={200}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-xl font-sans font-semibold ">
          {["Home", "About Us", "Services", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
              className="text-gray-800 hover:text-blue-500 transition"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t">
          {["Home", "aboutus", "Services", "Projects", "contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
              className="block px-6 py-4 text-gray-800 hover:bg-gray-100 transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
