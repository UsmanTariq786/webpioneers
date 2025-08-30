'use client'; // Mark as client component

import Image from 'next/image';
import React, { useRef, useEffect, useState } from 'react';

interface Project {
  id: string;
  projectName: string;
  tagline?: string;
  description: string;
  imagesArray: string[];
  mobileImages?: number[];
  desktopImages?: number[];
  modalPath?: string;
  modalDescription?: string[];
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProjectData: Project | null;
}


const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  selectedProjectData,
}) => {
  const modalContentRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
        // This is a common way to check for a mobile breakpoint in JS.
        // Tailwind's 'lg' breakpoint is 1024px.
        setIsMobile(window.innerWidth <= 767);
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, []);

  useEffect(() => {
    if (isOpen) {
      // Disable background scroll
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0'; // Reset any padding if scrollbar was hidden
      if (modalContentRef.current) {
        modalContentRef.current.scrollTo(0, 0); // Initial scroll to top
      }
    }
    return () => {
      // Restore background scroll
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0';
    };
  }, [isOpen]);

  if (!isOpen || !selectedProjectData) return null;

  console.log('selectedProjectData', selectedProjectData);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const scrollToTop = () => {
    if (modalContentRef.current) {
      modalContentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  let imagesArray = isMobile ? selectedProjectData?.mobileImages : selectedProjectData?.desktopImages 
  let device = isMobile ? 'Mobile/' : 'Desktop/'

  console.log('imagesArray',imagesArray,device)



  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]"
      onClick={handleOverlayClick}
    >
      {/* Modal Container */}
      <div
        ref={modalContentRef}
        className="bg-[#202020] w-screen h-screen overflow-y-auto"
      >
        {/* Header with Close Icon */}
        <div className="border-b pb-3 border-b-[#373737] bg-[#272727]">
          <div className="mx-15 py-3 flex justify-between items-center">
            <div>
              <h2
                className="text-[24px] md:text-[42px] font-normal text-[#F8F8F8]/90 leading-[56px] tracking-[-0.02em] gradien-text"
                // style={{ fontSize: '48px' }}
              >
                {selectedProjectData.projectName}
              </h2>
              <p className="text-[#F8F8F8B2] text-[16px] md:text-[20px]">
                {selectedProjectData.tagline || selectedProjectData.description}
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
                  {/* <Image
        src="/cross.png"
        alt="cross icon"
        width={30}
        height={30}
        // fill // Fills the parent container
        className="object-contain" // Maintains aspect ratio without cropping
      /> */}
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="md:hidden">
            {imagesArray?.[0] && (
            //   <img
            //   src={`${selectedProjectData.modalPath}${device}${imagesArray[0]}.png`}
            //   alt="project main image"
            //   className="w-full h-auto object-cover mb-4"
            // />
            <Image
                src={`${selectedProjectData.modalPath}${device}${imagesArray[0]}.png`}
                alt="project main image"
                width={800} // Adjust to your image's natural width
                height={600} // Adjust to your image's natural height
                layout="responsive"
                className="w-full h-auto object-cover mb-4"
              />
            )}
            <div className="space-y-4 mb-6 mt-10">
              {selectedProjectData.modalDescription?.map((para, index) => (
                <p key={index+'descofselectedprojct'} className="text-[#F8F8F8B2] text-[18px] md:text-[20px]">
                  {para}
                </p>
              ))}
            </div>
            <div className="space-y-4">
              {imagesArray?.slice(1).map((imageNum: number, index: number) => (
                <React.Fragment key={index+'modalImageskeyisthis'}>
                  {/* <img
                    src={`${selectedProjectData.modalPath}${device}${imageNum}.png`}
                    alt={`project detail image ${index + 2}`}
                    className="w-full h-auto object-cover"
                  /> */}
                   <Image
                    src={`${selectedProjectData.modalPath}${device}${imageNum}.png`}
                    alt={`project detail image ${index + 2}`}
                    width={800} // Adjust to your image's natural width
                    height={600} // Adjust to your image's natural height
                    layout="responsive"
                    className="w-full h-auto object-cover"
                   />
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <div className="grid grid-cols-[1fr_1fr] gap-6">
              <div className="space-y-4">
                {imagesArray?.map((imageNum: number, index: number) => (
                  <React.Fragment key={index+'idontwnwlabt'}>
                    <img
                      src={`${selectedProjectData.modalPath}${device}${imageNum}.png`}
                      alt={`project detail image ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </React.Fragment>
                ))}
              </div>
              <div className="space-y-5 px-6">
                {selectedProjectData.modalDescription?.map((para, index) => (
                  <p key={index +'idontwnwlabtwhysomany'} className="text-[#F8F8F8B2] text-[18px] md:text-[20px]">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 text-center flex items-center justify-center">
            <button
             onClick={scrollToTop}
              className="h-10 w-10 bg-[#373737] rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <img
                src="/moveTopButton.png"
                alt="move to top button"
                className="h-full w-full object-contain"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;