import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPlay, faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons'
import { ChallengesProvider } from '../contexts/ChallengesContext';

import '../styles/global.css';

library.add(fab, faPlay, faCheckCircle, faTimes)

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
