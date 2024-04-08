// components/ProfileCard.tsx
import React from 'react';
import './ProfileCard.css';

interface Profile {
  name: string;
  bio: string;
  website?: string;
}

interface ProfileCardProps {
  user: Profile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  return (

    // <div className="profile-card">
    //     <div className="blueshade"></div>
    //     <div className="circle"></div>
    //         <h2>{user.name}</h2>
    //         <p>{user.bio}</p>

    //         {user.website && (
    //             <a href={user.website} target="_blank" rel="noopener noreferrer">
    //             Visit Website
    //             </a>
    //         )}
    // </div>
    <div className="upc">
        <div className="gradient"></div>
        <div className="profile_down">
            <img src="data:image/jpeg;base64,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" alt="" />
            <div className="profile_title">{user.name}</div>
            <div className="profile_description">
                {user.bio}
            </div>
            <div className="profile_button">
                <a href="mailto:kwekubhanks040@gmail.com">Contact Me</a>
            </div>
        </div>

    </div>


  );
}

export default ProfileCard;
