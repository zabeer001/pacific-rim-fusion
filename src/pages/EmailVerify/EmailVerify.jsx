import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Swal from "sweetalert2"; // Import SweetAlert2
import verifyImage from "/assets/img/forget.png"; // Import image

const EmailVerify = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // State for 6 OTP digits
  const [message, setMessage] = useState("");
  const inputRefs = useRef([]); // Create an array of refs for the input fields
  const navigate = useNavigate(); // Initialize the navigation hook

  // Handle OTP input change
  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      // Allow only digits
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Focus the next input field if the current input is not empty
      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // Handle Backspace key to move focus to the previous input field
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Handle Verify OTP button click
  const handleVerifyOTP = () => {
    // Check if all OTP digits are entered
    if (otp.every((digit) => digit !== "")) {
      // Simulate OTP verification
      Swal.fire({
        title: "Verified!",
        text: "Your email has been verified successfully.",
        icon: "success",
        confirmButtonText: "OK",
        customClass: {
          confirmButton: "bg-green-600 text-white", // Green OK button
        },
      }).then(() => {
        // Navigate to Forget page after "OK" is clicked
        navigate("/forget");
      });

      // Reset message state
      setMessage("");
    } else {
      // Show error message if OTP is incomplete
      setMessage("Please enter a valid OTP");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen mb-2 px-4 lg:px-0">
      {/* Image Section */}
      <div className="flex items-center justify-center lg:w-1/2 w-full p-4">
        <img
          src={verifyImage} // Use imported image
          alt="Email Verification"
          className="h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] w-full object-contain rounded-lg  max-w-full mt-2"
        />
      </div>

      {/* Form Section */}
      <div className="flex flex-col items-center lg:w-1/3 w-full bg-white p-6 lg:p-8 shadow-lg rounded-lg mb-4 lg:mb-0">
        <h2 className="text-2xl font-bold text-green-600 mb-4 text-center">
          Verify Email
        </h2>
        <p className="text-gray-600 text-center mb-6 text-sm sm:text-base">
          Enter the OTP sent to your email to verify your identity.
        </p>

        {/* OTP Input Section */}
        <div className="flex space-x-2 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              value={digit}
              onChange={(e) => handleOtpChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              maxLength={1}
              ref={(el) => (inputRefs.current[index] = el)} // Assign ref to each input
              className="w-12 h-12 text-center border-2 border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          ))}
        </div>

        <button
          onClick={handleVerifyOTP}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200"
        >
          Verify OTP
        </button>

        {message && (
          <p className="text-sm text-orange-500 mt-4 text-center">{message}</p>
        )}
      </div>
    </div>
  );
};

export default EmailVerify;
