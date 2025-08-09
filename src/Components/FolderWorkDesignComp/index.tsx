"use client";

interface FolderProps {
  image1Url: any;
  image2Url: any;
  image3Url: any;
  projectName: any;
  description: any;
  superCategory: any;
  onClick: () => void; // Add this
}
// transition-all duration-300
const FolderWorkDesignComp = ({
  image1Url,
  image2Url,
  image3Url,
  projectName,
  description,
  superCategory,
  onClick,
}: FolderProps) => {
  return (
    <div className="mb-2 group flex flex-col items-center justify-center" onClick={onClick}>
      <div className="relative overflow-hidden h-[120px] w-[150px] lg:h-[250px] lg:w-[270px] md:h-[200px] md:w-[230px] sm:h-[150px] sm:w-[180px]   cursor-pointer ">
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
          className="absolute transition-all duration-300 top-[15%] group-hover:top-[10%] left-[40%] group-hover:left-[50%] w-[50%] h-[50%] object-cover rounded-xl rotate-0 z-10 border-2 border-[#6D6D6D] md:top-[15%] md:left-[45%] md:w-[50%] md:h-[50%]"
        />
        {/* Third Layer (Image 2 - Slightly Left-Tilted) */}
        <img
          src={image2Url}
          alt="Folder Content 2"
          className="absolute transition-all duration-300 top-[25%] group-hover:top-[15%] left-[25%] w-[50%] h-[50%] object-cover rounded-xl rotate-8 z-30 border-2 border-[#6D6D6D] md:top-[30%] md:left-[30%] md:w-[50%] md:h-[50%] md:rotate-12"
        />
        {/* Fourth Layer (Image 3 - Slightly Right-Tilted) */}
        <img
          src={image3Url}
          alt="Folder Content 3"
          className="absolute transition-all duration-300  top-[40%] group-hover:top-[30%] left-[10%] group-hover:left-[6%] w-[50%] h-[50%] object-cover rounded-xl -rotate-10 z-20 border-2 border-[#6D6D6D] md:top-[40%] md:left-[10%] md:w-[50%] md:h-[50%] md:-rotate-15"
        />
        {/* Top Layer (Completing Folder Design) */}
        <div className="absolute bottom-0 w-full h-[45%] group-hover:h-[30%] transition-all duration-300 bg-[linear-gradient(180deg,#7F7F7F_-76.19%,#333333_100%)] z-40 rounded-2xl"></div>
        {/* Icon on Top Layer */}
        <img
          src="/shortlogo.png"
          alt="Folder Icon"
          className="absolute bottom-[10px] right-[10px] z-50 md:bottom-[15px] md:right-[15px] w-[20px] sm:w-[25px] lg:w-[30px]"
        />
      </div>
      <div className="text-center mt-16">
  <h3 style={{ color: 'rgba(248, 248, 248, 0.95)' }} className="text-[18px] md:text-2xl  font-semibold mb-2">
    {projectName}
  </h3>
  <p style={{ color: 'rgba(248, 248, 248, 0.5)' }} className="text-md hidden md:block">
    {description}
  </p>
</div>
    </div>
  );
};

export default FolderWorkDesignComp;
