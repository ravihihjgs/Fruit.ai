import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulating login success
    navigate('/home'); // Redirect to the homepage after login
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-xl w-96 max-w-sm">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Login</h2>

        <p className="text-center text-sm text-gray-500 mb-6">
          By signing in you are agreeing to our{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Terms and Privacy Policy
          </a>
        </p>

        <div className="flex justify-center mb-6 space-x-4">
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            Login
          </a>
          <a href="#" className="text-gray-600 font-semibold hover:underline">
            Register
          </a>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Address */}
          <div>
            <label htmlFor="email" className="sr-only">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email Address"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
            <button type="button" className="absolute inset-y-0 right-3 flex items-center">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12h.01M12 12h.01M9 12h.01M5 7h14M5 17h14"
                ></path>
              </svg>
            </button>
          </div>

          {/* Remember password & Forget password */}
          <div className="flex items-center justify-between">
            <label className="inline-flex items-center text-gray-600">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>

        {/* Social Login */}
        <div className="text-center my-6 text-gray-600">or connect with</div>

        <div className="flex justify-center space-x-4">
          <a href="#" className="text-blue-600 hover:text-blue-700">
            <svg
              className="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.04c-5.53 0-10 4.47-10 10 0 4.97 3.66 9.09 8.44 9.88v-6.99h-2.54v-2.89h2.54v-2.21c0-2.52 1.48-3.9 3.76-3.9 1.09 0 2.22.2 2.22.2v2.46h-1.25c-1.24 0-1.62.77-1.62 1.55v1.89h2.78l-.44 2.89h-2.34v6.99c4.78-.79 8.44-4.91 8.44-9.88 0-5.53-4.47-10-10-10z" />
            </svg>
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-600">
            <svg
              className="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {/* Add your SVG path here */}
            </svg>
          </a>
          <a href="#" className="text-red-500 hover:text-red-600">
            <svg
              className="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.52 3 8.32 7.25 9.71v-6.83h-2.19v-2.88h2.19v-2.19c0-2.32 1.44-3.59 3.49-3.59 1 0 2.02.18 2.02.18v2.2h-1.14c-1.13 0-1.48.7-1.48 1.43v1.97h2.64l-.42 2.88h-2.22v6.83c4.25-1.39 7.25-5.19 7.25-9.71 0-5.52-4.48-10-10-10z" />
            </svg>
          </a>
          <a href="#" className="text-blue-700 hover:text-blue-800">
            <svg
              className="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.52 3 8.32 7.25 9.71v-6.83h-2.19v-2.88h2.19v-2.19c0-2.32 1.44-3.59 3.49-3.59 1 0 2.02.18 2.02.18v2.2h-1.14c-1.13 0-1.48.7-1.48 1.43v1.97h2.64l-.42 2.88h-2.22v6.83c4.25-1.39 7.25-5.19 7.25-9.71 0-5.52-4.48-10-10-10z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
