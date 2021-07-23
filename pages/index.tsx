import { FC, ReactElement } from 'react'
import { GetStaticProps } from 'next'
import { promises as fs } from 'fs'
import Head from 'next/head'
import path from 'path'

import { Data } from 'types/data'

import Header from 'components/Header'
import Drawer from 'components/Drawer'

import Profile from 'sections/Profile'
import Skills from 'sections/Skills'
import Education from 'sections/Education'
import Experience from 'sections/Experience'
import Languages from 'sections/Languages'
import Interests from 'sections/Interests'

type Props = {
  data: Data
  locale: string
}

const Home: FC<Props> = ({ data, locale }): ReactElement => (
  <>
    <Head>
      <title>Ricardo Barbosa - Resume</title>
      <meta name="description" content="Ricardo Barbosa's resume" />
    </Head>

    <main className="flex flex-col w-full min-h-screen 2xl:max-w-screen-2xl m-auto relative pb-6">
      <Header data={data.header} />
      <div className="flex flex-col mt-20 px-2">
        <Profile data={data.profile} />
        <div className="h-7" />
        <Skills data={data.skills} />
        <div className="h-7" />
        <Education data={data.education} />
        <div className="h-7" />
        <Experience data={data.experience} />
        <div className="h-7" />
        <Languages data={data.languages} />
        <div className="h-7" />
        <Interests data={data.interests} />
      </div>
      <Drawer locale={locale} data={data.contacts} />
    </main>
  </>
)

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const dataPath = path.join(process.cwd(), `_data/${locale}.json`)
  const data = await fs.readFile(dataPath, 'utf8')

  if (!data?.length) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      data: JSON.parse(data),
      locale
    }
  }
}

export default Home
