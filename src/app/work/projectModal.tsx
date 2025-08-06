import React from "react";

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
  selectedProjectData: any;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  selectedProjectData,
}) => {
  if (!isOpen || !selectedProjectData) return null;

  if (!selectedProjectData) return null;

  console.log("selectedProjectData", selectedProjectData);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#202020]">
      <div className=" w-full h-full overflow-y-auto">
        {/* Header with Close Icon */}
        <div className=" border-b pb-3 border-b-[#373737] bg-[#272727]">
          <div className="mx-15 py-3 flex justify-between items-center">
            <div className="">
              <h2
                className="text-4xl font-normal text-[#F8F8F8]/90 leading-[56px] tracking-[-0.02em]"
                style={{ fontSize: "48px" }}
              >
                {selectedProjectData.projectName}
              </h2>
              <p className="text-[#F8F8F8B2]">
                {selectedProjectData.description}
              </p>
            </div>
            <button
              onClick={onClose}
              className="h-10 w-10 bg-[#373737] rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <img
                src="/cross.png"
                alt="cross icon"
                className="h-full w-full object-contain"
              />
            </button>
          </div>
        </div>

        <div className="bg-[#202020]">

         {
           selectedProjectData?.modalImages.map((imagePath: string, index: number) => (
             <React.Fragment key={index}>
               <img
                 src={`${selectedProjectData.modalPath}${imagePath}.png`}
                 alt={`project detail image ${index + 1}`}
               />
             </React.Fragment>
           ))
         }

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
