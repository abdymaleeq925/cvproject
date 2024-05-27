import React from 'react';

import '../styles/team-members.css';

const TeamMembers = ({members}) => {
  return (
    <div>
        <section class="team">
            <div class="container">
                <div class="team__wrapper">
                    <h2 class="team__title">Team Members</h2>
                    <div class="team__members">
                        {
                            members?.map(member => (
                                <div className="team__members-person">
                                    <img src={member.photo} alt="profile" class="team__members-person-img"/>
                                    <p class="team__members-person-name">{member.name}</p>
                                    <p class="team__members-person-position">{member.position}</p>
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

export default TeamMembers
