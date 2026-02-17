import { ReactNode } from 'react'

const Body = ({ children }: { children: ReactNode }): JSX.Element => (
  <p className="font-medium text-gray-600 whitespace-pre-line font-body md:text-lg">
    {children}
  </p>
)

export default Body
