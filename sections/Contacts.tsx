import { FC } from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import { MdEmail } from 'react-icons/md'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { IoEarthSharp } from 'react-icons/io5'

import { Contacts as ContactsData } from 'types/data'

const Contacts: FC<{ data: ContactsData; display: 'drawer' | 'body' }> = ({
  data,
  display
}) => (
  <div
    className={`${
      display === 'drawer'
        ? 'grid md:hidden'
        : 'hidden md:grid -ml-2.5 contacts-area mt-2'
    }`}
  >
    <ul className="flex flex-col space-y-2 md:space-y-3">
      <li className="flex items-center space-x-2">
        <span className="bg-gray-800 w-7 h-7 rounded-full flex justify-center items-center">
          <HiLocationMarker size={16} color="white" />
        </span>
        <p className="font-body text-sm md:text-base text-gray-800 font-medium">
          {data.address}
        </p>
      </li>
      <li className="flex items-center space-x-2">
        <span className="bg-gray-800 w-7 h-7 rounded-full flex justify-center items-center">
          <MdEmail size={16} color="white" />
        </span>
        <p className="font-body text-sm md:text-base text-gray-800 font-medium underline">
          <a href={`mailto:${data.email}`} target="_blank" rel="noreferrer">
            {data.email}
          </a>
        </p>
      </li>
      <li className="flex items-center space-x-2">
        <span className="bg-gray-800 w-7 h-7 rounded-full flex justify-center items-center">
          <IoEarthSharp size={16} color="white" />
        </span>
        <p className="font-body text-sm md:text-base text-gray-800 font-medium underline">
          <a href={`https://${data.website}`} target="_blank" rel="noreferrer">
            {data.website}
          </a>
        </p>
      </li>
      <li className="flex items-center space-x-2">
        <span className="bg-gray-800 w-7 h-7 rounded-full flex justify-center items-center">
          <FaLinkedinIn size={16} color="white" />
        </span>
        <p className="font-body text-sm md:text-base text-gray-800 font-medium underline">
          <a href={`https://${data.linkedin}`} target="_blank" rel="noreferrer">
            {data.linkedin}
          </a>
        </p>
      </li>
      <li className="flex items-center space-x-2">
        <span className="bg-gray-800 w-7 h-7 rounded-full flex justify-center items-center">
          <FaGithub size={16} color="white" />
        </span>
        <p className="font-body text-sm md:text-base text-gray-800 font-medium underline">
          <a href={`https://${data.github}`} target="_blank" rel="noreferrer">
            {data.github}
          </a>
        </p>
      </li>
    </ul>
  </div>
)

export default Contacts
