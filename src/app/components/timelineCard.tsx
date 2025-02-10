"use client";

import { useState, useEffect } from "react";

interface TimelineCardProps {
  title: string;
  description: string;
  index: number; // Add index for alternating styles
}

export default function TimelineCard({
  title,
  description,
  index,
}: TimelineCardProps) {
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

  return (
    <div
      className={`relative flex items-center mb-10 ${
        isLargeScreen && index % 2 === 0 ? "justify-start" : "justify-end"
      }`}
    >
      {/* Timeline Box */}
      <div
        className={`mx-[-2rem] bg-black p-6 rounded-xl shadow-md ${
          isLargeScreen ? "w-1/2" : "w-full"
        } text-start`}
      >
        <h2 className="text-2xl font-bold text-white mb-4 smooch-sans-tag tracking-wider">
          {title}
        </h2>
        <p className="text-md text-[#bebebe] text-wide">
          &quot;{description}&quot;
        </p>
      </div>

      {/* Circle at the middle */}
      <div
        className={`absolute ${
          isLargeScreen ? "left-1/2" : "left-0"
        } w-10 h-10 bg-black rounded-full border-2 border- transform -translate-x-1/2`}
      ></div>
    </div>
  );
}
