import { FC, useState } from 'react'
import Link from 'next/link'
import { RiMenu5Fill, RiCloseFill } from 'react-icons/ri'
import { HiLocationMarker } from 'react-icons/hi'
import { MdEmail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoEarthSharp } from 'react-icons/io5'
import { GrLinkedinOption, GrGithub } from 'react-icons/gr'

import { Contacts as ContactsData } from 'types/data'

import Transition from 'components/Transition'

const Drawer: FC<{ data: ContactsData; locale: string }> = ({
  data,
  locale
}) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  return (
    <>
      <Transition
        show={menuOpen}
        enter="transition-transform ease-in duration-100 transform"
        enterFrom="translate-y-64"
        enterTo="-translate-y-0"
        leave="transition-transform ease-in duration-75 transform"
        leaveFrom="-translate-y-0"
        leaveTo="translate-y-64"
      >
        <div className="origin-bottom fixed bottom-0 w-full h-64 bg-primary z-10 rounded-lg pl-2 pr-14 pt-4">
          <div className="flex flex-col space-y-2">
            <ul className="flex flex-col space-y-2">
              <li className="flex items-center space-x-2">
                <span className="bg-gray-800 w-7 h-7 rounded-full flex justify-center items-center">
                  <HiLocationMarker size={16} color="white" />
                </span>
                <p className="font-body text-sm text-gray-800 font-medium">
                  {data.address}
                </p>
              </li>
              <li className="flex items-center space-x-2">
                <span className="bg-gray-800 w-7 h-7 rounded-full flex justify-center items-center">
                  <MdEmail size={16} color="white" />
                </span>
                <p className="font-body text-sm text-gray-800 font-medium underline">
                  <a
                    href={`mailto:${data.email}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {data.email}
                  </a>
                </p>
              </li>
              <li className="flex items-center space-x-2">
                <span className="bg-gray-800 w-7 h-7 rounded-full flex justify-center items-center">
                  <FaPhoneAlt size={16} color="white" />
                </span>
                <p className="font-body text-sm text-gray-800 font-medium underline">
                  <a
                    href={`tel:${data.phone}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {data.phone}
                  </a>
                </p>
              </li>
              <li className="flex items-center space-x-2">
                <span className="bg-gray-800 w-7 h-7 rounded-full flex justify-center items-center">
                  <IoEarthSharp size={16} color="white" />
                </span>
                <p className="font-body text-sm text-gray-800 font-medium underline">
                  <a
                    href={`https://${data.website}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {data.website}
                  </a>
                </p>
              </li>
            </ul>
          </div>
          <div className="flex space-x-2 mt-3 items-center">
            <Link href="https://linkedin.com/in/ricardopbarbosa">
              <a
                className="bg-gray-800 px-3 h-8 rounded-full flex justify-center items-center text-white"
                target="_blank"
              >
                <GrLinkedinOption size={16} color="white" />
                <span className="font-body ml-2 text-sm font-medium tracking-wide">
                  LinkedIn
                </span>
              </a>
            </Link>
            <Link href="https://github.com/RicardoPBarbosa">
              <a
                className="bg-gray-800 w-24 h-8 rounded-full flex justify-center items-center text-white"
                target="_blank"
              >
                <GrGithub size={18} color="white" />
                <span className="font-body ml-2 text-sm font-medium tracking-wide">
                  Github
                </span>
              </a>
            </Link>
          </div>
          <div className="flex space-x-2 mt-3 items-center">
            <Link href="/" locale="pt">
              <a
                className={`${
                  locale === 'pt' ? 'bg-gray-800 text-white' : 'text-gray-800'
                } rounded-md py-1 px-2 shadow-sm font-display font-medium`}
              >
                PT
              </a>
            </Link>
            <Link href="/" locale="en">
              <a
                className={`${
                  locale === 'en' ? 'bg-gray-800 text-white' : 'text-gray-800'
                } rounded-md py-1 px-2 shadow-sm font-display font-medium`}
              >
                EN
              </a>
            </Link>
          </div>
        </div>
      </Transition>
      <button
        className="fixed bottom-4 right-4 w-14 h-14 bg-gray-800 flex justify-center items-center rounded-full shadow-md z-20"
        onClick={() => setMenuOpen((prev: boolean) => !prev)}
      >
        {menuOpen ? (
          <RiCloseFill size={24} color="white" />
        ) : (
          <RiMenu5Fill size={24} color="white" />
        )}
      </button>
    </>
  )
}

export default Drawer
