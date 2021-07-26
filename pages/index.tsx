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
import Languages from 'sections/Languages'
import Interests from 'sections/Interests'
import Contacts from 'sections/Contacts'
import Education from 'sections/Education'
import Experience from 'sections/Experience'

type Props = {
  data: Data
  locale: string
}

const Home: FC<Props> = ({ data, locale }): ReactElement => (
  <>
    <Head>
      <title>Ricardo Barbosa</title>
      <meta name="description" content="Ricardo Barbosa's website" />
    </Head>

    <main className="grid grid-cols-1 w-full min-h-screen 2xl:max-w-screen-2xl m-auto relative pb-6">
      <Header data={data.header} />
      <div className="main-grid mt-24 sm:mt-36 md:mt-40 md-lg:mt-52 xl:mt-56 px-3 sm:px-8 md:px-12 lg:max-w-screen-2xl lg:mx-auto">
        <Contacts data={data.contacts} display="body" />
        <Profile data={data.profile} />
        <Skills data={data.skills} />
        <Experience data={data.experience} />
        <Education data={data.education} />
        <Languages data={data.languages} />
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
