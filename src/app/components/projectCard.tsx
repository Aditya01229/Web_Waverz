interface ProjectProps {
    title: string;
    image: string;
    link: string;
    stack: string;
    description: string[];
  }
  
  export default function ProjectCard({ title, image, link, stack, description }: ProjectProps) {
    return (
      <div className="flex flex-col lg:flex-row bg-[#1A1A1A] text-white rounded-xl p-8 shadow-lg w-full gap-8 transition-transform hover:scale-[1.02]">
        
        {/* Left Side - Image & Title */}
        <div className="flex-1">
          <img src={image} alt={title} className="rounded-xl w-full mb-5 shadow-md" />
          <h3 className="text-2xl md:text-3xl font-semibold tracking-wide text-gray-100">{title}</h3>
        </div>
  
        {/* Right Side - Stack, Description & Button */}
        <div className="flex-1 flex flex-col justify-start gap-6 bg-[#222] p-6 rounded-xl shadow-md">
          
          {/* Stack Section */}
          <div>
            <h4 className="text-xl font-semibold text-gray-200">Tech Stack</h4>
            <p className="text-gray-400 mt-1 text-lg">{stack}</p>
          </div>
  
          {/* Description Section - Hidden on Mobile */}
          <div className="hidden md:block">
            <h4 className="text-xl font-semibold text-gray-200">Description</h4>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              {description.map((point, index) => (
                <li key={index} className="text-gray-400 text-lg">{point}</li>
              ))}
            </ul>
          </div>
  
          {/* View Project Button */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg font-medium py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 ease-in-out text-center shadow-lg"
          >
            View Project 🚀
          </a>
        </div>
      </div>
    );
  }
