"use client";

interface FolderProps {
  image1Url: any;
  image2Url: any;
  image3Url: any;
  projectName:any;
  description:any;
  superCategory:any
}


const FolderWorkDesignComp = ({ image1Url, image2Url, image3Url, projectName, description, superCategory }: FolderProps) => {
  return (
    <div className="flex flex-col mb:2">
    
    <div className="relative w-full h-[250px] md:w-[350px] md:h-[350px]">
      {/* First Layer (Base with Clip-Path and Gradient) */}
      <div
        className="absolute w-full h-full bg-[linear-gradient(180deg,rgba(235,235,235,0.1)_-27.27%,rgba(196,196,196,0.1)_127.27%)]"
        style={{ clipPath: "polygon(43% 31%, 55% 41%, 100% 42%, 100% 100%, 0 100%, 0 31%)" }}
      ></div>
      {/* Second Layer (Image 1 - Straight) */}
      <img
        src={image1Url}
        alt="Folder Content 1"
        className="absolute top-[10%] left-[10%] w-[40%] h-[60%] object-cover rounded-sm rotate-0 z-10 md:top-[15%] md:left-[15%] md:w-[45%] md:h-[65%]"
      />
      {/* Third Layer (Image 2 - Slightly Left-Tilted) */}
      <img
        src={image2Url}
        alt="Folder Content 2"
        className="absolute top-[15%] left-[25%] w-[40%] h-[60%] object-cover rounded-sm -rotate-6 z-20 md:top-[20%] md:left-[30%] md:w-[45%] md:h-[65%] md:-rotate-8"
      />
      {/* Fourth Layer (Image 3 - Slightly Right-Tilted) */}
      <img
        src={image3Url}
        alt="Folder Content 3"
        className="absolute top-[20%] left-[40%] w-[40%] h-[60%] object-cover rounded-sm rotate-6 z-30 md:top-[25%] md:left-[45%] md:w-[45%] md:h-[65%] md:rotate-8"
      />
      {/* Top Layer (Completing Folder Design) */}
      <div
        className="absolute bottom-0 w-full h-[60%] bg-[linear-gradient(180deg,#7F7F7F_-76.19%,#333333_100%)] z-40"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 80%)" }}
      ></div>
      {/* Icon on Top Layer */}
      <img
        src="/logoGreish.svg"
        alt="Folder Icon"
        className="absolute top-[-10px] right-[-10px] w-10 h-10 z-50 md:top-[-15px] md:right-[-15px] md:w-12 md:h-12"
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