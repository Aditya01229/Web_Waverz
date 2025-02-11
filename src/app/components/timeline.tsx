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
      title: "Understanding Your Needs",
      description:
        "We start with a quick discussion to understand your requirements and suggest improvements. This helps us align the project with your goals from the start.",
    },
    {
      title: "Gathering Ideas",
      description:
        "After our discussion, we research and provide design references to match your vision. This ensures clarity on the look and feel of your website.",
    },
    {
      title: "Designing & Feedback",
      description:
        "We create a design based on our research and share it with you for approval. Any necessary changes are made to ensure it meets your expectations.",
    },
    {
      title: "Building & Delivery",
      description:
        "Once the design is finalized, we develop the website with a focus on quality and efficiency. Our priority is to deliver a high-performing website on time and within budget.",
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
              isLargeScreen ? "left-1/2 h-[68%]" : "h-[70%]"
            } top-[9rem] w-2 bg-black/40 -translate-x-1/2`}
          ></div>

          {/* Animated Darker Line with Max Height */}
          <div
            className={`absolute ${
              isLargeScreen ? "left-1/2" : "left-0"
            } top-[9rem] w-2 bg-black/80 -translate-x-1/2`}
            style={{
              height: `${Math.min(scrollProgress, isLargeScreen ? 68 : 70)}%`, // Limit max height to 70%
              maxHeight: `${Math.min(scrollProgress, isLargeScreen ? 68 : 70)}%`, // Dynamic maxHeight
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
