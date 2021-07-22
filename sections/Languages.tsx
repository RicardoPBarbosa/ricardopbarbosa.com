import { FC } from 'react'

import { LanguageItem, Languages as LanguagesData } from 'types/data'

import SectionTitle from 'components/SectionTitle'

const Languages: FC<{ data: LanguagesData }> = ({ data }) => {
  return (
    <div className="flex flex-col">
      <SectionTitle>{data.title}</SectionTitle>
      <ul className="list-disc ml-5">
        {data.list.map((language: LanguageItem) => (
          <li
            className="font-display font-medium text-gray-800 mb-1"
            key={language.language}
          >
            {language.language}{' '}
            <span className="ml-1 font-display font-normal text-sm text-gray-500">
              ({language.level})
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Languages
