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





const store = configureStore();
ReactDOM.render(
  <Provider store={store}>  <QuestionProvider  ><SurveyProvider><App /></SurveyProvider></QuestionProvider></Provider>


  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
