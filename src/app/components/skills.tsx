"use client";
import { useRef } from "react";
import NextButton from "./next-button";
import PrevButton from "./prev-button";
import SectionHeading from "./section-heading";
import { ArrowDown } from "lucide-react";
import SkillSectionComponent from "./skill-component";

export default function SkillSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: string) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth / 3.3; // Ensure 3 components per page
      scrollRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const skillsData = [
    {
      title: "HTML & CSS",
      description: "Building the world &apos;s best marketing. Your trusted partner for strategy, design, and dev.",
      logo: "./html-css-transparent.png",
    },
    {
      title: "JavaScript",
      description: "Expert in modern JavaScript and frameworks like React, Svelte, and NestJS.",
      logo: "./html-css-transparent.png",
    },
    {
      title: "TypeScript",
      description: "Strong proficiency in TypeScript for scalable and robust applications.",
      logo: "./html-css-transparent.png",
    },
    {
      title: "React & Next.js",
      description: "Building performant and SEO-friendly web applications with Next.js.",
      logo: "./html-css-transparent.png",
    },
    {
      title: "Node.js & NestJS",
      description: "Backend development with Node.js and NestJS, focusing on scalability.",
      logo: "./html-css-transparent.png",
    },
  ];

  return (
    <section id="why-choose-me" className="bg-black mt-16 mx-4 rounded-3xl py-[6rem] px-16">
      <SectionHeading title="Skills" Icon={ArrowDown} reqColor="white" />
      <div className="flex justify-between mt-5">
        <p className="font-semibold text-7xl font-sans leading-[5rem] tracking-[0.03em] text-white">
          My Extensive <br /> List of Skills
        </p>
        <div className="flex flex-col gap-7">
          <p className="tracking-[0.1em] text-[1.2rem] max-w-[500px] text-white">
            Building the world&apos;s best marketing. Your trusted partner for strategy, design, and dev.
          </p>
          <hr />
          <div className="flex gap-5 justify-end">
            <PrevButton onClick={() => handleScroll("prev")} buttonColor="white" />
            <NextButton onClick={() => handleScroll("next")} buttonColor="white" />
          </div>
        </div>
      </div>
      <div className="relative mt-10 overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth"
          style={{
            scrollBehavior: "smooth",
            width: "100%",
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE and Edge
          }}
        >
          {skillsData.map((skill, index) => (
            <div key={index} className="flex-shrink-0" style={{ width: 'calc(100% / 3 - 1rem)' }}>
              <SkillSectionComponent
                logo={skill.logo}
                title={skill.title}
                description={skill.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
