import { FC } from 'react'
import Image from 'next/image'

import Photo from 'public/static/ricardo.png'
import { Header as HeaderData } from 'types/data'

const Header: FC<{ data: HeaderData }> = ({ data }) => (
  <div className="bg-primary h-48 2xl:h-[345px] z-10 relative after:z-[-1] after:bg-primary after:w-full after:h-4/5 after:absolute after:bottom-0 after:origin-right after:transform after:skew-y-[-7.3deg]">
    <div className="flex flex-col 2xl:flex-row h-full pr-2 2xl:pr-44 pl-2 sm:pl-6 2xl:pl-11 2xl:items-end justify-end 2xl:justify-between relative">
      <div className="absolute left-0 -bottom-20 pl-2 sm:pl-6 flex flex-col items-center">
        <div className="bg-gray-800 rounded-full w-2 h-2" />
        <div className="bg-gray-800 w-[0.15rem] h-28 mt-2" />
      </div>
      <div className="flex flex-col mb-4">
        <div className="flex mb-1">
          <h1 className="font-display text-3xl 2xl:text-7xl font-extrabold text-gray-800 mr-1 uppercase">
            {data.firstName}
          </h1>
          <h1 className="font-display text-3xl 2xl:text-7xl font-light text-gray-800 uppercase">
            {data.lastName}
          </h1>
        </div>
        <h2 className="font-display 2xl:text-2xl tracking-[0.2em] text-gray-600 uppercase">
          {data.role}
        </h2>
      </div>
      <div className="w-28 h-28 2xl:w-56 2xl:h-56 relative rounded-full border-2 border-secondary overflow-hidden self-end -mb-16">
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
