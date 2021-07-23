import { FC, useState } from 'react'
import Link from 'next/link'
import { RiMenu5Fill, RiCloseFill } from 'react-icons/ri'
import { HiLocationMarker } from 'react-icons/hi'
import { MdEmail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoEarthSharp } from 'react-icons/io5'

import { Contacts as ContactsData } from 'types/data'

import Transition from 'components/Transition'

const Drawer: FC<{ data: ContactsData }> = ({ data }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  return (
    <>
      <Transition
        show={menuOpen}
        enter="transition-transform ease-in duration-100 transform"
        enterFrom="translate-y-60"
        enterTo="-translate-y-0"
        leave="transition-transform ease-in duration-75 transform"
        leaveFrom="-translate-y-0"
        leaveTo="translate-y-60"
      >
        <div className="origin-bottom fixed bottom-0 w-full h-60 bg-primary z-10 rounded-lg pl-2 pr-14 pb-14 pt-4">
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
                <p className="font-body text-sm text-gray-800 font-medium">
                  {data.email}
                </p>
              </li>
              <li className="flex items-center space-x-2">
                <span className="bg-gray-800 w-7 h-7 rounded-full flex justify-center items-center">
                  <FaPhoneAlt size={16} color="white" />
                </span>
                <p className="font-body text-sm text-gray-800 font-medium">
                  {data.phone}
                </p>
              </li>
              <li className="flex items-center space-x-2">
                <span className="bg-gray-800 w-7 h-7 rounded-full flex justify-center items-center">
                  <IoEarthSharp size={16} color="white" />
                </span>
                <p className="font-body text-sm text-gray-800 font-medium">
                  {data.website}
                </p>
              </li>
            </ul>
          </div>
          <div className="flex space-x-2 mt-4 items-center">
            <Link href="/" locale="pt">
              <a className="bg-gray-800 text-white rounded-md py-1 px-2 shadow-sm font-display font-medium">
                PT
              </a>
            </Link>
            <Link href="/" locale="en">
              <a className="text-gray-800 rounded-md py-1 px-2 shadow-sm font-display font-medium">
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
