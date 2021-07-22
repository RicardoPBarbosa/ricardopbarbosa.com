import { FC } from 'react'

import { Interests as InterestsData } from 'types/data'

import SectionTitle from 'components/SectionTitle'

const Interests: FC<{ data: InterestsData }> = ({ data }) => {
  return (
    <div className="flex flex-col">
      <SectionTitle>{data.title}</SectionTitle>
      <ul className="list-disc ml-5">
        {data.list.map((interest: string) => (
          <li
            className="font-display font-medium text-gray-800 mb-1"
            key={interest}
          >
            {interest}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Interests
