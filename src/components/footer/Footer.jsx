import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer-container'>
        <div className='exceptionalqualityBorder'></div>
      <div>
      <p className="logo" >
        dimend<span>SCAASI</span>
      </p>
      <p className='YearsOfTrust'>20+ Years Of Trust</p>
      <p className='exceptionalquality'>dimend SCAASI Jeweler is a unique Jewelry store located in
Chicago with an emphasis on great style and exceptional quality.</p>
      </div>
      <div className='exceptionalqualityBorder'></div>
      <div className='footer-links'>
        <a href="" className='footer-links-tags'>Education</a>
        <a href="" className='footer-links-tags'>About Us</a>
        <a href="" className='footer-links-tags'>Customer Care</a>
        <a href="" className='footer-links-tags'>Contact Us</a>

      </div>
    </div>
  )
}

export default Footer
