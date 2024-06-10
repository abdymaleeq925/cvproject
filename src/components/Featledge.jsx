import React from 'react';

import '../styles/featledge.css';
import featicon from '../icons/pin.svg';
import knowicon from '../icons/gradhat.svg';

const Featledge = ({featledge}) => {
  return (
    <div className="container">
        <div class="featledge">
            <div class="featledge__feature">
                <h3 class="featledge__feature-title"><img src={featicon} alt="pin"/>Features</h3>
                <ul>
                    {
                        featledge?.features?.map(feat => (
                            <li><p>{feat}</p></li>
                        ))
                    }
                </ul>
            </div>
            <hr/>
            <div class="featledge__knowledge">
                <h3 class="featledge__knowledge-title"><img src={knowicon} alt="hat"/>Knowledge</h3>
                <ul>
                    {
                        featledge?.knowledge?.map(know => (
                            <li><p>{know}</p></li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Featledge
