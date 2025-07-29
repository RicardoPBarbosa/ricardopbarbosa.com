import { ReactNode } from 'react'

const SectionTitle = ({ children }: { children: ReactNode }): JSX.Element => (
  <h3 className="uppercase font-display font-extrabold tracking-[0.35em] text-gray-800 text-2xl mb-3">
    {children}
  </h3>
)

export default SectionTitle
