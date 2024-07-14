import React from 'react'
import Logo from '../assests/logos.png'
const Header = () => {
  return (
    <div className="page-width">
          <header>
            <div className="logo">
              <img src={Logo} alt="book logo" />
            </div>
            <div className="nav-links">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Courses</a>
                </li>
                <li>
                  <a href="#">Our Services</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li className="sign-btn">
                  <a href="#">Sign Up</a>
                </li>
              </ul>
            </div>
          </header>
        </div>
  )
}

export default Header