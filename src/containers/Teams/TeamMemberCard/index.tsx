import React, {FC} from 'react';

import {A} from 'components';

import './TeamMemberCard.scss';

interface ComponentProps {
  displayName: string;
  githubUsername: string;
  isLead: boolean;
  payPerDay: number;
  profileImage: string;
  slackUsername: string;
  titles: string[];
}

const TeamMemberCard: FC<ComponentProps> = ({
  displayName,
  githubUsername,
  isLead,
  payPerDay,
  profileImage,
  slackUsername,
  titles,
}) => {
  const renderAvatar = () => (
    <div>
      <img className="TeamMemberCard__user-avatar" src={profileImage} alt={displayName} />
    </div>
  );

  const renderLeadFlag = () => <div className="TeamMemberCard__lead-flag">Team Lead</div>;

  const renderMemberDetails = () => (
    <div className="TeamMemberCard__details">
      <h2 className="TeamMemberCard__details-name">{displayName}</h2>
      <div>{titles.join(', ')}</div>
      <div>Slack: {slackUsername}</div>
      <div>
        Github: <A href={`https://github.com/${githubUsername}`}>{githubUsername}</A>
      </div>
      <div>
        Pay Per Day: <span className="TeamMemberCard__details-pay">{payPerDay}</span>
      </div>
    </div>
  );

  return (
    <div className="TeamMemberCard">
      {renderAvatar()}
      {isLead && renderLeadFlag()}
      {renderMemberDetails()}
    </div>
  );
};

export default TeamMemberCard;
