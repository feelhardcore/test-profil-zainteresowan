
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import StartingPage from './pages/starting_page/StartingPage';
import Page404 from './pages/page_not_found/Page404';
import TestPage from './pages/test_page/TestPage';
import TestResult from './pages/test_result/TestResult';

function App() {

  return (
  <BrowserRouter basename='/testy/test-profil-zainteresowan'>
    <div className = 'main'>
      <Routes>
        <Route path = '/' element = {<StartingPage/>}/>

        <Route path = '/start' element = {<TestPage/>}/>

        <Route path = "/results" element = {<TestResult/>}/>
        

        <Route path = '*' element = {<Page404/>}/>
        
      </Routes>
    </div>
    
  </BrowserRouter>
  
  )
    
}

export default App;
