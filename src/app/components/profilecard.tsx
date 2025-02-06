import React from 'react';

// Define the prop types for ProfileCard
interface ProfileCardProps {
  username: string;
  githubLink: string;
  linkedinLink: string;
  instagramLink: string;
  avatarImage: string;
}

export default function ProfileCard({ username, githubLink, linkedinLink, instagramLink,avatarImage }: ProfileCardProps) {
  return (
    
    <div className="relative max-w-sm shadow-lg rounded-lg overflow-hidden">
      {/* Avatar Image */}
      <img
        src={avatarImage} 
        alt="Avatar"
        className="w-full h-72 object-cover transform scale-75"
      />

      {/* Social Icons */}
      <div className="absolute bottom-4 left-4 flex space-x-2 p-2 rounded-3xl bg-gray-200 bg-opacity-70">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-lg text-black hover:text-gray-400"></i>
        </a>
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin fa-lg text-black hover:text-gray-400"></i>
        </a>
        <a href={instagramLink} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram fa-lg text-black hover:text-gray-400"></i>
        </a>
      </div>

      {/* Username in the right bottom corner */}
      <div className="absolute bottom-0 right-4 p-2 text-black font-semibold">
        {username}
      </div>
    </div>
  );
}

export function ProfileCardsContainer() {
  return (
    <div className="flex justify-center space-x-20 mt-16"> {/* Spacing between the cards */}
      <ProfileCard 
        username="@Om" 
        githubLink="https://github.com/OM-PAGARIYA28" 
        linkedinLink="https://www.linkedin.com/in/om-pagariya-b70a60250/" 
        instagramLink="https://www.instagram.com/pagariya_om28/" 
        avatarImage='./om_avatar2.png'
      />
      <ProfileCard 
        username="@Aditya" 
        githubLink="https://github.com/Aditya01229" 
        linkedinLink="https://www.linkedin.com/in/yourusernameAditya" 
        instagramLink="https://www.instagram.com/yourusernameAditya" 
        avatarImage='./Aditya_Avatar.png'
      />
    </div>

  );
}
