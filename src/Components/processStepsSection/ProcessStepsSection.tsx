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
      <button className="font-rubik text-xs uppercase tracking-wider py-2 px-3 font-semibold text-white/80 border border-white/10 rounded-full">
        How it works
      </button>
      <p className="mt-4 font-rubik text-center text-white/80 text-2xl sm:text-[48px] leading-tight max-w-lg">
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
