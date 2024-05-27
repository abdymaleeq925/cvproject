import React from 'react';

import '../styles/services.css';

const Services = ({items}) => {
  return (
    <div>
      <section className="services">
        <div className="container">
            <div className="services__wrapper">
                <div className="services__list">
                    {
                        items?.map(item => (
                            <div className="services__list-item">
                                <div className="services__list-item-heading">
                                    <img src={item.icon} alt="icon"/>
                                    <p className="services__list-item-heading-title">{item.title}</p>
                                </div>
                                <div className="services__list-item-text">{item.text}</div>
                                <div className="services__list-item-field">
                                    <ul>
                                        {
                                            item?.fieldText?.map((text) => (
                                                <p className="services__list-item-field-text">{text}</p>
                                            ))
                                        }
                                    </ul>
                                </div>
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

export default Services
