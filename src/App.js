
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import StartingPage from './pages/starting_page/StartingPage';
import Page404 from './pages/page_not_found/Page404';
import TestPage from './pages/test_page/TestPage';
import TestResult from './pages/test_result/TestResult';
import Header from './components/header/Header';
import InfoPopup from './components/popup/Popup';
import './common/css/colors.css'
import './common/css/fonts.css'
import './components/common/common.css'
import './common/css/display.css'
import './common/css/position.css'
import './common/css/text-align.css'
import './common/css/float.css'
import Footer from './react/common/components/static-page-elements/footer/Footer.tsx';
import Instructions from './pages/Instructions.tsx';
import ResultsPage from './pages/interestsprofiletest/ResultsPage.tsx';

function App() {
  return (
  <BrowserRouter basename='/testy/test-profil-zainteresowan'>

    <Header/>
    <div className = 'main'>
      <Routes>
        <Route path = '/' element = {<StartingPage/>} />

        <Route path = '/instructions' element = {<Instructions/>} />

        <Route path = '/start' element = {<TestPage/>}/>

        <Route path = "/results" element = {<ResultsPage/>}/>
        

        <Route path = '*' element = {<Page404/>}/>
        
      </Routes>
    </div>
    <Footer/>
  </BrowserRouter>
  
  )
    
}

export default App;

export const popup = {
  /**
   * Usage (type,text,duration)
   */
  show: (type,text,duration) => {}
}
export const navigate = {
  hook : () => {},
}