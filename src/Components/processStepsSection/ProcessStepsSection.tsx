import React from 'react'
import StepCard from '../stepCard/StepCard'
import CommonQuestion from '@/Components/commonQuestion'
 
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
    image: '/ideation.svg',
  },
  {
    stepNumber: 2,
    title: 'Design',
    description:
      'We make it look sharp. From wireframes to final UI, you’ll see it come to life.',
    image: '/design.svg',
  },
  {
    stepNumber: 3,
    title: 'Launch',
    description:
      'Your site goes live. You flex. We handle the tech bits and hit publish.',
    image: '/launch.svg',
  },
]

const ProcessStepsSection = () => (
  <section className="mt-12 ">
    {/* heading */}
    <div className="flex flex-col items-center mb-10">
     <CommonQuestion question='HOW IT WORKS'/>
      <p className="w-[90%] text-[32px] leading-[40px] md:text-[48px] md:leading-[56px] pt-[10px] font-normal font-['Rubik'] text-center tracking-[-0.02em]
               bg-[linear-gradient(92.95deg,_rgba(248,248,248,0.9)_0.1%,_rgba(248,248,248,0.5)_100.1%)]
               bg-clip-text text-transparent max-w-[600px]">
        What happens once <br /> we team up
      </p>
    </div>

    <div className="h-6 lg:h-0"></div>
    {/* cards in a single responsive row */}
  <div className="grid gap-16 md:gap-10 xl:gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 sm:px-8 px-3 md:p-10">
    
  {steps.map((step) => (
    <StepCard
      key={step.stepNumber}
      cardNumber={step.stepNumber}
      title={step.title}
      description={step.description}
      image={step.image}
    />
  ))}
</div>
<div className="h-12 lg:h-0"></div>
  </section>
)

export default ProcessStepsSection
