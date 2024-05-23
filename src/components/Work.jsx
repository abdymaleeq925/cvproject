import React from 'react';
import { Link } from 'react-router-dom';

import vector from '../icons/Vector.svg';
import screen21 from '../img/Screen-21 3.svg';
import image from '../img/Image.svg';

const Work = () => {
  return (
    <div>
      <section className="work">
        <div className="container">
            <div className="work__wrapper">
                <div className="work__project">
                    <div className="work__project-pattern-1 pattern"></div>
                    <div className="work__project-pattern-2 pattern"></div>
                    <div className="work__project-info">
                        <p className="work__project-info-title">Re-Design For The App Made Easy</p>
                        <button type='button' className="work__project-info-subtitle-btn">User Research</button>
                        <button type='button' className="work__project-info-subtitle-btn">UX Design</button>
                        <p className="work__project-info-text">It is a long established fact that a reader will
                            be distracted by the readable content of a page when looking at its layout.</p>
                        <Link to="/projects" className="work__project-info-btn">Read Case Study <img className="btn-arrow-icon" alt="icon"
                                src={vector} /></Link>
                    </div>
                    <div className="work__project-illustration">
                        <img src={screen21} alt="illustration" className="work__project-illustration-img1"/>
                        <img src={image} alt="illustration" className="work__project-illustration-img2"/>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Work
