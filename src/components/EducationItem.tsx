// EducationItem.tsx
import React from 'react';


interface EducationItemProps {
  degree: string;
  years: string;
  schoolName: string;
}

const EducationItem: React.FC<EducationItemProps> = ({ degree, schoolName, years }) => {
  return (
    <div className="flex items-center gap-4 bg-[#111418] px-4 min-h-[72px] py-2">
      <div className="flex size-7 items-center justify-center">
          <div className="size-2 rounded-full bg-[#0bda5b]"></div>
        </div>
      <div className="flex flex-col justify-center">
        <p className="text-white text-base font-medium leading-normal line-clamp-1">{degree}</p>
        <p className="text-[#9cabba] text-sm font-normal leading-normal line-clamp-2">{schoolName}</p>
        <p className="text-[#9cabba] text-sm font-normal leading-normal line-clamp-2">{years}</p>
      </div>
    </div>
  );
};

export default EducationItem;
