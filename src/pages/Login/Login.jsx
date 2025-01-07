import React from "react";
import { Link } from "react-router-dom";
import googleImage from "/assets/img/google.jpg";
import loginImage from "/assets/img/login.png";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-6 sm:px-8 lg:px-12 ">
      <div className="flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden bg-white w-full max-w-6xl md:max-w-7xl">
        {/* Left Section with Image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src={loginImage}
            alt="Login Visual"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Section with Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-10 md:p-12 relative">
          {/* Home Page Link */}
          <div className="absolute top-4 right-4 text-sm">
            Go back to{" "}
            <Link to="/" className="font-medium text-green-600 hover:underline">
              Home Page
            </Link>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-center mt-8 text-green-600">
            Log In
          </h2>

          <form className="space-y-8 mt-8">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 text-left"
              >
                Username or Email
              </label>
              <input
                type="text"
                id="email"
                className="w-full px-4 py-3 mt-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Write your username or email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 text-left"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 mt-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Write your password"
                required
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                I agree to the Terms and Conditions
              </label>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 text-sm font-medium text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 bg-green-700 hover:bg-green-800"
            >
              Log In
            </button>
          </form>

          <p className="text-sm text-center text-gray-600 mt-4">
            Forgot Password?{" "}
            <Link
              to="/reset-password"
              className="font-medium text-green-600 hover:underline"
            >
              Reset here
            </Link>
          </p>

          <div className="text-center my-6">
            <p className="text-gray-600 text-sm">or continue with</p>
            <button className="mt-3 flex items-center justify-center w-full px-6 py-3 border rounded-md hover:bg-gray-100">
              <img src={googleImage} alt="Google" className="w-6 h-6 mr-3" />
              <span className="text-sm font-medium text-gray-700">Google</span>
            </button>
          </div>

          <p className="text-sm text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link
              to="/sign-up"
              className="font-medium text-green-600 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
