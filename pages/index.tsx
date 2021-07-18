import { FC, ReactElement } from 'react'
import Head from 'next/head'

const Home: FC = (): ReactElement => {
  return (
    <div className="h-screen px-2 flex flex-col justify-center items-center">
      <Head>
        <title>Welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-20 flex-1 flex flex-col justify-center items-center">
        <h1 className="font-display uppercase font-light tracking-widest text-xl">
          Ricardo Barbosa&apos;s website
        </h1>
      </main>
    </div>
  )
}

export default Home
