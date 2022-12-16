import type { AppProps } from 'next/app'
import WeatherProvider from '../contexts/Weather'
import '../styles/_app.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WeatherProvider>
      <Component {...pageProps} />
    </WeatherProvider>
  )
}
