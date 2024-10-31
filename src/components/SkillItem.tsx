// SkillItem.tsx
import React from 'react';

interface SkillItemProps {
  skill: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  return (
    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283039] pl-4 pr-4">
      <p className="text-white text-sm font-medium leading-normal">{skill}</p>
    </div>
  );
};

export default SkillItem;
