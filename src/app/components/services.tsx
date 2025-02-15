"use client";

import { ArrowDown } from "lucide-react";
import SectionHeading from "./section-heading";
import ServiceComponent from "./service-component";
import { useEffect, useState } from "react";

export default function ServiceSection() {
  const data = [
    {
      title: "Portfolio & Business Websites",
      paragraph: "Sleek, professional, and optimized for branding with fast performance, responsive design, and SEO-friendly structure. Tailored to showcase your work effectively and leave a lasting impression.",
    },
    {
      title: "E-Commerce Development",
      paragraph: "Secure payment integration (Razorpay, Stripe), product listings, cart, and order management for seamless shopping. Optimized for conversions, fast loading speeds, and smooth user experience.",
    },
    {
      title: "Web App Development",
      paragraph: "Custom, scalable, and interactive applications with secure authentication and database-driven functionality. High performance, reliability, and seamless integration with third-party services and APIs.",
    },
    {
      title: "WordPress Development",
      paragraph: "Custom themes, plugins, and full-site optimization for performance, security, and user engagement. Mobile-friendly layouts, easy content management, and SEO-enhanced for better visibility.",
    },
    {
      title: "Web Hosting & Maintenance",
      paragraph: "Reliable hosting on Vercel, Hostinger, AWS, or DigitalOcean with regular updates and security checks. Performance monitoring, backup management, and technical support for smooth operation.",
    },
    {
      title: "UI/UX Design & Prototyping",
      paragraph: "Intuitive, user-friendly interfaces designed using Figma and Tailwind for seamless user experiences. Focused on accessibility, aesthetics, usability, and smooth navigation for all devices.",
    },
  ];

  const [width, setWidth] = useState<number>(0);
  const [showAll, setShowAll] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);

      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const componentCSS = {
    width: width <= 868 ? "100%" : "calc(50% - 0.3rem)",
  };

  const visibleData = width <= 868 && !showAll ? data.slice(0, 3) : data;

  return (
    <section
      id="services"
      className="mt-[-14rem] md:mt-0 pt-[14rem] md:pt-0"
    >
      <div className="bg-[#141414] mt-16 mx-4 rounded-3xl md:pt-[6rem] pt-[3rem] md:px-16 px-4 relative">
      <div className="relative flex lg:flex-row items-center flex-col gap-4">
        <div className="z-10">
          <SectionHeading title="Services" Icon={ArrowDown} reqColor="white" />
        </div>

        <h2 className="lg:absolute left-1/2 static text-white tracking-wider text-5xl transform lg:-translate-x-1/2 -translate-x-0 font-semibold text-center">
          Services we Provide
        </h2>
      </div>
      <div className="flex flex-wrap py-4 gap-2">
        {visibleData.map((item, index) => (
          <div className="" style={componentCSS} key={index}>
            <ServiceComponent title={item.title} description={item.paragraph} />
          </div>
        ))}
      </div>
      {width <= 868 && !showAll && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowAll(true)}
            className="bg-[#c9fff0] text-black px-4 py-2 mb-5 rounded-2xl font-semibold"
          >
            Show More
          </button>
        </div>
        
      )}
      </div>
    </section>
  );
}