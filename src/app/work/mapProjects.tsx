import FolderWorkDesignComp from '@/Components/FolderWorkDesignComp';
import React, { useState } from 'react';
import projectsData from '@/app/data/projects.json';
import ProjectModal from './projectModal';

const MapProjects = ({ selectedChip }: { selectedChip: string | null }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  console.log('projectsData', projectsData);

  // Filter projects based on selected chip (case-insensitive mapping)
  const filteredProjects = selectedChip
    ? projectsData.filter((project) =>
        selectedChip.toLowerCase() === "all" ||
        project.superCategory.toLowerCase() === selectedChip.toLowerCase()
      )
    : projectsData;

  const handleOpenModal = (id: any) => {
    setSelectedProjectId(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProjectId(null);
  };

  let somedata = [
    {
      "id": "1",
      "projectName": "Project One",
      "tagline": "Innovative Design",
      "description": ["Paragraph 1 text.", "Paragraph 2 text."],
      "imagesArray": ["/image1.jpg", "/image2.jpg", "/image3.jpg"],
      "image1": "/thumb1.jpg",
      "image2": "/thumb2.jpg",
      "image3": "/thumb3.jpg",
      "superCategory": "design"
    }
  ]

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {filteredProjects.map((project, index) => (
          <FolderWorkDesignComp
            key={index}
            image1Url={project.image1}
            image2Url={project.image2}
            image3Url={project.image3}
            projectName={project.projectName}
            description={project.description}
            superCategory={project.superCategory}
            onClick={() => handleOpenModal(project.id)} // Trigger modal on click
          />
        ))}
      </div>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        projectId={selectedProjectId}
        projectsData={somedata}
      />
    </div>
  );
};

export default MapProjects;