import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setFormData({ name: '', email: '', feedback: '' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 to-blue-700 p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-5xl flex">
        {/* Left Side - Contact Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <Input
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <Textarea
              placeholder="Your Feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md"
            >
              Send Message
            </Button>
          </form>
        </div>

        {/* Right Side - Contact Info */}
        <div className="w-1/2 bg-blue-900 text-white p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
          <p className="mb-4 text-lg">
            Reach out to us anytime. We're here to help!
          </p>
          <p className="flex items-center mb-2">
            📧{' '}
            <span className="ml-2">
              Email:{' '}
              <a href="mailto:yourcompany@email.com" className="underline">
                digitalinformationresources@email.com
              </a>
            </span>
          </p>
          <p className="flex items-center mb-2">
            📞 <span className="ml-2">Hotline: +95 9 772 217 03</span>
          </p>
          <p className="flex items-center">
            📍{' '}
            <span className="ml-2">
              Address: 123 Business Street, City, Country
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
