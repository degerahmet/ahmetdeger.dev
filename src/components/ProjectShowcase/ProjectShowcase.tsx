"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProjectCard from './ProjectCard';
import { Project } from '@/types/projectInterfaces';

import randomMovieSuggestion from '@/assets/images/random_movie_suggestion.gif';
import objectDetection from '@/assets/images/object-detection.webp';

export default function ProjectShowcase() {
  const router = useRouter();
  const navigate = (url: string) => {
    router.push(url);
  };
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'Random Movie Suggestion',
      description: 'This is a random movie suggestion app that helps you find a movie to watch based on your mood.',
      imageUrl: randomMovieSuggestion,
      demoUrl: '/projects/movie-suggestion',
      browserUrl: 'https://randomovie.ahmetdeger.dev'
    },
    {
      title: 'Object Detection',
      description: 'This is an object detection app that uses the TensorFlow.js library and the COCO-SSD model to detect objects in real-time.',
      imageUrl: objectDetection,
      demoUrl: '/projects/object-detection',
      browserUrl: 'https://object-detection.ahmetdeger.dev'
    }
  ];

  return (
    <div className="max-w-screen-xl mx-auto mt-10 p-5 transition-all duration-700 ease-in-out">
      {/* Showcase Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
            navigate={navigate}
          />
        ))}
      </div>
    </div>
  );
}
