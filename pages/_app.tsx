import { FC, ReactElement } from 'react'
import { AppProps } from 'next/app'
import Router from 'next/router'
import * as gtag from 'lib/gtag'

import 'styles/globals.css'

Router.events.on('routeChangeStart', (url) => {
  gtag.pageview(url)
})
Router.events.on('routeChangeComplete', (url) => {
  gtag.pageview(url)
})

const App: FC<AppProps> = ({ Component, pageProps }): ReactElement => {
  return <Component {...pageProps} />
}

export default App
