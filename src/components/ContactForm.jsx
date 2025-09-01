import { useState } from 'react';
const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Sending...');

    try {
      // In a real application, you would replace this URL with your backend API endpoint.
      // For now, this is a placeholder to demonstrate the form's front-end functionality.
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        setFormStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-lg text-white placeholder-gray-500
                   focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-lg text-white placeholder-gray-500
                   focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="4"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-lg text-white placeholder-gray-500
                   focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
      ></textarea>
      <button
        type="submit"
        className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full text-lg shadow-lg
                   hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
      >
        Send Message
      </button>
      {formStatus && (
        <p className="mt-4 text-center text-sm font-medium">
          {formStatus}
        </p>
      )}
    </form>
  );
};

export default ContactForm;