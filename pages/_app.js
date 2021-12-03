import '../styles/global.css'
import { SwitchProvider } from '../context/SwitchContext'

function MyApp({ Component, pageProps }) {
  return (
    <SwitchProvider>
      <Component {...pageProps} />
    </SwitchProvider>
  )
}

export default MyApp
