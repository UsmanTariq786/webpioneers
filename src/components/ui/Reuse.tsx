import React from "react";

interface PropsTypes {
    title: string;
    text: string;
}
const Reuse = ({ title, text }: PropsTypes) => {
    return (
        <div className="sm:ml-20">
             <button className="font-rubik text-xs uppercase tracking-wider py-2 px-3 font-semibold text-white/80 border border-white/10 rounded-full">
           {title}
        </button>
            <p className="  w-[259px] h-[112px] font-rubik font-normal text-[48px] leading-[56px]
                tracking-[-0.02em] bg-gradient-to-r from-[rgba(248,248,248,0.9)] to-[rgba(248,248,248,0.5)] bg-clip-text text-transparent" >
          {text}
            </p>
        </div>
    );
};

export default Reuse;
