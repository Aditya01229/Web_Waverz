"use client";
import { useEffect, useRef, useState } from "react";
import NextButton from "./next-button";
import PrevButton from "./prev-button";
import SectionHeading from "./section-heading";
import { ArrowDown } from "lucide-react";
import SkillSectionComponent from "./skill-component";

export default function SkillSection() {
  

  const skillsData = [
    {
      title: "HTML & CSS",
      description: "Building the world's best marketing. Your trusted partner for strategy, design, and dev.",
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


  const [width, setWidth] = useState<number>(0); // Set default value to 0
  
    useEffect(() => {
      if (typeof window !== "undefined") {
        setWidth(window.innerWidth); // Set width after component mounts
  
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
  
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []);
  
    const componentCSS = {
      width: width <= 900 ? "calc(100%)" : (width <= 1024) ? "calc(100%/2 - 1rem)" : "calc(100%/3 - 1rem)",
    };

  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: string) => {
    if (scrollRef.current) {
      const scrollAmount = (width <= 900) ? window.innerWidth / 1.13 : (width <= 1024) ? window.innerWidth / 2.15 : window.innerWidth / 3.3; // Ensure 3 components per page
      scrollRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="why-choose-me" className="bg-black mt-16 mx-4 rounded-3xl py-[3rem] md:py-[6rem] px-4 md:px-16">
      <SectionHeading title="Skills" Icon={ArrowDown} reqColor="white" />
      <div className="flex justify-between mt-5 flex-col lg:flex-row gap-6">
        <p className="font-semibold text-5xl md:text-7xl font-sans leading-[4rem] sm:tracking-[0.03em] tracking-0 text-white">
          My Extensive List of Skills
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
            <div key={index} className="flex-shrink-0" style={componentCSS}>
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
