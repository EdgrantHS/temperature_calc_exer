import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TempConvert from './TempConvert';
import CurrConvert from './CurrConvert';
import Pemilihan from './Pemilihan';

// const renderTemperature = true;
const renderTemperature = false;
const renderCurrency = true;
// const renderCurrency = false;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <div className="bg-image" style={{ "backgroundImage": "url(./gio.jpg)", "min-height": "100vh", "width": "100wh" }}>
      {renderTemperature && <TempConvert />}
      {renderCurrency && <CurrConvert />}
    </div> */}
  <Pemilihan />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
