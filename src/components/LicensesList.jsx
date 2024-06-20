import React from 'react';

import '../styles/licenseslist.css';

const LicensesList = ({licenses}) => {
  return (
    <div>
        <div className="licenses">
            <div className="container">
                <div className="licenses__wrapper">
                    {
                        licenses?.map((license,index) => (
                            <div className="licenses__item" key={index}>
                                <div className="licenses__item-name">
                                    <h4 className="licenses__item-name-title">{license.categoryTitle}</h4>
                                </div>
                                <div className="licenses__item-description">
                                    <p className="licenses__item-description-text">{license.categoryText}</p>
                                    {
                                        license?.category?.map(item => (
                                            <div className="licenses__item-description-content">
                                                <h5 className="licenses__item-description-content-info">{item.info} : Licenses</h5>
                                                <p className="licenses__item-description-content-text">{item.text}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default LicensesList
