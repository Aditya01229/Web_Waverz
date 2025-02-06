import { Phone } from "lucide-react";
import ButtonWithLogo from "./components/button-with-logo";
import SkillSection from "./components/skills";
import ContactUs from "./components/contact";
import ProjectsMain from "./components/project";

export default function Home() {
  return (
    <>
      {/* First section for titles */}
      <section className="mt-20 text-left px-4 md:px-20 py-6">
        {/* "Trusted Partner For" */}
        <h2 className="text-4xl md:text-7xl font-bold text-black">
          Trusted <span className="bg-black text-white px-3 py-1 rounded-md">Partner</span> For
        </h2>

        {/* "Your Website Development" with styling */}
        <h1 className="text-4xl md:text-7xl font-bold mt-7">
          <span className="text-black">Your Website </span>
          <span className="bg-black text-white px-3 py-1 rounded-md">Development.</span>
        </h1>
      </section>

      {/* Second section for email and icons */}
      <section className="mt-16 px-4 md:px-20 py-5 ">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Left side for email and vertical icons */}
          <div className="flex items-center mb-4 md:mb-0">
            {/* Email text displayed vertically */}
            <div className="rotate-180 text-gray-700">
              <span className="inline-block font-semibold rotate-90 text-lg md:text-xl">@waverz.com</span>
            </div>

            {/* Vertical icons */}
            <div className="flex flex-col items-center ml-2">
              <a href="https://www.linkedin.com" className="text-gray-700 hover:text-black mb-4">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a href="https://www.instagram.com" className="text-gray-700 hover:text-black mb-4">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="tel:+123456789" className="text-gray-700 hover:text-black mb-2">
                <i className="fas fa-phone fa-2x"></i>
              </a>
              {/* Vertical line below the last logo */}
              <div className="h-24 w-1 bg-gray-700"></div>
            </div>
          </div>

          {/* Right side for text */}
          <div className="mr-0 md:mr-28 flex flex-col gap-10">
            <p className="text-lg md:text-2xl font-semibold text-black">
              Empowering brands through exceptional web design and development. <br />
              Your go-to partner for creativity, strategy, and technology.
            </p>
            <div className="max-w-fit">
              <ButtonWithLogo title="Schedule a Call" Icon={Phone} theme="black" />
            </div>
          </div>
        </div>
      </section>
      <SkillSection />
      <ContactUs/>
      <ProjectsMain/>
    </>
  );
}
