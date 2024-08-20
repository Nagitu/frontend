'use client'
import Image from 'next/image';


interface ProjectCardProps {
  image: string;
  title: string;
  techStack: string[];
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, techStack, description }) => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white transform transition-transform duration-300 hover:scale-105">
      <div className="relative w-full h-20 md:h-24">
        <Image
          src={image}
          alt={`Screenshot of ${title}`}
          layout="fill"  
          objectFit="cover"    
          className="rounded-t-lg"
        />
      </div>
      <div className="p-3">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="mb-2">
          {techStack.map((tech, index) => (
            <button
              key={index}
              className="bg-blue-500 text-white text-xs font-medium py-1 px-2 rounded mr-1 mb-1"
            >
              {tech}
            </button>
          ))}
        </div>
        <p className="text-xs md:text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
