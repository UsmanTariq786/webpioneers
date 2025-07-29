import React from 'react'
import StepCard from '../stepCard/StepCard'

interface Step {
  stepNumber: number
  title: string
  description: string
  image: string
}

const steps: Step[] = [
  {
    stepNumber: 1,
    title: 'Ideation',
    description:
      'You talk, we listen (and sketch stuff). We get all your thoughts out and turn them into a plan.',
    image: '/Frame11.png',
  },
  {
    stepNumber: 2,
    title: 'Design',
    description:
      'We make it look sharp. From wireframes to final UI, you’ll see it come to life.',
    image: '/Frame12.png',
  },
  {
    stepNumber: 3,
    title: 'Launch',
    description:
      'Your site goes live. You flex. We handle the tech bits and hit publish.',
    image: '/Frame13.png',
  },
]

const ProcessStepsSection = () => (
  <section className="mt-12 ">
    {/* heading */}
    <div className="flex flex-col items-center mb-10">
<div
  className="rounded-[16px] p-[1.5px]"
  style={{
    background: `linear-gradient(0deg, rgba(248, 248, 248, 0.05), rgba(248, 248, 248, 0.05)),
                 conic-gradient(from 90deg at 50% 50%, rgba(255,255,255,0) -35.78deg, rgba(255,255,255,0) 260deg, rgba(255,255,255,0.3) 350deg, rgba(255,255,255,0) 360deg)`,
  }}
>
  <div className="rounded-[14.5px] bg-[#202020] bg-opacity-20">
    <button className="w-full h-full rounded-[14.5px] bg-transparent font-rubik text-xs uppercase tracking-wider px-6 py-2 font-semibold
     text-[rgba(248,248,248,0.5)]">
      HOW IT WORKS
    </button>
  </div>
</div>
      <p className="text-[48px] leading-[56px] font-normal font-['Rubik'] text-center tracking-[-0.02em]
               bg-[linear-gradient(92.95deg,_rgba(248,248,248,0.9)_0.1%,_rgba(248,248,248,0.5)_100.1%)]
               bg-clip-text text-transparent max-w-[600px]">
        What happens once we team up
      </p>
    </div>

    {/* cards in a single responsive row */}
    <div className="grid gap-6 md:grid-cols-3 sm:px-30 p-10">
      {steps.map((step) => (
        <StepCard key={step.stepNumber}cardNumber = {step.stepNumber} title ={step.title} description={step.description} image={step.image} />
      ))}
    </div>
  </section>
)

export default ProcessStepsSection
