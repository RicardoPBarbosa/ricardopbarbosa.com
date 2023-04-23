import { ReactNode } from 'react'

const Body = ({ children }: { children: ReactNode }) => (
  <p className="font-medium text-gray-600 font-body md:text-lg">{children}</p>
)

export default Body
