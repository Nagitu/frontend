'use client'
import ProjectCard from './card/ProjectCard';

interface Project {
  image: string;
  title: string;
  liveUrl?:string
  githubLink?:string;
  techStack: string[];
  description: string;
}

const projects: Project[] = [
  {
    image: '/vercel.svg',
    title: 'recipe-app',
    liveUrl:'',
    githubLink:'',
    techStack: ['React','Typescript','NodeJs','Express','Postgresql'],
    description: 'web yang menampilkan resep makanan yang dibagikan oleh user ',
  },
  {
    image: '/vercel.svg',
    title: 'Article-web',
    techStack: ['React','Typescript','NodeJs','Express','Postgresql'],
    description: 'web yang menampilkan artikel dengan penerapan CRUD,Auth',
  },
  {
    image: 'vercel.svg',
    title: 'example profile we',
    liveUrl:'https://example-store-profile.vercel.app/',
    techStack: ['React','Typescript','NodeJs','NextJs'],
    description: 'antarmuka web profil untuk warung pecel',
  }
];

const ProjectSection: React.FC = () => {
  return (
    <div className="p-8 bg-gray-100 m-10 flex flex-col gap-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            techStack={project.techStack}
            description={project.description}
          />
        ))}
      </div>
      <button className='bg-gray-600 text-md text-white hover:bg-orange-400 w-fit flex items-end'>Load More</button>
    </div>
  );
}

export default ProjectSection;
