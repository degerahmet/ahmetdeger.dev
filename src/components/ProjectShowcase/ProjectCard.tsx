import Image from 'next/image';
import { ProjectCardProps } from '@/types/projectInterfaces';

export default function ProjectCard({ project, selectedProject, setSelectedProject, navigate }: ProjectCardProps) {
  const cardClasses = "relative group border border-gray-700 rounded-md shadow-lg bg-gray-900 text-white overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105";
  return (
    <div
      className={cardClasses}
      onMouseEnter={() => setSelectedProject(project)}
      onMouseLeave={() => setSelectedProject(null)}
      onClick={() => navigate(project.demoUrl)}
    >
      {/* Browser UI Mockup */}
      <div className="bg-gray-800 py-2 px-4 rounded-t-md flex justify-between items-center">
        <div className="flex items-center space-x-2 mr-5">
          {/* Browser action buttons */}
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex-1 text-center">
          <input 
            type="text" 
            value={project.browserUrl} 
            readOnly
            className="bg-gray-700 text-white rounded w-full max-w-lg py-1 px-2 border border-gray-600 text-center" />
        </div>
      </div>
      
      <Image
        src={project.imageUrl}
        alt={project.title}
        width={500}
        height={300}
        className="w-full h-80 object-cover rounded-b-md"
      />

      {/* Encouraging Message */}
      {selectedProject?.title === project.title && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center text-lg font-semibold">
          <p>Click to explore {project.title}!</p>
        </div>
      )}
    </div>
  );
}
