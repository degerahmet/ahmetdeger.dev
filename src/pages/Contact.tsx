import React, { useState } from 'react';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';
import CodePreview from '../components/Contact/CodePreview';
import SocialLinks from '../components/Contact/SocialLinks';
import type { FormData } from '../types/contact';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(!isSubmitted);
    if (isSubmitted) {
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="min-h-[calc(100vh-116px)] flex flex-col md:flex-row">
      {/* Left Panel - Contact Form */}
      <div className="md:w-2/3 border-r border-[#1E2D3D]">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-xl text-white mb-4">_contact-me</h1>
            <ContactForm
              formData={formData}
              onFormChange={setFormData}
              onSubmit={handleSubmit}
              isSubmitted={isSubmitted}
            />
          </div>
          <div className="mt-12">
            <ContactInfo email="degerahmet.dev@gmail.com" />
          </div>
        </div>
      </div>

      {/* Right Panel - Code Preview & Social Links */}
      <div className="md:w-1/3 bg-[#011627]">
        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-[#607B96] mb-4">// code preview</h2>
            <div className="bg-[#011627] rounded-lg">
              <CodePreview formData={formData} />
            </div>
          </div>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Contact;