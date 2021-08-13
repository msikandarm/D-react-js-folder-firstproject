import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Slider from './components/slider';
import Editor from './components/slider/editor';
import Slidertext from './components/slider/slidertext';
import Profilecards from './components/slider/profilecards';
import Recentnews from './components/slider/recentnews';
import Footer from './components/slider/footer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <>
    <App />
   <Slider/>
   <Editor/>
   <Slidertext/>
   <Profilecards/>
   <Recentnews/>
   <Footer/>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
