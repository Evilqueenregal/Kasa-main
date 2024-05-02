import React from 'react'
import "./Footer.css"

function  Footer () {
  return (
    <div className="footer">
        <div className="footer__logo">
            <img src="Logo-black.png" alt="logo" />
        </div>
        <div className="footer__text">© 2020 Kasa. All rigths reserved</div>
    </div>
  )
}

export default Footer;