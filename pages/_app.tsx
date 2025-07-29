import { FC, ReactElement } from 'react'
import { AppProps } from 'next/app'

import 'styles/globals.css'

const App: FC<AppProps> = ({ Component, pageProps }): ReactElement => {
  return <Component {...pageProps} />
}

export default App
