"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import ButtonWithLogo from "./button-with-logo";
import ContactForm from "./ContactForm"; // Import the ContactForm pop-up

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isContactOpen, setIsContactOpen] = useState(false); // Contact form pop-up state

  return (
    <header className="top-0 left-0 w-full z-50">
      <div className="container mx-auto px-3 xs:px-6 py-5 mt-2 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logos.png"
            alt="Logo"
            width={250}
            height={200}
            className="cursor-pointer sm:w-80 xs:h-200"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 text-xl font-sans font-semibold items-center">
          {["Home", "About Us", "Services", "Projects"].map((item) => (
            <Link
              key={item}
              href={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(" ", "")}`
              }
              className="text-gray-800 hover:text-blue-500 transition"
            >
              {item}
            </Link>
          ))}
          {/* Contact Button triggers pop-up */}
          <button>
            <ButtonWithLogo title="Contact" Icon={ArrowRight} theme="black" onClick={() => setIsContactOpen(true)} />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden rounded-xl bg-black/20 overflow-hidden transition-all duration-500 ease-in-out 
          ${isOpen ? "max-h-screen opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"}`}
      >
        <nav>
          {["Home", "About Us", "Services", "Projects"].map((item) => (
            <Link
              key={item}
              href={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(" ", "")}`
              }
              className="block px-6 py-4 text-black hover:bg-gray-100 transition font-semibold"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
          {/* Mobile Contact Button */}
          <button
            onClick={() => {
              setIsContactOpen(true);
              setIsOpen(false);
            }}
            className="block px-6 py-4 text-black hover:bg-gray-100 transition font-semibold w-full text-left"
          >
            Contact
          </button>
        </nav>
      </div>

      {/* Contact Form Pop-up */}
      {isContactOpen && <ContactForm onClose={() => setIsContactOpen(false)} />}
    </header>
  );
}
