// ProfilePage.tsx
import React from 'react';
import UserProfile from '@/components/UserProfile';
import ExperienceItem from '@/components//ExperienceItem';
import EducationItem from '@/components//EducationItem';
import SkillItem from '@/components//SkillItem';

import data from "@/data.json"

const ProfilePage: React.FC = () => {
  const {personalDetail, experiences, education, skills } = data;
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <UserProfile firstName={personalDetail.firstName} lastName={personalDetail.lastName} title={personalDetail.title} />
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-2 pb-2 pt-4">About</h3>
        <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-2">{personalDetail.about}</p>

        {/* Experience Section */}
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-2 pb-2 pt-4">Experience</h3>
        {experiences.map((experience) => (
          <ExperienceItem 
            key={experience.title} 
            title={experience.title} 
            company={experience.company}
            startingDate={experience.startingDate} 
            endingDate={experience.endingDate} 
            location={experience.location} 
          />
        ))}

        {/* Education Section */}
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-2 pb-2 pt-4">Education</h3>
        {education.map((edu) => (
          <EducationItem 
            key={edu.degree} 
            degree={edu.degree} 
            schoolName={edu.schoolName} 
            years={edu.year} 
          />
        ))}

        {/* Skills Section */}
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-2 pb-1 pt-4">Skills</h3>
        <div className="flex gap-3 p-3 flex-wrap pr-4">
          {skills.map((skill) => (
            <SkillItem key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
