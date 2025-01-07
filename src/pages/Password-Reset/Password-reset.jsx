import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Swal from "sweetalert2"; // Import SweetAlert2
import fpImage from "/assets/img/forget.png"; // Image import

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle Send OTP button click
  const handleSendOTP = () => {
    // Validate if email is entered
    if (email) {
      // Show SweetAlert2 success popup
      Swal.fire({
        title: "Success!",
        text: "OTP sent to your email",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        // Navigate to EmailVerify page after "OK" is clicked
        navigate("/email-verify");
      });

      // Log email to console
      console.log("OTP sent to: ", email);

      // Reset message state
      setMessage("");
    } else {
      // Show error message if email is not provided
      setMessage("Please enter a valid email address");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen mb-2 px-4 lg:px-0">
      {/* Image Section */}
      <div className="flex items-center justify-center lg:w-1/2 w-full p-4">
        <img
          src={fpImage} // Use imported image
          alt="Forgot Password"
          className="h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] w-full object-contain rounded-lg max-w-full mt-2"
        />
      </div>

      {/* Form Section */}
      <div className="flex flex-col items-center lg:w-1/3 w-full bg-white p-6 lg:p-8 shadow-lg rounded-lg mb-4 lg:mb-0">
        <h2 className="text-2xl font-bold text-green-600 mb-4 text-center">
          Forgot Password?
        </h2>
        <p className="text-gray-600 text-center mb-6 text-sm sm:text-base">
          You may receive email notifications from us to reset your password for
          security and login purposes.
        </p>
        <input
          type="email"
          placeholder="Write your email address"
          value={email}
          onChange={handleEmailChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
        />
        <button
          onClick={handleSendOTP}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200"
        >
          Send OTP
        </button>
        {message && (
          <p className="text-sm text-orange-500 mt-4 text-center">{message}</p>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
