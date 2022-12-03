import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <div className='w-10/12 mx-auto font-sans'>
      <nav>Navigation Bar</nav>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>FOOTER</footer>
    </div>
  </>
}
