import { FC } from 'react'

import { Interests as InterestsData } from 'types/data'

import SectionTitle from 'components/SectionTitle'

const Interests: FC<{ data: InterestsData }> = ({ data }) => {
  return (
    <div className="mt-7 interests-area">
      <SectionTitle>{data.title}</SectionTitle>
      <ul className="list-disc ml-5">
        {data.list.map((interest: string) => (
          <li
            className="font-display font-medium text-gray-800 mb-1 md:text-lg"
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
