import React from 'react';

const ContactMe = () => {
  return (
    <div className="mx-10 flex flex-col md:flex-row  h-full">
      {/* Left Section (Contact Me Text) */}
      <div className="w-full md:w-1/2  text-gray-500 flex flex-col justify-center items-center p-4 md:p-8">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="w-1/2 text-md md:text-lg">I&apos;d love to hear from you! Whether you have a question or just want to say hi, feel free to drop a message.</p>
      </div>

      {/* Right Section (Contact Form) */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-8">
        <form className="w-full max-w-sm text-gray-500">
          <div className="mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows={3}
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
