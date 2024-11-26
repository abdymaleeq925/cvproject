import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import pattern from '../icons/Patternn.svg';
import pattern1 from '../icons/Pattern-1n.svg';
import scrollbutton from '../icons/ScrollButtonNight.svg';
import arrowup from '../icons/VectorNight.svg';
import arrowupblack from '../icons/arrowup.svg';
import scrollbuttonblack from '../icons/ScrollButton.svg';
import image1186 from '../icons/image1186.png';
import image307 from '../icons/image307.png';
import icon1 from '../icons/Icon1.svg';
import '../styles/footer.css';

const Footer = forwardRef(({scrollUpRef}, ref) => {
  const scrollUp = (e) => {
    e.preventDefault();
    scrollUpRef.current.scrollIntoView({behavior: "smooth"});
  };
  
  const link = useLocation();
  return (
    <>
      <footer className={link.pathname === '/' ? "footer light" : "footer"}>
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
        <div className="circle-4"></div>
        <img className="line-1" src={pattern} alt="" />
        <img className="line-2" src={pattern1} alt="" />
        <div className="footer__wrapper">
          <div className="footer__top">
              <div className="footer__top__wrapper">
                <button className="footer__top-getintouch-btn" ref={ref} onClick={scrollUp}>
                  <img className="rot" src={link.pathname === '/' ? scrollbuttonblack : scrollbutton} alt="button"/>
                  <img className="arrowup" src={link.pathname === '/' ? arrowupblack : arrowup} alt="arrowup"/>
                </button>
                <div className="footer__top-text">
                  <span>Work<img className='monitor' src={image1186} alt="icon" />Get In Touch<img src={image307} alt="icon"/>Available for Work<img className='monitor' src={image1186} alt="icon"/></span>
                </div>
              </div>
          </div>
          <div className="footer__bottom">
            <div className="container-xl">
              <div className="footer__bottom__wrapper">
                <div className="footer__bottom-socials">
                  <ul className="footer__bottom-cta">
                    <li><Link to="https://www.linkedin.com/in/abdymalik-batyrkulov">LinkedIn</Link></li>
                    <li><Link to="https://www.instagram.com/nvintufviv">Instagram</Link></li>
                    <li><Link to="https://github.com/abdymaleeq925">GitHub</Link></li>
                  </ul>
                </div>
                <div className="footer__bottom-email-cta">
                  <p className="footer__bottom-email-cta-text"> Interested in working together? Drop me a line</p>
                  <button className="footer__bottom-email-cta-emailbtn" onClick={() =>  navigator.clipboard.writeText('abdymalikbatrykulov@gmail.com')}><img src={icon1} alt="" /> Copy Email</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
})

export default Footer
