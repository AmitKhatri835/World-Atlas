import React from "react";

const Contact = () => {
  // const handleFormSubmit = (formData) => {
  //   formData.preventDefault();
  //   const formInputData = object.formEntries(formData.entries());
  //   console.log(formInputData);
  // };
  return (
    <div className="w-full m-auto my-[50px] text-center">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
      <form
        // action={handleFormSubmit}
        className="w-70% sw:w-[85%] md-w-[70%] flex flex-col items-center justify-center"
      >
        <input
          className="w-[50%] sm:w-[50%] md:w-[50%] bg-gray-800 border border-gray-700 rounded-lg px-6 py-2 mb-6 focus:outline-none focus:border-amber-500 transition-colors text-white placeholder-gray-400"
          type="text"
          required
          autoComplete="off"
          placeholder="Enter Your Name"
          name="username"
        />
        <input
          className="w-[50%] sm:w-[50%] md:w-[50%] bg-gray-800 border border-gray-700 rounded-lg px-6 py-2 mb-6 focus:outline-none focus:border-amber-500 transition-colors text-white placeholder-gray-400"
          type="email"
          required
          autoComplete="off"
          placeholder="Enter Your E-Mail"
          name="email"
        />
        <textarea
          className="w-[50%] sm:w-[50%] md:w-[50%] bg-gray-800 border border-gray-700 rounded-lg px-6 py-2 mb-6 focus:outline-none focus:border-amber-500 transition-colors text-white placeholder-gray-400 resize-none"
          name="message"
          placeholder="Enter Your Message"
          required
          autoComplete="off"
          rows="8"
        ></textarea>
        <button
          type="submit"
          className="w-[50%] sm:w-[50%] md:w-[50%] bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-lg px-6 py-2 hover:from-gray-700 hover:to-gray-800 transition-all cursor-pointer text-white font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
