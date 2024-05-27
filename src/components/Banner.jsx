import React from 'react';
import { Link } from 'react-router-dom';

import hornsigns from '../icons/Sign of the Horns.svg';
import scrollbutton from '../icons/scroll_button.svg';
import leftarrow from '../icons/case_vector.svg';

import '../styles/banner.css';

const Banner = ({title, text, boldText, buttonScroll, backtohome, bannerImage, bannerImage2}) => {
  return (
    <div>
      <section className="banner">
        <div className="container-xl">
            <div className="banner__wrapper">
              <div className="banner__top">
                {
                  backtohome && <Link class="banner__btn" to="/"><img src={leftarrow} alt="vector"/> Back To Home</Link>
                }
                <div className="banner__top-info">
                    <p className="banner__top-info-name">{title} <img src={hornsigns} alt="sign"/></p>
                    <p className="banner__top-info-text"><span>{boldText}</span> {text}</p>
                </div>
                {
                  buttonScroll && 
                  <div className="banner__top-info-scroll_down">
                    <img className="banner__top-info-scroll_btn" src={scrollbutton} alt="buttonimg"/>
                  </div>
                }
              </div>
              {
                bannerImage &&
                <div class="banner__bottom">
                    <div class="container-xl">
                        <div className="banner__bottom-images">
                          <img src={bannerImage} alt="project-1" class="banner__bottom-images-image-1"/>
                          <div class="banner__bottom-images-absolute">
                              <img src={bannerImage2} alt="project-2" class="banner__bottom-images-image-2"/>
                          </div>
                        </div>
                    </div>
                </div>
              }
            </div>
        </div>
      </section>
    </div>
  )
}

export default Banner
