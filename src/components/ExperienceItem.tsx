// ExperienceItem.tsx
import React from 'react';

interface ExperienceItemProps {
  title: string;
  startingDate: string; // Expected format: 'YYYY-MM'
  endingDate: string; // Expected format: 'YYYY-MM' or 'Present' for ongoing roles
  location: string;
  company: string; 
}

const calculateDuration = (startingDate: string, endingDate: string): string => {
  const start = new Date(startingDate);
  const end = endingDate.toLowerCase() === 'present' ? new Date() : new Date(endingDate);

  const totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let duration = '';
  if (years > 0) duration += `${years} yr${years > 1 ? 's' : ''} `;
  if (months > 0) duration += `${months} mo${months > 1 ? 's' : ''}`;
  
  return duration.trim();
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, startingDate, endingDate, location, company }) => {
  const duration = calculateDuration(startingDate, endingDate);

  return (
    <div className="flex items-center gap-4 bg-[#111418] px-4 min-h-[72px] py-2 justify-between">
      <div className="flex items-center gap-4">
        <div className="flex size-7 items-center justify-center">
            <div className="size-2 rounded-full bg-[#0bda5b]"></div>
          </div>
        <div className="flex flex-col justify-center">
          <p className="text-white text-base font-bold leading-normal line-clamp-1">{title}</p>
          <p className="text-white text-base font-normal italic leading-normal line-clamp-1">{company}</p>
        </div>
      </div>
      <div className="shrink-0">
        <div className="flex flex-col items-end justify-center">
          <p className="text-white text-sm font-normal leading-normal line-clamp-2">{location}</p>
          <p className="text-[#9cabba] text-sm font-normal leading-normal line-clamp-2">{startingDate} - {endingDate}</p>
          <p className="text-[#9cabba] text-sm font-normal leading-normal line-clamp-2">({duration})</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
