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
        <span className="flex items-center justify-center bg-gray-800 rounded-full w-7 h-7">
          <HiLocationMarker size={16} color="white" />
        </span>
        <p className="text-sm font-medium text-gray-800 font-body md:text-base">
          {data.address}
        </p>
      </li>
      <li className="flex items-center space-x-2">
        <span className="flex items-center justify-center bg-gray-800 rounded-full w-7 h-7">
          <MdEmail size={16} color="white" />
        </span>
        <p className="text-sm font-medium text-gray-800 underline font-body md:text-base">
          <a
            href={`mailto:${data.email}`}
            target="_blank"
            data-umami-event="outbound-link-click"
            data-umami-event-url={`mailto:${data.email}`}
            rel="noreferrer"
          >
            {data.email}
          </a>
        </p>
      </li>
      <li className="flex items-center space-x-2">
        <span className="flex items-center justify-center bg-gray-800 rounded-full w-7 h-7">
          <IoEarthSharp size={16} color="white" />
        </span>
        <p className="text-sm font-medium text-gray-800 underline font-body md:text-base">
          <a
            href={`https://${data.website}`}
            target="_blank"
            data-umami-event="outbound-link-click"
            data-umami-event-url={`https://${data.website}`}
            rel="noreferrer"
          >
            {data.website}
          </a>
        </p>
      </li>
      <li className="flex items-center space-x-2">
        <span className="flex items-center justify-center bg-gray-800 rounded-full w-7 h-7">
          <FaLinkedinIn size={16} color="white" />
        </span>
        <p className="text-sm font-medium text-gray-800 underline font-body md:text-base">
          <a
            href={`https://${data.linkedin}`}
            target="_blank"
            data-umami-event="outbound-link-click"
            data-umami-event-url={`https://${data.linkedin}`}
            rel="noreferrer"
          >
            {data.linkedin}
          </a>
        </p>
      </li>
      <li className="flex items-center space-x-2">
        <span className="flex items-center justify-center bg-gray-800 rounded-full w-7 h-7">
          <FaGithub size={16} color="white" />
        </span>
        <p className="text-sm font-medium text-gray-800 underline font-body md:text-base">
          <a
            href={`https://${data.github}`}
            target="_blank"
            data-umami-event="outbound-link-click"
            data-umami-event-url={`https://${data.github}`}
            rel="noreferrer"
          >
            {data.github}
          </a>
        </p>
      </li>
    </ul>
  </div>
)

export default Contacts
