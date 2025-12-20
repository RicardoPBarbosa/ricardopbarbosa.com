import { FC } from 'react'

import { LanguageItem, Languages as LanguagesData } from 'types/data'

import SectionTitle from 'components/SectionTitle'

const Languages: FC<{ data: LanguagesData }> = ({ data }) => {
  return (
    <div className="mt-7 languages-area">
      <SectionTitle>{data.title}</SectionTitle>
      <ul className="list-disc ml-5">
        {data.list.map((language: LanguageItem) => (
          <li
            className="font-display font-medium text-gray-800 mb-1 md:text-lg"
            key={language.language}
          >
            {language.language}{' '}
            <span className="ml-1 font-display font-normal text-sm md:text-base text-gray-500">
              ({language.level})
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Languages
