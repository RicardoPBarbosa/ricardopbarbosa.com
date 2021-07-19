import { FC, ReactElement } from 'react'
import { GetStaticProps } from 'next'
import { promises as fs } from 'fs'
import Head from 'next/head'
import Link from 'next/link'
import path from 'path'

import { Data } from 'types/data'

type Props = {
  data: Data
}

const Home: FC<Props> = ({ data }): ReactElement => {
  return (
    <div className="h-screen px-2 flex flex-col justify-center items-center">
      <Head>
        <title>Welcome</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Ricardo Barbosa's website" />
      </Head>

      <main className="py-20 flex-1 flex flex-col justify-center items-center">
        <h1 className="font-display uppercase font-light tracking-widest text-xl">
          {data.welcome}
        </h1>
        <div className="flex space-x-4 mt-2">
          <Link href="/" locale="pt">
            <a className="font-display font-bold">PT</a>
          </Link>
          <Link href="/" locale="en">
            <a className="font-display font-bold">EN</a>
          </Link>
        </div>
      </main>
    </div>
  )
}

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
      data: JSON.parse(data)
    }
  }
}

export default Home
