import React from 'react';
import Button from '../UI/Button';
import { FormData } from '../../types/contact';

interface ContactFormProps {
  formData: FormData;
  onFormChange: (formData: FormData) => void;
  onSubmit: () => void;
  isSubmitted: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({
  formData,
  onFormChange,
  onSubmit,
  isSubmitted,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl text-[#43D9AD] mb-4">Thank you! 🤘</h2>
        <p className="text-[#607B96] mb-8">
          Your message has been accepted.<br />
          You will receive an answer really soon!
        </p>
        <Button
          variant="primary"
          onClick={() => onSubmit()}
        >
          send-new-message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormField
        label="_name"
        value={formData.name}
        onChange={(value) => onFormChange({ ...formData, name: value })}
        placeholder="Enter your name"
      />
      <FormField
        label="_email"
        type="email"
        value={formData.email}
        onChange={(value) => onFormChange({ ...formData, email: value })}
        placeholder="Enter your email"
      />
      <FormField
        label="_message"
        type="textarea"
        value={formData.message}
        onChange={(value) => onFormChange({ ...formData, message: value })}
        placeholder="Write your message..."
      />
      <Button type="submit" variant="primary">
        submit-message
      </Button>
    </form>
  );
};

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: 'text' | 'email' | 'textarea';
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
}) => {
  const baseClassName = "w-full bg-[#011627] border border-[#1E2D3D] rounded p-3 text-white focus:border-[#4D5BCE] focus:outline-none";

  return (
    <div>
      <label className="block text-[#607B96] mb-2">{label}:</label>
      {type === 'textarea' ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${baseClassName} h-32 resize-none`}
          placeholder={placeholder}
          required
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={baseClassName}
          placeholder={placeholder}
          required
        />
      )}
    </div>
  );
};

export default ContactForm;