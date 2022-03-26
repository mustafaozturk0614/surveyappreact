import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import configureStore from "./redux/Store/ConfiguresStore"
import { Provider } from 'react-redux';
import { QuestionProvider } from './Context/QuestionContext';
import { SurveyProvider } from './Context/SurveyContext';


import 'antd/dist/antd.css'
import { Login } from '@mui/icons-material';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { CourseProvider } from './Context/CourseContext';



const store = configureStore();
ReactDOM.render(


  <Provider Provider store={store} > <QuestionProvider  ><SurveyProvider> <CourseProvider><App /></CourseProvider>   </SurveyProvider></QuestionProvider></Provider >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
