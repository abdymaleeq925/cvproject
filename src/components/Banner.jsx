import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import hornsigns from '../icons/Sign of the Horns.svg';
import scrollbutton from '../icons/scroll_button.svg';
import leftarrow from '../icons/case_vector.svg';
import arrowdown from '../icons/arrowdown.svg';

import '../styles/banner.css';

const Banner = forwardRef(({title, text, boldText, buttonScroll, backtohome, bannerImage, bannerImage2, scrollDownRef}, ref) => {
  const scrollDown = (e) => {
    e.preventDefault();
    scrollDownRef.current.scrollIntoView({behavior: "smooth"});
  };
  return (
    <div>
      <section className="banner">
        <div className="container-xl">
            <div className="banner__wrapper">
              <div className="banner__top">
                {
                  backtohome && <Link className="banner__btn" to="/"><img src={leftarrow} alt="vector"/> Back To Home</Link>
                }
                <div className="banner__top-info">
                    <p className="banner__top-info-name">{title} <img src={hornsigns} alt="sign"/></p>
                    <p className="banner__top-info-text"><span>{boldText}</span> {text}</p>
                </div>
                {
                  buttonScroll && 
                  <button className="banner__top-info-scroll_down" ref={ref} onClick={scrollDown}>
                    <img className="rot" src={scrollbutton} alt="buttonimg"/>
                    <img className="arrowdown" src={arrowdown} alt="arrowdown" />
                  </button>
                    
                }
              </div>
              {
                bannerImage &&
                <div className="banner__bottom">
                    <div className="container-xl">
                        <div className="banner__bottom-images">
                          <img src={bannerImage} alt="project-1" className="banner__bottom-images-image-1"/>
                          <div className="banner__bottom-images-absolute">
                              <img src={bannerImage2} alt="project-2" className="banner__bottom-images-image-2"/>
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
})

export default Banner
