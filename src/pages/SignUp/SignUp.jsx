import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import googleImage from "/assets/img/google.jpg";
import signupImage from "/assets/img/signup.png";

const SignUp = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedStates, setSelectedStates] = useState([]);
  const [cannabisProducts, setCannabisProducts] = useState([]);
  const [hasLicense, setHasLicense] = useState("");
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // New state for success popup

  const countryStates = {
    USA: ["Alaska", "Arizona", "California", "Colorado"],
    CANADA: ["Alberta", "British Columbia"],
  };

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setSelectedStates([]); // Reset selected states when country changes
  };

  const handleStateChange = (event) => {
    const selectedState = event.target.value;
    setSelectedStates((prevStates) => {
      if (prevStates.includes(selectedState)) {
        return prevStates.filter((state) => state !== selectedState);
      } else {
        return [...prevStates, selectedState];
      }
    });
  };

  const handleCannabisProductsChange = (event) => {
    const selectedProduct = event.target.value;
    setCannabisProducts((prevProducts) => {
      if (prevProducts.includes(selectedProduct)) {
        return prevProducts.filter((product) => product !== selectedProduct);
      } else {
        return [...prevProducts, selectedProduct];
      }
    });
  };

  const handleLicenseChange = (event) => {
    const value = event.target.value;
    setHasLicense(value);
    setShowAdditionalInfo(value === "Yes");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      fullname: e.target.fullname.value,
      email: e.target.email.value,
      password: e.target.password.value,
      country: selectedCountry,
      states: selectedStates,
      cannabisProducts,
      license: hasLicense,
      licenseNumber: e.target["license-number"]?.value,
      city: e.target.city?.value,
      postcode: e.target.postcode?.value,
      phone: e.target.phone?.value,
    };

    console.log("Form submitted:", formData);

    // Show SweetAlert2 success message with animation
    Swal.fire({
      title: "Successfully Registered!",
      text: "You have been registered successfully.",
      icon: "success",
      showConfirmButton: false,
      timer: 1500, // Close the alert automatically after 1.5 seconds
      willClose: () => {
        setShowSuccessPopup(false); // Optional: If you still want to hide the custom popup
      },
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-6 sm:px-8 lg:px-12">
      <div className="flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden bg-white w-full max-w-6xl md:max-w-7xl">
        {/* Left Section with Image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src={signupImage}
            alt="Sign Up Visual"
            style={{ width: "570px", height: "900px", paddingTop: "30%" }}
            className="object-cover"
          />
        </div>

        {/* Right Section with Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-10 md:p-12 relative">
          {/* Home Page Link */}
          <div className="absolute top-4 right-4 text-sm">
            Go back to{" "}
            <Link
              to="/login"
              className="font-medium text-green-600 hover:underline"
            >
              Login
            </Link>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-center mt-8 text-green-600">
            Create an account
          </h2>

          {/* Vendor Form */}
          <form onSubmit={handleSubmit} className="space-y-8 mt-8">
            <div>
              <label
                htmlFor="fullname"
                className="block text-sm font-medium text-gray-700 text-left"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                className="w-full px-4 py-3 mt-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Write your full name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 text-left"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 mt-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Write your email address"
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
                name="password"
                className="w-full px-4 py-3 mt-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700 text-left"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                className="w-full px-4 py-3 mt-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Confirm your password"
                required
              />
            </div>

            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700 text-left"
              >
                Select Country
              </label>
              <select
                id="country"
                name="country"
                className="w-full px-4 py-3 mt-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={selectedCountry}
                onChange={(e) => handleCountryChange(e.target.value)}
                required
              >
                <option value="">Select Country</option>
                <option value="USA">USA</option>
                <option value="CANADA">Canada</option>
                <option value="THAILAND">Thailand</option>
              </select>
            </div>

            {(selectedCountry === "USA" || selectedCountry === "CANADA") && (
              <div>
                <label
                  htmlFor="states"
                  className="block text-sm font-medium text-gray-700 text-left"
                >
                  Select States
                </label>
                <div className="space-y-2">
                  {countryStates[selectedCountry]?.map((state) => (
                    <div key={state} className="flex items-center">
                      <input
                        type="checkbox"
                        id={state}
                        value={state}
                        checked={selectedStates.includes(state)}
                        onChange={handleStateChange}
                        className="h-4 w-4 text-green-600 border-gray-300 rounded"
                      />
                      <label
                        htmlFor={state}
                        className="ml-2 text-sm text-gray-700"
                      >
                        {state}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label
                htmlFor="license"
                className="block text-sm font-medium text-gray-700 text-left"
              >
                Do you have the necessary licenses to sell, or are you
                purchasing for personal or resale purposes?
              </label>
              <select
                id="license"
                name="license"
                className="w-full px-4 py-3 mt-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={hasLicense}
                onChange={handleLicenseChange}
                required
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {hasLicense === "Yes" && (
              <>
                <div>
                  <label
                    htmlFor="license-number"
                    className="block text-sm font-medium text-gray-700 text-left"
                  >
                    License Number
                  </label>
                  <input
                    type="text"
                    id="license-number"
                    name="license-number"
                    className="w-full px-4 py-3 mt-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter your license number"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="license-image"
                    className="block text-sm font-medium text-gray-700 text-left"
                  >
                    Upload License Image
                  </label>
                  <input
                    type="file"
                    id="license-image"
                    name="license-image"
                    accept="image/jpeg, image/png"
                    title="Please upload a JPEG or PNG image (max 5MB)."
                    aria-label="Upload License Image"
                    className="w-full px-4 py-3 mt-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
              </>
            )}

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

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <button
                type="submit"
                className="w-full px-4 py-3 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md"
              >
                Sign Up
              </button>
            </div>

            <div className="text-center my-6">
              <p className="text-gray-600 text-sm">or continue with</p>
              <button className="mt-3 flex items-center justify-center w-full px-6 py-3 border rounded-md hover:bg-gray-100">
                <img src={googleImage} alt="Google" className="w-6 h-6 mr-3" />
                <span className="text-sm font-medium text-gray-700">
                  Google
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
