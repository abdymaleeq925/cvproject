import React from 'react';

import sign from '../icons/commentsign.png';
import '../styles/testimonials.css';

const Testimonials = ({recommendations}) => {
  return (
    <div>
      <section className="testimonials">
        <div className="container">
            <div className="testimonials__wrapper">
                <div className="testimonials__heading">
                    <p className="testimonials__heading-title">What People Are Saying About My Work</p>
                </div>
                <div className="testimonials__list">
                    {
                        recommendations?.map((recommend, index) => (
                            <div key={index} className="testimonials__list-item">
                                <div className="testimonials__list-item-heading">
                                    <div className="testimonials__list-item-heading-img">
                                        <img src={recommend.authorProfile} alt="icon"/>
                                    </div>
                                    <div className="testimonials__list-item-heading-title">
                                        <p className="testimonials__list-item-heading-title-name">{recommend.authorName}</p>
                                        <p className="testimonials__list-item-heading-title-position">{recommend.authorPosition}</p>
                                    </div>
                                </div>
                                <div className="testimonials__list-item-content">
                                    <div className="testimonials__list-item-content-img">
                                        <img src={sign} alt="icon"/>
                                    </div>
                                    <div className="testimonials__list-item-content-info">
                                        <p className="testimonials__list-item-content-info-text">{recommend.text}</p>
                                    </div>
                                </div>
                                <div className="line"></div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
