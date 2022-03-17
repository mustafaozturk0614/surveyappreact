
import './App.css';
import SurveyComponent from './Component/SurveyComponent';
import SurveyTemplate from './Component/SurveyTemplate';
import { QuestionProvider } from './Component/Questions/QuestionContext';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './Component/pages/Home';
import SurveyTemplateDetail from './Component/pages/SurveyTemplateDetail';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/create" element={<SurveyTemplate />}></Route>
          <Route exact path="/template/:id" element={<SurveyTemplateDetail />}></Route>


        </Routes>
      </BrowserRouter>


    </div>


  );
}

export default App;
