import { ArrowDown } from "lucide-react";
import SectionHeading from "../components/section-heading";
import ProjectCard from "../components/projectCard";

export default function Projects() {
  return (
    <section
      id="project-page"
      className="bg-black mt-12 mx-4 rounded-3xl py-[3rem] px-4 md:px-16"
    >
      {/* Heading Section */}
      <div className="text-center px-4 md:px-20 py-4">
        <div className="flex justify-center">
          <SectionHeading
            title="All Projects"
            Icon={ArrowDown}
            reqColor="white"
          />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mt-10">
          Take a look at the latest
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold mt-3 text-white">
          Projects we&apos;ve done.
        </h1>
      </div>

      {/* Project List (Stacked) */}
      <div className="flex flex-col gap-10 mt-12 mb-12">
      <ProjectCard
        title="CA Portfolio Website"
        image="https://media.istockphoto.com/id/1453953453/photo/strategy-of-diversified-investment.jpg?s=612x612&w=0&k=20&c=GdKGA5EuK0QfKm76ExjkK64iPZLuTUOyIDQlXs-ZRQM="
        link="https://ssoffice.in"
        stack="Handlebars, Node.js, Bootstrap, Nodemailer, HTML, CSS"
        description={[
          "Designed and developed a responsive, multi-page portfolio website for a Chartered Accountant, emphasizing a professional and visually appealing user interface",
          "Implemented dynamic form submission functionality with automated email notifications using Nodemailer, enhancing client communication."
  ]}
/>

<ProjectCard
  title="Interior Design Portfolio"
  image="https://media.istockphoto.com/id/1388092850/photo/mock-up-poster-frame-in-modern-interior-background-with-sofa-and-accessories-in-the-room.jpg?s=612x612&w=0&k=20&c=hej2e-1VpBf3xggnXVZl0fmUOdJ2gweLrrB7NnGW8ws="
  link="https://id-group.vercel.app/"
  stack="Svelte, Tailwind CSS"
  description={[
    "Developed a visually immersive portfolio showcasing modern interior designs.",
    "Implemented a responsive and minimalist UI for an elegant browsing experience."
  ]}
/>


<ProjectCard
  title="Business Portfolio Website"
  image="https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydGZvbGlvJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
  link="https://www.adfyou.com"
  stack="HTML, CSS, JavaScript"
  description={[
    "Crafted a professional, responsive portfolio website to enhance brand identity.",
    "Integrated dynamic content sections for seamless user engagement."
  ]}
/>


      <ProjectCard
        title="NGO Website"
        image="https://www.shutterstock.com/image-vector/ngo-nongovernmental-organization-word-cloud-260nw-1797442786.jpg"
        link="https://hdfindia.org"
        stack="NestJS, React.js, PL/SQL, Restful APIs, Prisma"
        description={[
          "Developed a comprehensive full-stack website for HDF India, incorporating an intuitive admin panel for seamless content and user management.",
          "Enhanced user engagement through features facilitating donations and volunteer registrations for various social initiatives."
  ]}
/>

        <ProjectCard
          title="Hospital Management System"
          image="https://www.shmsolutions.in/assets/images/blog/what%20is%20a%20hospital%20management%20system.webp"
          link="https://www.google.com"
          stack="React.js, Node.js, Express.js, MongoDB"
          description={["Developed a Hospital Management System with user and admin login functionality and a dashboard for seamless control and management",
                        "Enabled features such as scheduling appointments, viewing all appointments, adding doctors, and adding new admins",
                         ]}
        />
      </div>
    </section>
  );
}
