import React from 'react';

import { Titles } from '../components';


import image2 from '../img/Image (2).svg';
import button from '../img/Button.svg';
import image301 from '../icons/image 301.svg';

const AboutMeShort = () => {
  return (
    <div>
      <section className="about-me-short">
         <Titles name="about me" image={image301}/>
          <div className="container">
              <div className="about-me-short__wrapper">
                  <p className="about-me-short__text">Im a <b>UX Designer</b>, Over the past <b><span>10+ years</span></b> I've
                      created
                      well-crafted mobile and web apps by connecting business goals
                      with user needs <br /><br />
                      <b>Currently Service and Interaction Designer</b> <span>@Fraxos</span> office.
                      Recently graduated from UC Berkeley, focusing on Interaction
                      Design & Design Emerging Technology. <br /><br />
                      Formerly at Electronic Arts, Apple, Sea Group, Deutsche Bank and JPMorgan Chase & Co.
                  </p>
                  <img src={image2} alt="profile" className="about-me-short__img"/>
                  <div className="about-me-short__resume">
                      <button className="img about-me-short__btn"><img src={button} alt="button-resume"/></button>
                  </div>
              </div>
          </div>
      </section>
    </div>
  )
}

export default AboutMeShort
