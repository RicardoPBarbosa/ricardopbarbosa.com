import { FC, useRef, useState } from 'react'
import Link from 'next/link'
import { RiMenu5Fill, RiCloseFill } from 'react-icons/ri'
import { HiDownload } from 'react-icons/hi'

import Contacts from 'sections/Contacts'

import Transition from 'components/Transition'

import { track } from 'lib/tracking'

import { Contacts as ContactsData } from 'types/data'

const Drawer: FC<{ data: ContactsData; locale: string }> = ({
  data,
  locale
}) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement | null>(null)

  const downloadAction = () => {
    if (process.env.NODE_ENV === 'production') {
      track('Download CV', { locale })
    }
  }

  return (
    <div className="fixed bottom-0 z-20 flex justify-end w-screen max-w-(--breakpoint-2xl) 2xl:m-auto">
      <Transition
        nodeRef={drawerRef}
        show={menuOpen}
        enter="transition-transform ease-in duration-100 transform"
        enterFrom="translate-y-96"
        enterTo="translate-y-0"
        leave="transition-transform ease-in duration-75 transform"
        leaveFrom="translate-y-0"
        leaveTo="translate-y-96"
      >
        <div
          ref={drawerRef}
          className="origin-bottom w-full md:w-2/6 xl:w-[300px] h-96 md:h-auto right-0 bg-primary z-10 rounded-t-2xl pl-4 pr-4 sm:pr-20 md:pr-4 pt-4 md:pb-11 flex flex-col md:justify-between"
        >
          <Contacts data={data} display="drawer" />
          <div className="flex items-center my-6 md:mt-1">
            <a
              href={`/cv/${locale}.pdf`}
              className="flex items-center justify-center flex-1 h-12 text-gray-800 border-2 border-gray-800 rounded-full hover:bg-gray-800 hover:text-secondary"
              target="_blank"
              download="ricardobarbosa-resume.pdf"
              onClick={downloadAction}
            >
              <HiDownload size={22} />
              <span className="ml-2 text-sm font-medium tracking-wide font-body">
                Download CV
              </span>
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Link
              href="/"
              locale="pt"
              className={`${
                locale === 'pt' ? 'bg-gray-800 text-secondary' : 'text-gray-800'
              } rounded-md py-2 px-3 shadow-xs font-display font-medium`}
            >
              PT
            </Link>
            <Link
              href="/"
              locale="en"
              className={`${
                locale === 'en' ? 'bg-gray-800 text-secondary' : 'text-gray-800'
              } rounded-md py-2 px-3 shadow-xs font-display font-medium`}
            >
              EN
            </Link>
          </div>
        </div>
      </Transition>
      <button
        className="absolute z-20 flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full shadow-md bottom-4 md:bottom-8 right-4 md:right-8 text-secondary cursor-pointer"
        aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((previous) => !previous)}
      >
        {menuOpen ? <RiCloseFill size={24} /> : <RiMenu5Fill size={24} />}
      </button>
    </div>
  )
}

export default Drawer
