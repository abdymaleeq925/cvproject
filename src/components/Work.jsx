import React from 'react';
import { Link } from 'react-router-dom';

import vector from '../icons/Vector.svg';
import '../styles/work.css';


const Work = ({ projects, scrollDownRef }) => {

  const colorClass = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6'];
  const getRandomColor = () => {
      return colorClass[Math.floor(Math.random() * colorClass.length)];
  }

  return (
    <div>
      <section ref={scrollDownRef} className="work">
        <div className="container">
            <div className="work__wrapper">
                {
                  projects?.map((project, index) => (
                    <div key={index} className={`work__project ${getRandomColor()}`}>
                        <div className="work__project-pattern-1 pattern"></div>
                        <div className="work__project-pattern-2 pattern"></div>
                        <div className="work__project-info">
                            <p className="work__project-info-title">{project.bannerTitle}</p>
                            <div className="work__project-info-taglist">
                              {
                                project?.bannerTags?.map((tag, index) => (
                                  <p key={index} className="work__project-info-tag">{tag}</p>
                                ))
                              }
                            </div> 
                            <p className="work__project-info-text">{project.bannerText}</p>
                            <Link to={`/projects/${project.projectSlug}`} className="work__project-info-btn">Read Case Study <img className="btn-arrow-icon" alt="icon"
                                    src={vector} /></Link>
                        </div>
                        <div className="work__project-illustration">
                            <img src={project.bannerImage1} alt="illustration" className="work__project-illustration-img1"/>
                            <img src={project.bannerImage2} alt="illustration" className="work__project-illustration-img2"/>
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

export default Work
