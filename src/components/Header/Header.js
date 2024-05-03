import React from 'react';
import { Link } from 'react-router-dom'
import './Style.css'



function Header() {
  return (
    <>
        <div className="nav">
            <Link to="#" className="logo"></Link>
             <div className="bx bx-menu" id="menu-icon"></div>
              <Link to="/" className="nav-links">Home</Link>
              <Link to="/" className="nav-links">Shop</Link>
              <Link to="/" className="nav-links">About</Link>
              <Link to="/" className="nav-links">Contact</Link>
              <Link to="/login" className="nav-links">Login</Link>
        </div>

        <div className="header">
            <div className="header-left col">
                <div className="item">
                    <h1>CAR</h1>
                    <h1>RETAIL STORE</h1>
                </div>
            </div>
            <div className="header-right">
                <div className="play-wrapper">
                    <div className="play-btn">
                        <ion-icon name="play-sharp"></ion-icon>
                    </div>
                </div>
                <div className="pattern"> * * *</div>
                <div className="copy">
                    <p>The number one car retailer in Vietnam stands as a beacon of automotive excellence, embodying innovation, reliability, and unparalleled customer service. Boasting an expansive showroom filled with the latest models from renowned manufacturers, this retailer offers a diverse range of vehicles to cater to every need and preference. From sleek sedans to rugged SUVs, each car is meticulously crafted to deliver superior performance and comfort. With a team of knowledgeable professionals, customers are guided through every step of the purchasing process, ensuring a seamless and satisfying experience</p>
                </div>
            </div>
        </div>

        <div className="btn-container">
            <div className="btns col">
                <div className="btn">
                    <ion-icon name="analytics"></ion-icon>
                    <span>2024 Best Agency</span>
                </div>
                <div className="btn">
                    <ion-icon name="glasses"></ion-icon>
                    <span>World Class Agency</span>
                </div>
            </div>
            <div className="divider col">
                <div className="hr"></div>
            </div>
        </div>

    

    </>
  );
}

export default Header;