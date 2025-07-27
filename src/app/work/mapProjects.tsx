import FolderWorkDesignComp from '@/components/FolderWorkDesignComp';
import React from 'react';
import projectsData from '@/app/data/projects.json';

const MapProjects = ({ selectedChip }: { selectedChip: string | null }) => {
  console.log('projectsData', projectsData);

  // Filter projects based on selected chip (case-insensitive mapping)
  const filteredProjects = selectedChip
    ? projectsData.filter((project) => 
        (selectedChip.toLowerCase() === "all" || 
         project.superCategory.toLowerCase() === selectedChip.toLowerCase())
      )
    : projectsData;

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {filteredProjects.map((project, index) => (
          <FolderWorkDesignComp
            key={index}
            image1Url={project.image1}
            image2Url={project.image2}
            image3Url={project.image3}
            projectName={project.projectName}
            description={project.description}
            superCategory={project.superCategory}
          />
        ))}
      </div>
    </div>
  );
};

export default MapProjects;