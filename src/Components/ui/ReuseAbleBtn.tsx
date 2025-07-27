import React from 'react'

interface ReuseAbleBtnProps {
  text: string;
}

const ReuseAbleBtn = ({ text }: ReuseAbleBtnProps) => {
  return (
    <div className="p-[1.5px] rounded-full bg-[linear-gradient(158.39deg,rgba(255,255,255,0.1)_14.19%,rgba(255,255,255,0.000025)_50.59%,rgba(255,255,255,0.000025)_68.79%,rgba(255,255,255,0.025)_105.18%)] w-fit inline-block">
      <button
        className="
          flex items-center justify-center
          px-5 py-3
          rounded-full
          text-[16px]
          bg-[rgba(40,40,40,0.4)]
          backdrop-blur-[100px]
          shadow-[inset_2px_4px_16px_0px_#F8F8F80F]
          text-white text-base font-medium
        "
      >
        {text}
      </button>
    </div>
  )
}

export default ReuseAbleBtn
