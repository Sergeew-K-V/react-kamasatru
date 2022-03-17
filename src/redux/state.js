import navbarLogo from '../img/Header/navbarLogo.svg'
import workFlow_1 from '../img/Workflow/workflow_1.png'
import workFlow_2 from '../img/Workflow/workflow_2.png'
import workFlow_3 from '../img/Workflow/workflow_3.png'
import icon1 from '../img/Build-Up/BuildUp-icon1.svg'
import icon2 from '../img/Build-Up/BuildUp-icon2.svg'
import icon3 from '../img/Build-Up/BuildUp-icon1.svg'
import icon4 from '../img/Build-Up/BuildUp-icon4.svg'
import icon5 from '../img/Build-Up/BuildUp-icon5.svg'
import icon6 from '../img/Build-Up/BuildUp-icon6.svg'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

let state = {
  header: { logo: navbarLogo, activeState: false },
  main: {
    previewForm: { icon: faArrowRight },
    workflow: {
      arrayOfDataDriven: [
        { count: 1, image: workFlow_1 },
        { count: 2, image: workFlow_2 },
        { count: 3, image: workFlow_3 },
      ],
    },
    customer: {
      arrayOfCustomersCollumn: [
        { name: `Roman Level` },
        { name: `Diana Rynzhuk` },
        { name: `Ben Stafford` },
      ],
    },
    buildUp: { arrayOfIcons: [icon1, icon2, icon3, icon4, icon5, icon6] },
  },
  footer: {
    arrayOfIcons: [faTwitter, faFacebookF, faInstagram],
    arrayOfLinks: ['Contact', 'About us', `FAQ's`, 'Support'],
  },
}
export default state
