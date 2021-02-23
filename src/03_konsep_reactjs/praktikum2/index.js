import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const nimNama = '1841720157 - Andri Yoga Susila';
const element = <h1>Hello, {nimNama}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
function jam() {
  const element = (
    <div>
      <h1>Sekarang Jam:</h1>
      <h2>{new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(jam, 1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
