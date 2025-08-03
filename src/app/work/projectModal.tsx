import React from "react";
// import { XIcon } from '@heroicons/react/outline'; // For close icon (install @heroicons/react if needed)

interface Project {
  id: string;
  projectName: string;
  tagline: string;
  description: string[];
  imagesArray: string[];
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: string | null;
  projectsData: Project[];
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  projectId,
  projectsData,
}) => {
  if (!isOpen || !projectId) return null;

  const project = projectsData[0];
  if (!project) return null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 bg-[#202020]">
      <div className=" w-full h-full overflow-y-auto">
        {/* Header with Close Icon */}
        <div className="flex justify-between items-center border-b pb-4 border-b-[#373737] bg-[#272727]">
          <div>
            <h2
              className="text-4xl font-normal text-[#F8F8F8]/90 leading-[56px] tracking-[-0.02em]"
              style={{ fontSize: "48px" }}
            >
              {project.projectName}
            </h2>
            <p className="text-[#F8F8F8B2]">{project.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            {/* <XIcon className="h-6 w-6" />
             */}
            x
          </button>
        </div>

        <div className="bg-[#202020]">
          {/* Description */}
          <div className="mt-6">
            {project.description.map((para, index) => (
              <p key={index} className="text-gray-700 mb-4">
                {para}
              </p>
            ))}
          </div>

          {/* Images - Two Columns on Desktop, Stacked on Mobile */}
          <div className="mt-6">
            {/* First Image at Top */}
            {project.imagesArray.length > 0 && (
              <div className="w-full mb-4">
                <img
                  src={project.imagesArray[0]}
                  alt={`${project.projectName} main image`}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* Other Images in Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.imagesArray.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.projectName} image ${index + 2}`}
                  className="w-full h-auto object-cover"
                />
              ))}
            </div>
          </div>

          {/* Move to Top Button */}
          <div className="mt-6 text-center">
            <button
              onClick={scrollToTop}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Move to Top
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
