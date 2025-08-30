import FolderWorkDesignComp from '@/Components/FolderWorkDesignComp';
import React, { useState } from 'react';
import ProjectModal from './projectModal';
import RoundCornerWrapper from "@/Components/RoundCornerWrapper";
import projectsData from '@/app/Data/projects.json';

const MapProjects = ({ selectedChip }: { selectedChip: string | null }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectData, setSelectedProjectData] = useState<any | null>(null);

  // Filter projects based on selected chip (case-insensitive mapping)
  const filteredProjects = selectedChip
    ? projectsData.filter((project) =>
        selectedChip.toLowerCase() === "all" ||
        project.superCategory.toLowerCase() === selectedChip.toLowerCase()
      )
    : projectsData;

  const handleOpenModal = (id: any) => {
    let projectData = projectsData.filter(item => item.id === id);
    setSelectedProjectData(projectData[0]);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProjectData(null);
  };

  return (
    <div className="">
      <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => {
          // ✅ Last item in row (on md/lg with 3 columns)
          const isLastInRow = (index + 1) % 3 === 0;

          return (
            <div key={index + 'yahayyiyaqaeym'}>
              <RoundCornerWrapper
                top={false}
                right={isLastInRow} // 👉 only true for last in row
              >
                <FolderWorkDesignComp
                  keyvalue={index}
                  image1Url={project.image1}
                  image2Url={project.image2}
                  image3Url={project.image3}
                  projectName={project.projectName}
                  description={project.description}
                  superCategory={project.superCategory}
                  onClick={() => handleOpenModal(project.id)} // Trigger modal on click
                />
              </RoundCornerWrapper>
            </div>
          );
        })}
      </div>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedProjectData={selectedProjectData}
      />
    </div>
  );
};

export default MapProjects;
