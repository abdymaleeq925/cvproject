import React from 'react';

import pattern from '../icons/Pattern.svg';
import pattern1 from '../icons/Pattern-1.svg';
import scrollbutton from '../icons/Scroll Button.svg';
import image1186 from '../icons/image 1186.png';
import image307 from '../icons/image 307.png';
import icon1 from '../icons/Icon (1).svg';
import '../styles/footer.css';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
        <img className="line-1" src={pattern} alt=""/>
        <img className="line-2" src={pattern1} alt=""/>
        <div className="footer__wrapper">
            <div className="footer__top">
                <div className="getintouch-btn"><img src={scrollbutton} alt="button"/></div>
                <div className="footer__text"> Work <img src={image1186} alt="icon"/> Get In Touch <img src={image307} alt="icon"/> Available for Work <img src={image1186} alt="icon"/>
                </div>
            </div>
            <div className="container-xl">
                <div className="footer__bottom">
                    <div className="socials">
                        <ul className="footer__cta">
                            <li>Home</li>
                            <li>Work</li>
                            <li>Me</li>
                        </ul>
                        <ul className="footer__cta">
                            <li>LinkedIn</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                    <div className="email-cta">
                        <p className="text-cta"> Interested in working together? Drop me a line</p>
                        <button className="email-btn"><img src={icon1} alt=""/> Copy Email</button>
                    </div>
                </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
