// UserProfile.tsx
import React from 'react';
import Picture from './Picture';

import picture from '@/app/picture.jpeg'

interface UserProfileProps {
  firstName: string;
  lastName: string;
  title: string;
}

const UserProfile: React.FC<UserProfileProps> = ({firstName, lastName, title})  => {
  return (
    <div className="flex flex-col justify-center items-left px-2">
      <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32">
        <Picture src={picture} width={100} height={100} alt='Ahmet Deger profile picture'/>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">{firstName} {lastName}</p>
        <p className="text-[#9cabba] text-base font-normal leading-normal">{title}</p>
      </div>
    </div>
  );
};

export default UserProfile;
