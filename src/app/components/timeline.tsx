"use client";

import { useState, useEffect } from "react";
import TimelineCard from "./timelineCard";
import SectionHeading from "./section-heading";
import { ArrowDown } from "lucide-react";

export default function Timeline() {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return; // Avoid SSR issues

    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 850);
    };

    checkScreenSize(); // Run on mount
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const timeline = document.getElementById("timeline");
      if (!timeline) return;

      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const maxScroll = rect.height - windowHeight / 2; // Mid-screen reference
      const scrolled = Math.min(Math.max(-rect.top, 0), maxScroll);
      setScrollProgress((scrolled / maxScroll) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run initially

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const steps = [
    {
      title: "Step 1: Initial Video",
      description:
        "Film a 2-minute video on any topic you're passionate about. This video serves as the foundation for creating your digital twin.",
    },
    {
      title: "Step 2: Digital Clone Creation",
      description:
        "We feed your video into our advanced AI algorithm, which analyzes your body, face, and voice to create an accurate virtual replica of you.",
    },
    {
      title: "Step 3: Content Strategy and Production",
      description:
        "We create custom scripts by conducting niche research and generating videos of you speaking on relevant subjects tailored for social media.",
    },
    {
      title: "Step 4: Deployment & Growth",
      description:
        "Your AI-generated content is published strategically to maximize engagement and audience growth.",
    },
  ];

  return (
    <section className="pt-20" id="timeline">
      <div className="flex justify-end pr-4 md:pr-8">
        <SectionHeading title="Our Process" Icon={ArrowDown} reqColor="black" />
      </div>
      <div className="px-12">
        <div className="relative w-full max-w-4xl mx-auto py-10">
          {/* Background Line */}
          <div
            className={`absolute ${
              isLargeScreen ? "left-1/2 h-[70%]" : "h-[73%]"
            } top-[8rem] w-2 bg-black/40 -translate-x-1/2`}
          ></div>

          {/* Animated Darker Line with Max Height */}
          <div
            className={`absolute ${
              isLargeScreen ? "left-1/2" : "left-0"
            } top-[8rem] w-2 bg-black/80 -translate-x-1/2`}
            style={{
              height: `${Math.min(scrollProgress, 70)}%`, // Limit max height to 70%
              maxHeight: "70%",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.8)",
            }}
          ></div>

          {steps.map((step, index) => (
            <TimelineCard key={index} index={index} title={step.title} description={step.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
