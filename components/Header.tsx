import { FC } from 'react'
import Image from 'next/image'

import Photo from 'public/static/ricardo.png'
import { Header as HeaderData } from 'types/data'

const Header: FC<{ data: HeaderData }> = ({ data }) => (
  <div className="bg-primary h-48 lg:h-56 xl:h-[345px] z-10 relative after:z-[-1] after:bg-primary after:w-full after:h-4/5 after:absolute after:bottom-0 after:origin-right after:transform after:skew-y-[-7.3deg]">
    <div className="flex flex-col xl:flex-row h-full pr-8 sm:pr-12 md:pr-20 md-lg:pr-36 xl:pr-44 pl-3 sm:pl-8 md:px-12 xl:pl-11 xl:items-end justify-end xl:justify-between relative lg:pt-28">
      <div className="absolute left-0 -bottom-24 sm:-bottom-36 md:-bottom-40 md-lg:-bottom-52 xl:-bottom-56 pl-3 sm:pl-8 md:px-12 flex flex-col items-center">
        <div className="bg-gray-800 rounded-full w-2 h-2" />
        <div className="bg-gray-800 w-[0.15rem] h-32 sm:h-36 mt-2" />
      </div>
      <div className="flex flex-col mb-4">
        <div className="flex mb-1">
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg-xl:text-7xl font-extrabold text-gray-800 mr-1 uppercase">
            {data.firstName}
          </h1>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg-xl:text-7xl font-light text-gray-800 uppercase">
            {data.lastName}
          </h1>
        </div>
        <h2 className="font-display sm:text-lg md:text-xl lg-xl:text-2xl tracking-[0.2em] text-gray-600 uppercase">
          {data.role}
        </h2>
      </div>
      <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 relative rounded-full border-2 border-secondary overflow-hidden self-end sm:-mt-6 md-lg:-mt-14 -mb-20 md:-mb-28 md-lg:-mb-32 lg-xl:-mb-36">
        <span className="flex text-white h-full font-display text-3xl font-extrabold items-center justify-center w-full absolute">
          {`${data.firstName[0]}${data.lastName[0]}`}
        </span>
        <Image
          src={Photo}
          alt={data.photoAlt}
          className="rounded-full"
          quality={100}
          placeholder="blur"
        />
      </div>
    </div>
  </div>
)

export default Header
