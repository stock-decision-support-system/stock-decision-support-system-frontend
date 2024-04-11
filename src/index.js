import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './assets/css/index.css';
import backgroundImage from './assets/images/background.png';
import iconImage from './assets/images/logo192.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#060A1B' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ color: '#C0C2C6' }}>
          <img src={iconImage} alt="Navbar Icon" style={{ width: '30px' }} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item mx-4">
              <a className="nav-link active" aria-current="page" href="#" style={{ color: '#C0C2C6' }}>個股</a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link active" aria-current="page" href="#" style={{ color: '#C0C2C6' }}>熱門成交股</a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link active" aria-current="page" href="#" style={{ color: '#C0C2C6' }}>台灣五十股</a>
            </li>
            <li className="nav-item dropdown mx-4">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: '#C0C2C6' }}>
                Dropdown link
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#" style={{ color: '#C0C2C6' }}>Action</a></li>
                <li><a className="dropdown-item" href="#" style={{ color: '#C0C2C6' }}>Another action</a></li>
                <li><a className="dropdown-item" href="#" style={{ color: '#C0C2C6' }}>Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item mx-4" style={{ border: '1px solid #ffffff' }}>
              <a className="nav-link text-nowrap d-flex justify-content-center" id="btnb" href="#" style={{ width: '100px', height: '37px', color: 'white' }}>LOG IN</a>
            </li>
            <li className="nav-item mx-4" style={{ backgroundColor: '#424551' }}>
              <a className="nav-link text-nowrap d-flex justify-content-center" id="btnb" href="#" style={{ width: '200px', height: '38px', color: 'white' }}>CREATE ACCOUNT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="kv w-100" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container-fluid d-flex" style={{ color: 'white' }}>
        <div className="col-7">
          <div className="text-start mt-5 pt-5 ms-5">
            <h1 style={{ fontSize: '60px', fontWeight: 'bolder' }}>投資無界限，財富薪起點<br />穩健理財，績效非凡</h1>
            <h6><span className="larger-text">智投金紡</span>您的財富管理專家。讓我們的專業團隊引導您，在投資的世界中航向成功。<br />全面的市場分析，客製的投資策略，為您開啟一段卓越的財富增值之旅。</h6>
          </div>
        </div>
        <div className="col-5"></div>
      </div>
      <button className="btn mt-4 ms-5 px-5 py-3" type="button" style={{ fontWeight: 'bolder', color: '#ffffff', background: 'linear-gradient(to right, #26abd9, #26adb9)' }}>
        GET STARTED
      </button>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
  </React.StrictMode>,
);


//reportWebVitals();
