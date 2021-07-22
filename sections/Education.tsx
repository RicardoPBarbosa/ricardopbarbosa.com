import { FC } from 'react'

import { Degree, Education as EducationData } from 'types/data'

import SectionTitle from 'components/SectionTitle'

const Education: FC<{ data: EducationData }> = ({ data }) => {
  return (
    <div className="flex flex-col">
      <SectionTitle>{data.title}</SectionTitle>
      <div className="flex flex-col space-y-2">
        {data.degrees.map((degree: Degree) => (
          <div key={degree.title} className="flex items-stretch">
            <div className="flex flex-col items-center mr-3">
              <div className="bg-gray-800 rounded-full w-2 h-2" />
              <div className="h-full w-0.5 bg-gray-800 mt-2"></div>
            </div>
            <div className="flex flex-col flex-1 pb-2">
              <h4 className="uppercase font-display text-gray-700 font-extrabold leading-3 tracking-wider text-sm mb-1">
                {degree.title}
              </h4>
              <p className="font-display text-gray-500 font-normal tracking-wider text-sm">
                {degree.place}
              </p>
              <p className="font-display text-gray-500 font-normal tracking-wider text-sm">
                {degree.dateRange}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
