import FolderWorkDesignComp from '@/Components/FolderWorkDesignComp';
import React, { useState } from 'react';
import ProjectModal from './projectModal';
import RoundCornerWrapper from "@/Components/RoundCornerWrapper";
import projectsData from '@/app/Data/projects.json';


const MapProjects = ({ selectedChip }: { selectedChip: string | null }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectData, setSelectedProjectData] = useState<any | null>(null);

  console.log('projectsData', projectsData);

  // Filter projects based on selected chip (case-insensitive mapping)
  const filteredProjects = selectedChip
    ? projectsData.filter((project) =>
        selectedChip.toLowerCase() === "all" ||
        project.superCategory.toLowerCase() === selectedChip.toLowerCase()
      )
    : projectsData;

  const handleOpenModal = (id: any) => {
   let projectData = projectsData.filter(item=>item.id===id)
  //  console.log('projectDatassssssssss', projectData);
    setSelectedProjectData(projectData[0]);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProjectData(null);
  };



  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
        <RoundCornerWrapper>
      <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {filteredProjects.map((project, index) => (
          //  <div                       
          //  key={index}
          //  style={{position:'relative',borderRight:'1px solid #373737',width:'25%'}}>

          // <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -right-[5px] -top-[5px]"></div>
          // <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -right-[5px]"></div>
       

          //  <div                       
          //  key={index}
          //  style={{position:'relative',borderRight:'1px solid #373737',width:'25%'}}>

          // <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -right-[5px] -top-[5px]"></div>
          // <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -right-[5px]"></div>
       

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
          //  </div>
            ))}
      </div>
        </RoundCornerWrapper>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedProjectData={selectedProjectData}
       
      />
    </div>
  );
};

export default MapProjects;