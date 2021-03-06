import { FC } from 'react'

import { Skills as SkillsData, TechSkills } from 'types/data'

import SectionTitle from 'components/SectionTitle'

const Skills: FC<{ data: SkillsData }> = ({ data }) => {
  return (
    <div className="mt-7 skills-area">
      <SectionTitle>{data.title}</SectionTitle>
      <h4 className="uppercase font-display text-sm md:text-base font-extrabold text-gray-500 tracking-widest mb-2">
        {data.softSkillsTitle}
      </h4>
      <ul className="list-disc ml-5">
        {data.softSkills.map((skill: string) => (
          <li
            className="font-display font-medium text-gray-800 mb-1 md:text-lg"
            key={skill}
          >
            {skill}
          </li>
        ))}
      </ul>
      <h4 className="uppercase font-display text-sm md:text-base font-extrabold text-gray-500 tracking-widest mt-4 mb-2">
        {data.techSkillsTitle}
      </h4>
      <ul className="list-disc ml-5">
        {data.techSkills.map((item: TechSkills) => (
          <li
            className="font-display font-medium text-gray-800 mb-1 lg:text-lg"
            key={item.skill}
          >
            {item.skill}{' '}
            <span className="ml-1 font-display font-normal text-sm text-gray-500 md:text-base">
              {item.subSkills.join(', ')}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Skills
