"use client";

interface FolderProps {
  image1Url: any;
  image2Url: any;
  image3Url: any;
  projectName: any;
  description: any;
  superCategory: any;
}

const FolderWorkDesignComp = ({ image1Url, image2Url, image3Url, projectName, description, superCategory }: FolderProps) => {
  return (
    <div className="flex flex-col mb-2 overflow-hidden border-2" >
      <div className="relative w-full h-[250px] md:w-[350px] md:h-[350px] overflow-hidden">
        {/* First Layer (Base with SVG) */}
        <img
          src="/folderBackLayer.svg"
          alt="Folder Back Layer"
          className="absolute object-cover w-full bottom-0"
        />
        {/* Second Layer (Image 1 - Straight) */}
        <img
          src={image1Url}
          alt="Folder Content 1"
          className="absolute top-[20%] left-[40%] w-[40%] h-[60%] object-cover rounded-xl rotate-0 z-10 border-2 border-[#6D6D6D] md:top-[25%] md:left-[45%] md:w-[45%] md:h-[65%]"
        />
        {/* Third Layer (Image 2 - Slightly Left-Tilted) */}
        <img
          src={image2Url}
          alt="Folder Content 2"
          className="absolute top-[25%] left-[25%] w-[40%] h-[60%] object-cover rounded-xl rotate-8 z-30 border-2 border-[#6D6D6D] md:top-[30%] md:left-[30%] md:w-[45%] md:h-[65%] md:rotate-12"
        />
        {/* Fourth Layer (Image 3 - Slightly Right-Tilted) */}
        <img
          src={image3Url}
          alt="Folder Content 3"
          className="absolute top-[40%] left-[10%] w-[40%] h-[60%] object-cover rounded-xl -rotate-10 z-20 border-2 border-[#6D6D6D] md:top-[40%] md:left-[15%] md:w-[45%] md:h-[65%] md:-rotate-15"
        />
        {/* Top Layer (Completing Folder Design) */}
        <div
          className="absolute bottom-0 w-full h-[40%] bg-[linear-gradient(180deg,#7F7F7F_-76.19%,#333333_100%)] z-40 rounded-3xl"
        ></div>
        {/* Icon on Top Layer */}
        <img
          src="/shortlogo.png"
          alt="Folder Icon"
          className="absolute bottom-[10px] right-[10px] z-50 md:bottom-[15px] md:right-[15px]"
        />
      </div>
      <div className="text-white">
        <h3 className="text-xl font-semibold mb-2">{projectName}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default FolderWorkDesignComp;