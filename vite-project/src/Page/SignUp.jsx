import React from 'react';

const Signup = () => {
  return (
    <div className=" flex  justify-center ">
      <div className="max-w-7xl w-full flex  bg-white">s
        {/* Left Section: Image and Logo */}
        <div className="w-1/2 bg-white p-8 flex items-center justify-center relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-wrap justify-center">
              {/* Colorful Cutlery Illustration */}
              <div className="relative z-10 w-32 h-32 bg-white rounded-full border border-gray-200 shadow-md">
                <img src="/cutlery.png" alt="Cutlery Illustration" className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
          </div>
        </div>
        {/* Right Section: Signup Form */}
        <div className="w-1/2 bg-white p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome to Jammy</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your Email here"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your Password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <button
              type="submit"
              className="w-1/2 py-2 bg-orange-500 text-white text-2xly
               hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              Create Account
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-500">
            Already have an account? <a href="#" className="text-orange-500 hover:underline">Log in</a>
          </p>
          <div className="mt-6 flex items-center justify-between">
            <span className="text-gray-500">OR</span>
          </div>
          <div className="mt-4 flex space-x-4">
            <button className="w-full flex items-center justify-center p-2 bg-white border border-gray-300 rounded-lg">
              <img src="/google-icon.png" alt="Google" className="w-5 h-5 mr-2" /> Sign up with Google
            </button>
            <button className="w-full flex items-center justify-center p-2 bg-white border border-gray-300 rounded-lg">
              <img src="/facebook-icon.png" alt="Facebook" className="w-5 h-5 mr-2" /> Sign up with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
