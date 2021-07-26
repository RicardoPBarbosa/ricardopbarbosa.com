import { FC, ReactElement, useEffect } from 'react'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'
import * as gtag from 'lib/gtag'

import 'styles/globals.css'

const App: FC<AppProps> = ({ Component, pageProps }): ReactElement => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      if (process.env.NODE_ENV === 'production') {
        gtag.pageview(url)
      }
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

export default App
