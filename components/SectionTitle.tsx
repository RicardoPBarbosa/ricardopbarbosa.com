import { FC } from 'react'

const SectionTitle: FC = ({ children }) => (
  <h3 className="uppercase font-display font-extrabold tracking-[0.35em] text-gray-800 text-xl mb-2">
    {children}
  </h3>
)

export default SectionTitle
