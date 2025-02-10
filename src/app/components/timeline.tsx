"use client";

import { useState, useEffect } from "react";

import TimelineCard from "./timelineCard";
import SectionHeading from "./section-heading";
import { ArrowDown } from "lucide-react";

export default function Timeline() {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return; // Avoid SSR issues

    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 850);
    };

    checkScreenSize(); // Run on mount
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
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
          {/* Vertical Line */}
          <div
            className={`absolute ${
              isLargeScreen ? "left-1/2 h-[70%]" : "h-[74%]"
            } top-[8rem] w-2  bg-black/40 -translate-x-1/2`}
          ></div>

          {steps.map((step, index) => (
            <TimelineCard
              key={index}
              index={index}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
