interface ProjectComponentProps {
  title: string;
  image: string;
  link: string;
}

import { ArrowRight } from "lucide-react";

export default function ProjectComponent({
  title,
  image,
  link,
}: ProjectComponentProps) {
  return (
    // <a href={link}>
      <a className="relative transform rounded-2xl shadow-lg w-full md:w-[40%] h-[300px] overflow-hidden"
        href={link}>
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        {/* Title */}
        <h3 className="absolute bottom-5 left-5 text-white text-2xl font-semibold">
          {title}
        </h3>
        {/* Centered Arrow */}
        <ArrowRight className="absolute text-white w-12 h-12 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-80 hover:opacity-50" />
      </a>
    // </a>
  );
}
