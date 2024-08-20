'use client'
import ProjectCard from './card/ProjectCard';

interface Project {
  image: string;
  title: string;
  techStack: string[];
  description: string;
}

const projects: Project[] = [
  {
    image: '/vercel.svg',
    title: 'Nama Proyek 1',
    techStack: ['Tech 1', 'Tech 2', 'Tech 3'],
    description: 'Penjelasan singkat tentang proyek 1. Ini adalah deskripsi singkat yang memberikan gambaran umum mengenai proyek tersebut.',
  },
  {
    image: '/vercel.svg',
    title: 'Nama Proyek 2',
    techStack: ['Tech 1', 'Tech 2', 'Tech 3'],
    description: 'Penjelasan singkat tentang proyek 2. Ini adalah deskripsi singkat yang memberikan gambaran umum mengenai proyek tersebut.',
  },
  {
    image: 'vercel.svg',
    title: 'Nama Proyek 3',
    techStack: ['Tech 1', 'Tech 2', 'Tech 3'],
    description: 'Penjelasan singkat tentang proyek 3. Ini adalah deskripsi singkat yang memberikan gambaran umum mengenai proyek tersebut.',
  },
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
