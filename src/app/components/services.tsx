"use client";

import { ArrowDown } from "lucide-react";
import SectionHeading from "./section-heading";
import ServiceComponent from "./service-component";
import { useEffect, useState } from "react";

export default function ServiceSection() {
  const data = [
    {
      title: "Portfolio Websites",
      paragraph:
        "Sleek, professional, and optimized for branding with fast performance, responsive design, and SEO-friendly structure. Tailored to showcase your work effectively and leave a lasting impression.",
    },
    {
      title: "E-Commerce Development",
      paragraph:
        "Secure payment integration (Razorpay, Stripe), product listings, cart, and order management for seamless shopping. Optimized for conversions, fast loading speeds, and smooth user experience.",
    },
    {
      title: "Web App Development",
      paragraph:
        "Custom, scalable, and interactive applications with secure authentication and database-driven functionality. High performance, reliability, and seamless integration with third-party services and APIs.",
    },
    {
      title: "WordPress Development",
      paragraph:
        "Custom themes, plugins, and full-site optimization for performance, security, and user engagement. Mobile-friendly layouts, easy content management, and SEO-enhanced for better visibility.",
    },
    {
      title: "Web Hosting & Maintenance",
      paragraph:
        "Reliable hosting on Vercel, Hostinger, AWS, or DigitalOcean with regular updates and security checks. Performance monitoring, backup management, and technical support for smooth operation.",
    },
    {
      title: "UI/UX Design & Prototyping",
      paragraph:
        "Intuitive, user-friendly interfaces designed using Figma and Tailwind for seamless user experiences. Focused on accessibility, aesthetics, usability, and smooth navigation for all devices.",
    },
  ];

  const [width, setWidth] = useState<number>(0); // Set default value to 0

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth); // Set width after component mounts

      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const componentCSS = {
    width: width <= 868 ? "100%" : "calc(50% - 0.6rem)",
  };

  return (
    <section id="services" className="mt-[-14rem] md:mt-0 pt-[14rem] md:pt-0">
      <div className="bg-[#141414] mt-16 mx-4 rounded-3xl md:pt-[6rem] pt-[3rem] md:px-16 px-4 relative">
        <div className="relative flex lg:flex-row items-center flex-col gap-4">
          {/* Start Element (Aligned Left) */}
          <div className="z-10">
            <SectionHeading
              title="Services"
              Icon={ArrowDown}
              reqColor="white"
            />
          </div>

          {/* Centered Element (Truly Centered) */}
          <h2 className="lg:absolute left-1/2 static text-white tracking-wider text-5xl transform lg:-translate-x-1/2 -translate-x-0 font-semibold text-center">
            Services We Provide
          </h2>
        </div>
        <div className="flex flex-wrap py-12 gap-3">
          {data.map((item, index) => (
            <div className="" style={componentCSS} key={index}>
              <ServiceComponent
                key={index}
                title={item.title}
                description={item.paragraph}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
