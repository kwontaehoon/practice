import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
