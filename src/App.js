
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import StartingPage from './pages/starting_page/StartingPage';
import Page404 from './pages/page_not_found/Page404';
import TestPage from './pages/test_page/TestPage';
import TestResult from './pages/test_result/TestResult';
import Header from './components/header/Header';
import InfoPopup from './components/popup/Popup';
import './common/css/colors.css'
import './common/css/fonts.css'
import Footer from './components/footer/Footer';
import './common/css/display.css'
import './common/css/position.css'
import './common/css/text-align.css'
import './common/css/float.css'

function App() {
  return (
  <BrowserRouter basename='/testy/test-profil-zainteresowan'>

    <Header/>
    <div className = 'main'>
      <Routes>
        <Route path = '/' element = {<StartingPage/>} />

        <Route path = '/start' element = {<TestPage/>}/>

        <Route path = "/results" element = {<TestResult/>}/>
        

        <Route path = '*' element = {<Page404/>}/>
        
      </Routes>
    </div>
    <Footer/>
  </BrowserRouter>
  
  )
    
}

export default App;

export const popup = {
  show: () => {}
}
export const navigate = {
  hook : () => {},
}