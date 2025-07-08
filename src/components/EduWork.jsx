import React from 'react';

import certificate from "../files/ITC_certificate.pdf";
import diploma from "../files/diploma.pdf";

import '../styles/eduwork.css';

const EduWork = ( {eduwork} ) => {
  return (
    <div>
        <section className="eduwork">
            <div className="container">
                <div className="eduwork__wrapper">
                    {
                        eduwork?.map((item, indx) => (
                            <div key={indx} className="eduwork__experience">
                                <div className="eduwork__experience-title">
                                    <h2 className='eduwork__experience-title-name'><img src={item.eduworkicon} alt="icon" className='eduwork__experience-title-logo'/> {item.eduworktitle}</h2>
                                </div>
                                <div className="eduwork__experience-list">
                                    {
                                        item?.eduworklist.map((xp, index) => (
                                            <div key={index} className="eduwork__experience-list-info">
                                                <p className="eduwork__experience-list-info-period">{xp.period}</p>
                                                <div className="circle"></div>
                                                <div className="eduwork__experience-list-info-content">
                                                <div style={{display: 'none'}}>
                                                    {JSON.stringify({index: indx, lastIndex: item?.eduworklist?.length-1})}
                                                </div>
                                                    {
                                                        indx === eduwork?.length-1 ? (
                                                            <a href={xp.place === "ITC BootCamp" ? certificate : diploma}  target="_blank" rel="noopener noreferrer" className="eduwork__experience-list-info-content-title link">{xp.place}</a>
                                                        ) : (
                                                            <h3 className="eduwork__experience-list-info-content-title">{xp.place}</h3>
                                                        )
                                                    }
                                                    <p className="eduwork__experience-list-info-content-degree">{xp.degree}</p>
                                                    <p className="eduwork__experience-list-info-content-text">{xp.info}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    </div>
  )
}

export default EduWork
