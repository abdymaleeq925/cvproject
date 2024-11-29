import React from 'react';
import { Link } from 'react-router-dom';

import MyCV from "../files/CV_en.pdf";
import aboutmephoto from '../img/profilepicture.jpeg';
import hornsign from '../icons/Sign of the Horns.svg';

const AboutMeBanner = () => {
  return (
    <div>
      <section className="about-me-banner">
            <div className="container-xl">
                <div className="about-me-banner__wrapper">
                    <div className="about-me-banner__profilepic">
                        <img src={aboutmephoto} alt="profilepic" className="about-me-banner__image"/>
                    </div>
                    <div className="about-me-banner__content">
                        <div className="about-me-banner__content-info">
                            <h2 className="about-me-banner__content-info-title">Hi, I'm Abdymalik! <img src={hornsign} alt="hornsign"/></h2>
                            <p className="about-me-banner__content-info-text">
                                I'm a JS Fullstack graduate. I'm currently looking for an opportunity to join a company where I can contribute
                                my knowledge. If you're a looking for someone who is stress tolerant and willing to work, say hi!
                                <br/><br/>
                                I graduated at ITC BootCamp and most recently did my internship at Dara Solutions, all in Almaty, Kazakhstan. Before that, I 
                                worked at mining industry as a HSE Engineer and shift boss in Kyrgyzstan and Kazakhstan respectively. 
                                I have a degree in mining engineering and studied in Istanbul, Turkey.
                                <br/><br/>
                                I love words that start with P: people, programming, process, problem solving, progress, patience, practice.
                                I believe that synergy of these factors approach to desired results and provide stability. Beside work, 
                                I keen on football and reading. I can keep up diverse conversations and give feedback.</p>
                        </div>
                        <div className="about-me-banner__content-btns">
                            <a href={MyCV} download="CV_en.pdf" className="btn btn-black">Resume</a>
                            <Link to="https://www.linkedin.com/in/abdymalik-batyrkulov" className="btn">LinkedIn</Link>
                            <Link to="https://www.instagram.com/nvintufviv" className="btn">Instagram</Link>
                            <Link to="https://github.com/abdymaleeq925" className="btn">GitHub</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutMeBanner
