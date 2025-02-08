import { ArrowDown } from "lucide-react";
import { ProfileCardsContainer } from "./profilecard";
import SectionHeading from "./section-heading";

export default function ContactUs() {
  return (
    
    <section id="about-us">
      {/* First section for titles */}
      <div className="mt-16 text-center lg:px-4 md:px-1 py-4">
        <div className="flex justify-end px-4">
      <SectionHeading title="About" Icon={ArrowDown} reqColor="black" /> </div>
        {/* "Trusted Partner For" */}
        <h2 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold text-black mt-10 md:leading-normal sm:leading-snug">
          We Have been{" "}
          <span className="bg-black text-white px-3 py-1 rounded-md  leading-snug md:leading-normal sm:leading-snug">
            Developing
          </span>
        </h2>

        {/* "Your Website Development" with styling */}
        <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold mt-3 lg:mt-7">
          <span className="text-black ">Websites since </span>
          <span className="bg-black text-white px-3 py-1 rounded-md leading-snug md:leading-normal sm:leading-snug">
            2023.
          </span>
        </h1>
      </div>

      <div className="text-zinc-700 font-semibold text-center mt-5 px-5">
        <p className="text-lg">
          We start every new client interaction with an in-depth discovery
          process to understand your needs and goals.
        </p>
        <p className="text-lg">
          This allows us to recommend the best possible solution tailored just
          for you.
        </p>
      </div>

      <div className="px-4 md:px-20 py-10">
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Who We Are Box */}
          <div className="bg-black p-6 rounded-xl shadow-md w-full md:w-1/2 text-start">
            <h2 className="text-2xl font-bold text-white mb-4 smooch-sans-tag tracking-wider">WHO WE ARE</h2>
            <p className="text-md text-[#bebebe] text-wide">
              &quot;We are a team of passionate developers, designers, and strategists
              committed to building exceptional digital experiences.&quot;
            </p>
          </div>

          {/* Our Mission Box */}
          <div className="bg-black p-6 rounded-xl shadow-md w-full md:w-1/2 text-start">
            <h2 className="text-2xl font-bold text-white mb-4 smooch-sans-tag tracking-wider">OUR MISSION</h2>
            <p className="text-md text-[#bebebe] text-wide">
            &quot;Our mission is to empower businesses with cutting-edge technology,
              delivering high-quality web solutions that drive success.&quot;
            </p>
          </div>
        </div>
      </div>
      <ProfileCardsContainer />
    </section>
  );
}
