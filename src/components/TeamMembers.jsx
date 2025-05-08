import React from 'react';

import '../styles/team-members.css';
import { useTranslation } from 'react-i18next';

const TeamMembers = ({members}) => {
    const { t } = useTranslation();
  return (
    <div>
        {members && (
            <section className="team">
            <div className="container">
                <div className="team__wrapper">
                    <h2 className="team__title">{t('tools')}</h2>
                    <div className="team__members">
                        {
                            members?.map((member,index) => (
                                <div className="team__members-person" key={index}>
                                    <img src={member.photo} alt="profile" className="team__members-person-img"/>
                                    <p className="team__members-person-name">{member.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
        )}
    </div>
  )
}

export default TeamMembers
