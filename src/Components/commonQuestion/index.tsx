import React from 'react';

interface CommonQuestionProps {
  question: string;
}

const CommonQuestion: React.FC<CommonQuestionProps> = ({ question }) => {
  return (
    <div>
      <div
        className="rounded-[16px] p-[1.5px]"
        style={{
          background: `linear-gradient(0deg, rgba(248, 248, 248, 0.05), rgba(248, 248, 248, 0.05)),
                       conic-gradient(from 90deg at 50% 50%, rgba(255,255,255,0) -35.78deg, rgba(255,255,255,0) 260deg, rgba(255,255,255,0.3) 350deg, rgba(255,255,255,0) 360deg)`,
        }}
      >
        <div className="rounded-[14.5px] bg-[#202020] bg-opacity-20">
          <button className="w-full h-full rounded-[14.5px] bg-transparent font-rubik text-xs uppercase tracking-wider px-6 py-2 font-semibold text-[rgba(248,248,248,0.5)]">
            {question}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommonQuestion;
