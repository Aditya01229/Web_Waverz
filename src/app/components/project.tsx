import { ArrowDown, Phone, Rocket } from "lucide-react";
import SectionHeading from "./section-heading";
import ButtonWithLogo from "./button-with-logo";
import { useState } from "react";
import ContactForm from "./ContactForm";
import ProjectComponent from "./project-component";
import { useRouter } from "next/navigation";



export default function ProjectsMain() {
  const router = useRouter();
  const [isContactOpen, setIsContactOpen] = useState(false); // Contact form pop-up state
  return (
    <section
      id="project-main"
      className="bg-black mt-16 mx-4 rounded-3xl py-[3rem] px-4 md:px-16"
    >
      {/* First section for titles */}
      <div className="text-center px-4 md:px-20 py-4">
        <div className="flex justify-center">
          <SectionHeading
            title="Recent Projects"
            Icon={ArrowDown}
            reqColor="white"
          />
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
        <ProjectComponent title="CA Portfolio Website" image="https://media.istockphoto.com/id/1453953453/photo/strategy-of-diversified-investment.jpg?s=612x612&w=0&k=20&c=GdKGA5EuK0QfKm76ExjkK64iPZLuTUOyIDQlXs-ZRQM=" link="https://ssoffice.in" />
        <ProjectComponent title="Interior Design Portfolio" image="https://media.istockphoto.com/id/1388092850/photo/mock-up-poster-frame-in-modern-interior-background-with-sofa-and-accessories-in-the-room.jpg?s=612x612&w=0&k=20&c=hej2e-1VpBf3xggnXVZl0fmUOdJ2gweLrrB7NnGW8ws=" link="https://id-group.vercel.app/" />
      </div>

      {/* Buttons Below */}
      <div className="flex justify-center gap-6 md:gap-10">
        <ButtonWithLogo
          title="Contact Us"
          Icon={Phone}
          theme="white"
          onClick={() => setIsContactOpen(true)}
        />
        <ButtonWithLogo title="View All Projects" Icon={Rocket} theme="white" onClick={() => router.push("/projects")} />
      </div>
      {isContactOpen && <ContactForm onClose={() => setIsContactOpen(false)} />}
    </section>
  );
}
