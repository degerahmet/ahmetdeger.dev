import React from 'react';

interface ContactInfoProps {
  email: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ email }) => {
  return (
    <div>
      <div className="text-[#607B96] mb-2">// contacts</div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-[#4D5BCE]">email:</span>
          <a href={`mailto:${email}`} className="text-[#607B96] hover:text-white">
            {email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;