import React, { useState } from 'react';

export default function Contact() {
  // Define state variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add your logic to send the email or perform any other actions here
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    //reset the form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold py-4">Contact</h1>
      <nav className="mb-8">
        <ul className="flex space-x-4">
          <li>
            <a href="tel:+16026890051" className="text-blue-500 hover:text-blue-700">
              <i className="fas fa-phone"></i>
            </a>
          </li>
          <li>
            <a href="mailto:petertjanasz@gmail.com" className="text-blue-500 hover:text-blue-700">
              <i className="fas fa-envelope"></i>
            </a>
          </li>
        </ul>
      </nav>
      <div className="w-full max-w-md p-4">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-md shadow-sm p-2 w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-md shadow-sm p-2 w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-gray-300 rounded-md shadow-sm p-2 w-full"
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}



