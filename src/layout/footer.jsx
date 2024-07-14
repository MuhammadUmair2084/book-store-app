import React from 'react'
import Logo from '../assests/logos.png'
const Footer = () => {
  return (
<div className="page-width">
          <footer>
            <div className="inner-footer">
              <div className="first-col">
                <img src={Logo} alt="book logo" /> <br />
                <p className="footer-data">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy a type specimen book.</p>
              </div>
              <div className="sec-col"><h2>Comapany</h2> <p className="footer-data"><br /> About Us <br /> How to Work? <br /> Popular Course <br /> Service</p></div>
              <div className="thi-col"><h2>Courses</h2><p className="footer-data"> <br /> Categories <br /> Offline Courses <br /> Vedio Course</p></div>
              <div className="for-col"><h2>Support</h2> <p className="footer-data"> <br /> FAQ <br /> Help Center <br /> CAreer <br /> Privacy </p></div>
              <div className="fifth-col"><h2>Contact Info</h2><p className="footer-data"> <br /> +0913-705-3875 <br /> ElizabethJ@Jourrapride.com <br /> 4808 Skinner Hollow Road Days Creek, OR 97429</p></div>
            </div>
            <hr />
            <p style={{textAlign: 'center'}}>BookStore All Rights Reserved,2022</p>
          </footer>
        </div>  )
}

export default Footer