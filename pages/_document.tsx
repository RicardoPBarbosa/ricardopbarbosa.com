import { ReactElement } from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#EBE8EB" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#ebe8eb" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Ricardo Barbosa" />
          <meta
            name="msapplication-TileImage"
            content="/static/icons/mstile-150x150.png"
          />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Ricardo Barbosa" />

          <link rel="manifest" href="/site.webmanifest" />
          <link rel="shortcut icon" href="/static/icons/favicon.ico" />
          <link
            rel="icon"
            type="image/x-icon"
            href="/static/icons/favicon.ico"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/icons/favicon-16x16.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/icons/favicon-32x32.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/icons/apple-touch-icon.png"
          />
          <link
            rel="mask-icon"
            href="/static/icons/safari-pinned-tab.svg"
            color="#333333"
          />

          <link
            rel="preload"
            href="/fonts/Quicksand-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Quicksand-Medium.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Manrope-Light.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Manrope-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Manrope-Medium.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Manrope-ExtraBold.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body className="bg-secondary">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
