import React from "react";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "cfe25b0a-28d3-42b7-a401-6915148e943f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Form has been submitted successfully!");
    }
  };

  return (
    <div
      id="contact"
      className="p-6 bg-gray-100 dark:bg-black text-gray-900 dark:text-white"
    >
      <h1 className="text-3xl font-bold text-center mb-8">Get in Touch</h1>

      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Left Section: Contact Details */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-semibold mb-4">Let's Talk</h2>
          <p className="text-gray-700 dark:text-gray-300">
            I am eager to connect and collaborate on exciting new projects...
          </p>
          <div className="mt-6 space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Email: gohanmohapatra@gmail.com
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Phone: +91 7008939577
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Location: Cuttack, Odisha
            </p>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <form
          onSubmit={onSubmit}
          className="w-full md:w-1/2 p-4 bg-blue-100 dark:bg-blue-800 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
        >
          <label className="block mb-2 text-gray-800 dark:text-gray-200">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded transition duration-200 focus:outline-none focus:border-blue-500 hover:shadow-lg"
          />
          <label className="block mb-2 text-gray-800 dark:text-gray-200">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded transition duration-200 focus:outline-none focus:border-blue-500 hover:shadow-lg"
          />
          <label className="block mb-2 text-gray-800 dark:text-gray-200">
            Write Your Message Here
          </label>
          <textarea
            name="message"
            rows="4"
            placeholder="Enter your message"
            className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded transition duration-200 focus:outline-none focus:border-blue-500 hover:shadow-lg"
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-600 dark:bg-blue-700 text-white font-semibold rounded hover:bg-blue-700 dark:hover:bg-blue-800 transition duration-200"
          >
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
