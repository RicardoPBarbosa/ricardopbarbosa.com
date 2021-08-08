import { FC, useState } from 'react'
import Link from 'next/link'
import { RiMenu5Fill, RiCloseFill } from 'react-icons/ri'
import { HiDownload } from 'react-icons/hi'

import Contacts from 'sections/Contacts'

import Transition from 'components/Transition'

import * as gtag from 'lib/gtag'

import { Contacts as ContactsData } from 'types/data'

const Drawer: FC<{ data: ContactsData; locale: string }> = ({
  data,
  locale
}) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const downloadAction = () => {
    if (process.env.NODE_ENV === 'production') {
      gtag.event({
        action: 'select_content',
        category: 'engagement',
        label: 'Download CV',
        value: locale
      })
    }
  }

  return (
    <>
      <div className="fixed bottom-0 w-screen max-w-screen-2xl 2xl:m-auto z-20 flex justify-end">
        <Transition
          show={menuOpen}
          enter="transition-transform ease-in duration-100 transform"
          enterFrom="translate-y-96"
          enterTo="-translate-y-0"
          leave="transition-transform ease-in duration-75 transform"
          leaveFrom="-translate-y-0"
          leaveTo="translate-y-96"
        >
          <div className="origin-bottom w-full md:w-2/6 xl:w-[300px] h-96 md:h-auto right-0 bg-primary z-10 rounded-t-2xl pl-4 pr-4 sm:pr-20 md:pr-4 pt-4 md:pb-11 flex flex-col md:justify-between">
            <Contacts data={data} display="drawer" />
            <div className="flex my-6 md:mt-1 items-center">
              <Link href={`/cv/${locale}.pdf`}>
                <a
                  className="flex-1 border-2 border-gray-800 h-12 rounded-full flex justify-center items-center text-gray-800 hover:bg-gray-800 hover:text-secondary"
                  target="_blank"
                  download="ricardobarbosa-resume.pdf"
                  onClick={downloadAction}
                >
                  <HiDownload size={22} />
                  <span className="font-body ml-2 text-sm font-medium tracking-wide">
                    Download CV
                  </span>
                </a>
              </Link>
            </div>
            <div className="flex space-x-2 items-center">
              <Link href="/" locale="pt">
                <a
                  className={`${
                    locale === 'pt'
                      ? 'bg-gray-800 text-secondary'
                      : 'text-gray-800'
                  } rounded-md py-2 px-3 shadow-sm font-display font-medium`}
                >
                  PT
                </a>
              </Link>
              <Link href="/" locale="en">
                <a
                  className={`${
                    locale === 'en'
                      ? 'bg-gray-800 text-secondary'
                      : 'text-gray-800'
                  } rounded-md py-2 px-3 shadow-sm font-display font-medium`}
                >
                  EN
                </a>
              </Link>
            </div>
          </div>
        </Transition>
        <button
          className="absolute bottom-4 md:bottom-8 right-4 md:right-8 w-16 h-16 z-20 bg-gray-800 flex justify-center items-center rounded-full shadow-md text-secondary"
          aria-label="Open Menu"
          onClick={() => setMenuOpen((prev: boolean) => !prev)}
        >
          {menuOpen ? <RiCloseFill size={24} /> : <RiMenu5Fill size={24} />}
        </button>
      </div>
    </>
  )
}

export default Drawer
