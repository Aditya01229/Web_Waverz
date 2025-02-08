import { ArrowDown, ArrowRight, Phone, Rocket } from "lucide-react";
import SectionHeading from "./section-heading";
import ButtonWithLogo from "./button-with-logo";

export default function ProjectsMain() {
  return (
    <section id="project-main" className="bg-black mt-16 mx-4 rounded-3xl py-[3rem] px-16">
      {/* First section for titles */}
      <div className="text-center px-4 md:px-20 py-4">
        <div className="flex justify-center">
          <SectionHeading title="Recent Projects" Icon={ArrowDown} reqColor="white" />
        </div>

        {/* "Trusted Partner For" */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-10">
          Take a look at the latest
        </h2>

        {/* "Your Website Development" with styling */}
        <h1 className="text-4xl md:text-5xl font-bold mt-3 text-white">
          Projects we&apos;ve done.
        </h1>
      </div>

      {/* Project Boxes */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12 mb-12">
        {/* First Project Box (Tilted Left) */}
        <div className="relative transform rounded-2xl shadow-lg w-full md:w-[40%] h-[300px] overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center "
            style={{ backgroundImage: "url('https://media.istockphoto.com/id/1453953453/photo/strategy-of-diversified-investment.jpg?s=612x612&w=0&k=20&c=GdKGA5EuK0QfKm76ExjkK64iPZLuTUOyIDQlXs-ZRQM=')" }}
          ></div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          {/* Title */}
          <h3 className="absolute bottom-5 left-5 text-white text-2xl font-semibold">CA Portfolio Website</h3>
          {/* Centered Arrow */}
          <ArrowRight className="absolute text-white w-12 h-12 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-80 hover:opacity-50" />
        </div>

        {/* Second Project Box (Straight) */}
        <div className="relative rounded-2xl shadow-lg w-full md:w-[40%] h-[300px] overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://www.softclinicsoftware.com/wp-content/uploads/2022/04/digital-composite-doctor-with-white-graph-with-flare-against-blurry-background-with-light-blue-overlay.jpg')" }}
          ></div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          {/* Title */}
          <h3 className="absolute bottom-5 left-5 text-white text-2xl font-semibold">Hospital Management System</h3>
          {/* Centered Arrow */}
          <ArrowRight className="absolute text-white w-12 h-12 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-80 hover:opacity-50" />
        </div>
      </div>

      {/* Buttons Below */}
      <div className="flex justify-center gap-10">
        <ButtonWithLogo title="Contact Us" Icon={Phone} theme="white" />
        <ButtonWithLogo title="View All Projects" Icon={Rocket} theme="white"/>
      </div>
    </section>
  );
}
