import { FC, ReactElement } from 'react'
import { GetStaticProps } from 'next'
import { promises as fs } from 'fs'
import Script from 'next/script'
import Head from 'next/head'
import path from 'path'

import { Data } from 'types/data'

import { GA_TRACKING_ID } from 'lib/gtag'

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

    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
    />
    <Script
      id="gtag-init"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `
      }}
    />

    <main className="relative grid w-full min-h-screen grid-cols-1 pb-6 m-auto 2xl:max-w-screen-2xl">
      <Header data={data.header} />
      <div className="px-3 mt-24 main-grid sm:mt-36 md:mt-40 md-lg:mt-52 xl:mt-56 sm:px-8 md:px-12 lg:max-w-screen-2xl lg:mx-auto">
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
