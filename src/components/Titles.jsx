import React from 'react';

const Titles = ( {name, image} ) => {
  return (
    <div className="titles">
        <div className="container">
            <div className="titles__wrapper">
                <div className="titles__leftline"></div>
                <div className="titles__name">
                    <img src={image} alt="icon" />
                    <div className="titles__name-text">{name}</div>
                </div>
                <div className="titles__rightline"></div>
            </div>
        </div>
    </div>
  )
}

export default Titles
