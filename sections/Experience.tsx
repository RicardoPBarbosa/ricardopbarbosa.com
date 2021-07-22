import { FC } from 'react'

import { Experience as ExperienceData, ExperienceEntry } from 'types/data'

import SectionTitle from 'components/SectionTitle'

const Experience: FC<{ data: ExperienceData }> = ({ data }) => {
  return (
    <div className="flex flex-col">
      <SectionTitle>{data.title}</SectionTitle>
      <div className="flex flex-col space-y-6">
        {data.entries.map((entry: ExperienceEntry) => (
          <div key={entry.workPlace} className="flex flex-col">
            <div className="flex justify-between mb-2">
              <h4 className="font-display uppercase text-sm text-gray-500 font-medium tracking-wider">
                {entry.role}
              </h4>
              <li className="font-display text-sm text-gray-700 font-extrabold tracking-wider">
                {entry.dateRange}
              </li>
            </div>
            <h5 className="font-display text-sm text-gray-800 font-extrabold uppercase tracking-wider">
              {entry.workPlace}
            </h5>
            <p className="font-body text-gray-600">{entry.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
