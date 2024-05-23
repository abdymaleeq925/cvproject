import React from 'react';

import hornsigns from '../icons/Sign of the Horns.svg';
import scrollbutton from '../icons/scroll_button.svg';

const Banner = () => {
  return (
    <div>
      <section className="banner">
        <div classnameName="container">
            <div className="banner__wrapper">
                <div className="banner__info">
                    <p className="banner__info-name">Hi, I'm Abdymalik! <img src={hornsigns} alt="sign"/></p>
                    <p className="banner__info-text">a <span>Full-stack JS</span> graduate with a few fascinating projects</p>
                </div>
                <div className="banner__info-scroll_down">
                    <img className="banner__info-scroll_btn" src={scrollbutton} alt="buttonimg"/>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Banner
