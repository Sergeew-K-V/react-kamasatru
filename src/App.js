import './css/App.css'
import './css/nullstyles.css'
import Header from './Components/Header/Header.js'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom'

// https://classic-mebel.com/
// https://open.cruip.com/#0
// http://it-shpora.pp.ua/reactjs-github-pages-%D1%80%D0%B0%D0%B7%D0%B2%D0%BE%D1%80%D0%B0%D1%87%D0%B8%D0%B2%D0%B0%D0%B5%D0%BC-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82-deploy-%D0%BD%D0%B0-github/
function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
