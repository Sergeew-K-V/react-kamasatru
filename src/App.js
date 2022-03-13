import './css/App.css'
import './css/nullstyles.css'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom'
// https://open.cruip.com/#0

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
