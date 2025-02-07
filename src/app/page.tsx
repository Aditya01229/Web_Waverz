import { Phone } from "lucide-react";
import ButtonWithLogo from "./components/button-with-logo";
import SkillSection from "./components/skills";
import ContactUs from "./components/contact";
import ProjectsMain from "./components/project";
import ServiceSection from "./components/services";

export default function Home() {
  return (
    <>
      {/* First section for titles */}
      <section className="sm:mt-5 xs:mt-8 text-left px-4 md:px-10 py-3">
        {/* "Trusted Partner For" */}
        <h2 className="text-5xl md:text-7xl font-bold text-black leading-snug md:leading-normal">
          Trusted <span className="bg-black text-white px-3 py-1 rounded-md">Partner</span> For
        </h2>     

        {/* "Your Website Development" with styling */}
        <h1 className="text-5xl md:text-7xl font-bold lg:mt-7 xs:mt-3 leading-snug md:leading-snug">
          <span className="text-black">Your Website </span>
          <span className="bg-black text-white px-3 rounded-md">Development.</span>
        </h1>
      </section>

      {/* Second section for email and icons */}
      <section className="sm:mt-16 xs:mt-8 px-4 md:px-7 py-5">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:gap-10 lg:gap-32 md:gap-32">
          {/* Left side for email and icons */}
          <div className="flex items-center mb-4 md:mb-0">
            {/* Email text - hidden for screens below 660px */}
            <div className="rotate-180 text-gray-700 hidden sm:block">
              <span className="inline-block font-semibold rotate-90 text-lg md:text-xl">@waverz.com</span>
            </div>

            {/* Social Icons */}
            <div className="flex sm:flex-col flex-row items-center ml-2 sm:gap-4">
              <a href="https://www.linkedin.com" className="text-gray-700 hover:text-black mb-4 xs:mr-0 pr-5">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a href="https://www.instagram.com" className="text-gray-700 hover:text-black mb-4 xs:mb-0 pr-5">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="tel:+123456789" className="text-gray-700 hover:text-black mb-2 xs:mb-0">
                <i className="fas fa-phone fa-2x"></i>
              </a>
              {/* Vertical line (Only on larger screens) */}
              <div className="h-24 w-1 bg-gray-700 hidden sm:block"></div>
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
      <ServiceSection/>
      <ContactUs/>
      <SkillSection />
      <ProjectsMain/>
    </>
  );
}
