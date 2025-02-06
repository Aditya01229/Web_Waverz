import { ArrowDown } from "lucide-react";
import ProfileCard from "./profilecard"
import SectionHeading from "./section-heading";

export default function ContactUs(){
    return (
        <>
          {/* First section for titles */}
          <section className="mt-20 text-center px-4 md:px-20 py-5">
            {/* "Trusted Partner For" */}
            <SectionHeading title="Contact Us" Icon={ArrowDown} reqColor="black" />
            <h2 className="text-4xl md:text-7xl font-bold text-black mt-10">
              We Have been <span className="bg-black text-white px-3 py-1 rounded-md">Developing</span>
            </h2>
    
            {/* "Your Website Development" with styling */}
            <h1 className="text-4xl md:text-7xl font-bold mt-7">
              <span className="text-black">Websites since </span>
              <span className="bg-black text-white px-3 py-1 rounded-md">2023.</span>
            </h1>
          </section>

         <div className="text-zinc-700 font-semibold text-center mt-5">  
             <p className="text-lg">We start every new client interaction with an in-depth discovery process to understand your needs and goals.</p>  
             <p className="text-lg">This allows us to recommend the best possible solution tailored just for you.</p>  
         </div>

         {/* <div className="px-4 md:px-20 py-10">
  <div className="flex flex-col md:flex-row justify-center gap-6"> */}
    {/* Who We Are Box */}
    {/* <div className="bg-black p-6 rounded-xl shadow-md w-full md:w-1/2 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Who We Are</h2>
      <p className="text-lg text-lime-200 font-semibold">
        We are a team of passionate developers, designers, and strategists committed to building exceptional digital experiences.
      </p>
    </div> */}

    {/* Our Mission Box */}
    {/* <div className="bg-black p-6 rounded-xl shadow-md w-full md:w-1/2 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
      <p className="text-lg text-lime-200 font-semibold">
        Our mission is to empower businesses with cutting-edge technology, delivering high-quality web solutions that drive success.
      </p>
    </div> */}
  {/* </div>
</div> */}
  </>
  );
}