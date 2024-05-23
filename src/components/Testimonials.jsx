import React from 'react';

import image3 from '../img/Image (3).svg';
import sign from '../icons/“.png';

const Testimonials = () => {
  return (
    <div>
      <section className="testimonials">
        <div className="container">
            <div className="testimonials__wrapper">
                <div className="testimonials__heading">
                    <p className="testimonials__heading-title">What People Are Saying About My Work</p>
                </div>
                <div className="testimonials__list">
                    <div className="testimonials__list-item">
                        <div className="testimonials__list-item-heading">
                            <div className="testimonials__list-item-heading-img">
                                <img src={image3} alt="icon"/>
                            </div>
                            <div className="testimonials__list-item-heading-title">
                                <p className="testimonials__list-item-heading-title-name">Marilyn Monroe</p>
                                <p className="testimonials__list-item-heading-title-position">Condent Writer</p>
                            </div>
                        </div>
                        <div className="testimonials__list-item-content">
                            <div className="testimonials__list-item-content-img">
                                <img src={sign} alt="icon"/>
                            </div>
                            <div className="testimonials__list-item-content-info">
                                <p className="testimonials__list-item-content-info-text">We worked with David designing our backend web app from scratch and
                                    we are delighted with the results. He has excellent communication
                                    skills and uses robust workflows that allowed me and my team to work
                                    with him efficiently.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
