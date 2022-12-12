import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <div className='w-10/12 mx-auto font-sans'>
      <Navbar />
      <main className='mb-5'>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  </>
}
