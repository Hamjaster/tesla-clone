import '@/styles/globals.css'
import Navbar from './components/Navbar'
import { ContextProvider } from './components/contextApi'

export default function App({ Component, pageProps }) {
  return <>
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  </>

}
