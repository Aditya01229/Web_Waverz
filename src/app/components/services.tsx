"use client";

import { ArrowDown } from "lucide-react";
import SectionHeading from "./section-heading";
import ServiceComponent from "./service-component";
import { useEffect, useState } from "react";

export default function ServiceSection() {
  const data = [
    {
      title: "Hello1",
      paragraph:
        "The universe is vast and filled with mysteries waiting to be uncovered. Scientists continue to explore its endless wonders.The universe is vast and filled with mysteries waiting to be uncovered. Scientists continue to explore its endless wonders.",
    },
    {
      title: "Hello2",
      paragraph:
        "Artificial Intelligence is transforming industries, automating tasks, and enhancing human capabilities like never before.The universe is vast and filled with mysteries waiting to be uncovered. Scientists continue to explore its endless wonders.",
    },
    {
      title: "Hello3",
      paragraph:
        "Adopting eco-friendly habits can significantly reduce our carbon footprint and preserve the planet for future generations.The universe is vast and filled with mysteries waiting to be uncovered. Scientists continue to explore its endless wonders.",
    },
    {
      title: "Hello4",
      paragraph:
        "Innovations in quantum computing, biotech, and space exploration are shaping the future in unimaginable ways.The universe is vast and filled with mysteries waiting to be uncovered. Scientists continue to explore its endless wonders.",
    },
    {
      title: "Hello5",
      paragraph:
        "Adopting eco-friendly habits can significantly reduce our carbon footprint and preserve the planet for future generations.The universe is vast and filled with mysteries waiting to be uncovered. Scientists continue to explore its endless wonders.",
    },
    {
      title: "Hello6",
      paragraph:
        "Innovations in quantum computing, biotech, and space exploration are shaping the future in unimaginable ways.The universe is vast and filled with mysteries waiting to be uncovered. Scientists continue to explore its endless wonders.",
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
    width: width <= 868 ? "100%" : "calc(50% - 0.3rem)",
  };

  return (
    <section
      id="services"
      className="bg-[#141414] mt-16 mx-4 rounded-3xl md:pt-[6rem] pt-[3rem] md:px-16 px-4 relative"
    >
      <div className="relative flex lg:flex-row items-center flex-col gap-4">
        {/* Start Element (Aligned Left) */}
        <div className="z-10">
          <SectionHeading title="Services" Icon={ArrowDown} reqColor="white" />
        </div>

        {/* Centered Element (Truly Centered) */}
        <h2 className="lg:absolute left-1/2 static text-white tracking-wider text-5xl transform lg:-translate-x-1/2 -translate-x-0 font-semibold text-center">
          Services we Provide
        </h2>
      </div>
      <div className="flex flex-wrap py-12 gap-2">
        {data.map((item, index) => (
          <div className="" style={componentCSS} key={index}>
            <ServiceComponent
              key={index}
              title={item.title}
              description={item.paragraph}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
