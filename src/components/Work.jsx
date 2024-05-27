import React from 'react';
import { Link } from 'react-router-dom';

import vector from '../icons/Vector.svg';
import '../styles/work.css';


const Work = ({ projects }) => {
  return (
    <div>
      <section className="work">
        <div className="container">
            <div className="work__wrapper">
                {
                  projects?.map((project, index) => (
                    <div key={index} className="work__project">
                        <div className="work__project-pattern-1 pattern"></div>
                        <div className="work__project-pattern-2 pattern"></div>
                        <div className="work__project-info">
                            <p className="work__project-info-title">{project.title}</p>
                            {
                              project?.tags?.map(tag => (
                                <div className="work__project-info-tag">{tag}</div>
                              ))
                            }  
                            <p className="work__project-info-text">{project.text}</p>
                            <Link to={`/projects/${index}`} className="work__project-info-btn">Read Case Study <img className="btn-arrow-icon" alt="icon"
                                    src={vector} /></Link>
                        </div>
                        <div className="work__project-illustration">
                            <img src={project.image1} alt="illustration" className="work__project-illustration-img1"/>
                            <img src={project.image2} alt="illustration" className="work__project-illustration-img2"/>
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
