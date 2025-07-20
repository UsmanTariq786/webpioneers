import React from 'react'

interface ButtonProps {
  title: string;
}

const Button = ({ title }: ButtonProps) => {
  return (
    <button 
      className="
        text-white 
        text-[16px] 
        font-rubik 
        font-semibold 
        px-5 
        py-4 
        rounded-full 
        bg-[#D4541D]/90
       
      "
      style={{
        background: `linear-gradient(0deg, var(--neutral-neutral-440, rgba(18, 18, 18, 0.4)), var(--neutral-neutral-440, rgba(18, 18, 18, 0.4))),
                     linear-gradient(0deg, rgba(212, 84, 29, 0.95), rgba(212, 84, 29, 0.95))`
      }}
    >
      {title}
    </button>
  )
}

export default Button
