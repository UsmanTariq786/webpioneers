'use client'; // Mark as client component

import Image from 'next/image';
import React, { useRef, useEffect, useState } from 'react';

interface Project {
  id: any;
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
      setIsMobile(window.innerWidth <= 767); // Matches your original breakpoint
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY; // Store scroll position
      document.body.style.position = 'fixed'; // Lock body
      document.body.style.top = `-${scrollY}px`; // Preserve scroll position
      document.body.style.width = '100%'; // Prevent width changes
      document.documentElement.style.overflow = 'hidden';
      if (modalContentRef.current) {
        modalContentRef.current.scrollTo(0, 0); // Scroll to top
      }
    }
    return () => {
      const scrollY = parseInt(document.body.style.top || '0') * -1; // Restore scroll
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.documentElement.style.overflow = 'auto';
      window.scrollTo(0, scrollY); // Restore scroll position
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

  let imagesArray = isMobile ? selectedProjectData?.mobileImages : selectedProjectData?.desktopImages;
  let device = isMobile ? 'Mobile/' : 'Desktop/';
  let isHeadShot = selectedProjectData?.id === 2 ? true : false;

  console.log('isHeadShot', isHeadShot);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000] touch-none"
      onClick={handleOverlayClick}
    >
      <div
        ref={modalContentRef}
        className="bg-[#202020] w-screen min-h-[100dvh] h-[100dvh] flex flex-col overflow-y-auto"
      >
        {/* Header with Close Icon */}
        <div className="border-b pb-3 border-b-[#373737] bg-[#272727] sticky top-0 z-10">
          <div className="mx-15 py-3 flex justify-between items-center">
            <div>
              <h2
                className="text-[24px] md:text-[32px] font-normal text-[#F8F8F8]/90 leading-[56px] tracking-[-0.02em] gradien-text"
              >
                {selectedProjectData.projectName}
              </h2>
              <p className="text-[#F8F8F8B2] text-[16px]">
                {selectedProjectData.tagline || selectedProjectData.description}
              </p>
            </div>
            <button
              onClick={onClose}
              className="h-10 w-10 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <img
                src="/cross.png"
                alt="cross icon"
                className="h-full w-full object-contain"
              />
            </button>
          </div>
        </div>

        <div className="p-6 pb-[env(safe-area-inset-bottom,1rem)]">
          <div className="md:hidden">
            {imagesArray?.[0] && (
              <Image
                src={`${selectedProjectData.modalPath}${device}${imagesArray[0]}.png`}
                alt="project main image"
                width={800}
                height={600}
                layout="responsive"
                className="w-full h-auto object-cover mb-4"
              />
            )}
            <div className="space-y-4 mb-6 mt-10">
              {selectedProjectData.modalDescription?.map((para, index) => (
                <p key={index + 'descofselectedprojct'} className="text-[#F8F8F8B2] text-[16px]">
                  {para}
                </p>
              ))}
            </div>
            <div className="space-y-4">
              {isHeadShot && <VideoSectionForHeadshot />}
            </div>
            <div className="space-y-4">
              {imagesArray?.slice(1).map((imageNum: number, index: number) => (
                <React.Fragment key={index + 'modalImageskeyisthis'}>
                  <Image
                    src={`${selectedProjectData.modalPath}${device}${imageNum}.png`}
                    alt={`project detail image ${index + 2}`}
                    width={800}
                    height={600}
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
                {!isHeadShot &&
                  imagesArray?.map((imageNum: number, index: number) => (
                    <React.Fragment key={index + 'idontwnwlabt'}>
                      <Image
                        src={`${selectedProjectData.modalPath}${device}${imageNum}.png`}
                        alt={`project detail image ${index + 1}`}
                        className="w-full h-auto object-cover"
                        width={800}
                        height={600}
                        layout="responsive"
                      />
                    </React.Fragment>
                  ))}
                {isHeadShot && (
                  <Image
                    src={`${selectedProjectData.modalPath}${device}1.png`}
                    alt={`project detail image ${1}`}
                    className="w-full h-auto object-cover"
                    width={800}
                    height={600}
                    layout="responsive"
                  />
                )}
                {isHeadShot && <VideoSectionForHeadshot />}
                {isHeadShot &&
                  imagesArray?.slice(1)?.map((imageNum: number, index: number) => (
                    <React.Fragment key={index + 'idontwnwlabt'}>
                      <Image
                        src={`${selectedProjectData.modalPath}${device}${imageNum}.png`}
                        alt={`project detail image ${index + 1}`}
                        className="w-full h-auto object-cover"
                        width={800}
                        height={600}
                        layout="responsive"
                      />
                    </React.Fragment>
                  ))}
              </div>
              <div className="space-y-5 px-6">
                {selectedProjectData.modalDescription?.map((para, index) => (
                  <p key={index + 'idontwnwlabtwhysomany'} className="text-[#F8F8F8B2] text-[16px]">
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

const VideoSectionForHeadshot = () => {
  const videoFiles = ['01', '02', '03', '04'];

  return (
    <div className="container mx-auto mb-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {videoFiles.map((file) => (
          <div key={file} className="w-full">
            <video
              className="w-full h-auto object-cover rounded-lg min-h-[100px] min-w-[100px]"
              controls
              preload="metadata"
              loop
            >
              <source
                src={`/threePicSets/headshots_dk/English/${file}.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectModal;