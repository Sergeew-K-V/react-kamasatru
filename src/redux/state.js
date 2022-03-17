import navbarLogo from '../img/Header/navbarLogo.svg'
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

let state = {
  header: { logo: navbarLogo, activeState: false },
  //   main: {},
  footer: {
    arrayOfIcons: [faTwitter, faFacebookF, faInstagram],
  },
}

export default state
