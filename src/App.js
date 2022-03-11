
import './App.css';
import SurveyComponent from './Component/SurveyComponent';
import SurveyTemplate from './Component/SurveyTemplate';
import { QuestionProvider } from './Component/Questions/QuestionContext';


function App() {
  return (
    <div>
      <QuestionProvider><SurveyTemplate></SurveyTemplate></QuestionProvider>

    </div>


  );
}

export default App;
