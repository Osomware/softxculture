import type { AppProps } from 'next/app'
import { Raleway } from '@next/font/google'
import { Staatliches } from '@next/font/google'

import '@/styles/tailwind.css'

// --nextjs-fonts/google...
const raleway = Raleway({ subsets: ['latin'] })
const staatliches = Staatliches({ subsets: ['latin'], weight: '400' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --raleway-font: ${raleway.style.fontFamily};
            --staatliches-font: ${staatliches.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  )
}
