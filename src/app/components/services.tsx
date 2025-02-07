import { ArrowDown } from "lucide-react";
import SectionHeading from "./section-heading";
import ServiceComponent from "./service-component";

export default function ServiceSection() {

    const data = [
        {
          title: "Hello1",
          paragraph: "The universe is vast and filled with mysteries waiting to be uncovered. Scientists continue to explore its endless wonders.The universe is vast and filled with mysteries waiting to be uncovered. Scientists continue to explore its endless wonders.",
        },
        {
          title: "Hello2",
          paragraph: "Artificial Intelligence is transforming industries, automating tasks, and enhancing human capabilities like never before.The universe is vast and filled with mysteries waiting to be uncovered. Scientists continue to explore its endless wonders.",
        },
        {
          title: "Hello3",
          paragraph: "Adopting eco-friendly habits can significantly reduce our carbon footprint and preserve the planet for future generations.The universe is vast and filled with mysteries waiting to be uncovered. Scientists continue to explore its endless wonders.",
        },
        {
          title: "Hello4",
          paragraph: "Innovations in quantum computing, biotech, and space exploration are shaping the future in unimaginable ways.The universe is vast and filled with mysteries waiting to be uncovered. Scientists continue to explore its endless wonders.",
        },
        {
          title: "Hello5",
          paragraph: "Adopting eco-friendly habits can significantly reduce our carbon footprint and preserve the planet for future generations.The universe is vast and filled with mysteries waiting to be uncovered. Scientists continue to explore its endless wonders.",
        },
        {
          title: "Hello6",
          paragraph: "Innovations in quantum computing, biotech, and space exploration are shaping the future in unimaginable ways.The universe is vast and filled with mysteries waiting to be uncovered. Scientists continue to explore its endless wonders.",
        },

      ];

    return (
        <section 
            id="services" 
            className="bg-[#141414] mt-16 mx-4 rounded-3xl pt-[6rem] px-16 relative"
        >
            <div className="relative flex items-center">
                {/* Start Element (Aligned Left) */}
                <div className="z-10">
                    <SectionHeading title="Services" Icon={ArrowDown} reqColor="white" />
                </div>

                {/* Centered Element (Truly Centered) */}
                <h2 className="absolute left-1/2 text-white tracking-wider text-5xl transform -translate-x-1/2 font-semibold text-center">
                    Services we Provide
                </h2>
            </div>
            <div className="flex flex-wrap py-12 gap-2">
                {data.map((item, index) => (
                    <div className="" style={{ width: "calc(50% - 0.3rem)" }} key={index}>
                        <ServiceComponent key={index} title={item.title} description={item.paragraph} />
                    </div>
                ))}
            </div>
        </section>
    );
}
