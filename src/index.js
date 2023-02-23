import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import avanza from './img/avanza.jpg'
function App() {
  return (
    <div className="container">
      <div className="card">
        <h2>Hi,Nama Saya Hilman_Fadilah</h2>
        <p>senang bisa mengenalmu!</p>
      </div>
      <div className="card1">
        <p>dibawah ini adalah gambar mobil</p>
      </div>
      <div className="card2">
      <img src={avanza} alt='gambar'/>
      </div>
      <div className="card3">
        <div className="color-boxes">
          <span className="color-box" style={{backgroundColor: 'red'}}></span>
          <span className="color-box" style={{backgroundColor: 'yellow'}}></span>
          <span className="color-box" style={{backgroundColor: 'green'}}></span>
          <span className="color-box" style={{backgroundColor: 'blue'}}></span>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
