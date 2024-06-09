import '@/styles/globals.css'
import { MyUserProfileProvider } from '@/utils/states/MyUserProfileContext'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <MyUserProfileProvider>
    <Component {...pageProps} />
  </MyUserProfileProvider>
}
