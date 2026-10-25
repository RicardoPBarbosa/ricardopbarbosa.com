import { ReactElement, ReactNode } from 'react'

const Body = ({ children }: { children: ReactNode }): ReactElement => (
  <p className="font-medium text-gray-600 whitespace-pre-line font-body md:text-lg">
    {children}
  </p>
)

export default Body
