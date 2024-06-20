import React from 'react';

import { Titles } from '.';


import MyCV from "../files/CV_en.pdf";
import button from '../img/Button.svg';
import image301 from '../icons/image301.svg';
import '../styles/aboutMeHome.css';

const AboutMeHome = ({text, image}) => {
  return (
    <div>
      <section className="about-me-home">
         <Titles name="about me" image={image301}/>
          <div className="container">
              <div className="about-me-home__wrapper">
                  <p className="about-me-home__text">{text}</p>
                  <div className="about-me-home__picture">
                    <img src={image} alt="profile" className="about-me-home__img"/>
                  </div>
                  <div className="about-me-home__resume">
                      <a href={MyCV} download="CV_en.pdf" className="img about-me-home__btn"><img src={button} alt="button-resume"/></a>
                  </div>
              </div>
          </div>
      </section>
    </div>
  )
}

export default AboutMeHome
