"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface ServiceComponentProps{
    title: string;
    description: string;
}

export default function ServiceComponent({title, description}: ServiceComponentProps){

    const [isHovered, setIsHovered] = useState(false);

    return <>
        <div className={`rounded-3xl p-6 items-center flex flex-col gap-8 transition-transform duration-300 ease-in-out ${isHovered ? "bg-[#c5ff41] rotate-1" : "bg-black"}`} onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
            <div className="w-full flex justify-between">
                <h3 className={`rounded-3xl p-1 px-6 font-semibold tracking-wide transition-colors duration-100 ${isHovered ? "bg-black text-white" : "bg-[#c9fff0] text-black"}`}>
                    {title}
                </h3>
                {/* <div className={`flex gap-1 ${isHovered ? "text-black" : "text-white"}`}>
                    <ArrowRight />
                    <a href="" className="underline">Read More</a>
                </div> */}
            </div>
            <p className={`text-md text-wide ${isHovered ? "text-black" : "text-[#bebebe]"}`}>
                {description}
            </p>
        </div>
    </>
}