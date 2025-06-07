import { useRef, useEffect } from 'react'
import { ExperienceType } from '../types/experience'

const Experience = ({ Experience }: { Experience: ExperienceType }) => {
  const responsibilites = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (responsibilites.current) {
      responsibilites.current.innerHTML = Experience.responsibilities
    }
  })

  return (
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="10"
        >
          <path
            fillRule="nonzero"
            d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
          />
        </svg>
      </div>
      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-neutral-700 p-4 rounded border text-white border-slate-200 shadow dark:bg-primary-800">
        <div className="font-bold">
          {`${Experience.companyName} - ${Experience.role}`}
        </div>
        <time className="font-caveat font-medium text-sm">
          {`${Experience.startedAt} - ${Experience.endedAt}`}
        </time>
        <div className="text-sm my-2" ref={responsibilites} />
      </div>
    </div>
  )
}

export default Experience
