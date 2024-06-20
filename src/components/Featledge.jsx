import React from 'react';

import '../styles/featledge.css';
import featicon from '../icons/pin.svg';
import knowicon from '../icons/gradhat.svg';

const Featledge = ({featledge}) => {
  return (
    <div className="container">
        <div className="featledge">
            <div className="featledge__feature">
                <h3 className="featledge__feature-title"><img src={featicon} alt="pin"/>Soft Skills</h3>
                <ul>
                    {
                        featledge?.features?.map((feat, index) => (
                            <li key={index}><p>{feat}</p></li>
                        ))
                    }
                </ul>
            </div>
            <hr/>
            <div className="featledge__knowledge">
                <h3 className="featledge__knowledge-title"><img src={knowicon} alt="hat"/>Hard Skills</h3>
                <ul>
                    {
                        featledge?.knowledge?.map((know, index) => (
                            <li key={index}><p>{know}</p></li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Featledge
