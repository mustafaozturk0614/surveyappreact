
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './pages/Home'
import SurveyTemplateDetail from './pages/SurveyTemplateDetail';
import Navbarr from './Component/NavBarr.js';
import SurveyTemplate from './pages/SurveyTemplate';
import Survey from './pages/Survey';
import LoginPage from "./pages/LoginPage";
import SurveyList from "./pages/Surveylist";



function App() {
  return (
    <div className='App'>
      <div>
        <BrowserRouter>
          <div style={{ zIndex: '1' }}> <Navbarr></Navbarr></div>
          <div style={{ zIndex: '0' }}>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/login" element={<LoginPage />}></Route>

              <Route exact path="/survey" element={<SurveyList />}></Route>


              <Route exact path="/create" element={<SurveyTemplate />}></Route>
              <Route exact path="/template/:id" element={<SurveyTemplateDetail />}></Route>

            </Routes></div>

        </BrowserRouter >
      </div>
    </div >


  );
}

export default App;
