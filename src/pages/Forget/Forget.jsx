import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate hook from react-router-dom
import Swal from "sweetalert2"; // Import SweetAlert2
import verifyImage from "/assets/img/forget.png";

const Forget = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate(); // Use the useNavigate hook for navigation

  // Handle input changes
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  // Toggle password visibility
  const toggleNewPasswordVisibility = () =>
    setShowNewPassword(!showNewPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  // Handle Reset Password button click
  const handleResetPassword = () => {
    if (!newPassword || !confirmPassword) {
      setMessage("Please enter and confirm your new password.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    // Simulate password reset logic here
    setMessage("Your password has been reset successfully.");

    // Use SweetAlert2 for success popup with animation
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Your password has been reset successfully.",
      showConfirmButton: false,
      timer: 2000,
      willClose: () => {
        // After the alert closes, navigate to homepage
        navigate("/home");
      },
      customClass: {
        popup: "animate__animated animate__fadeIn", // Add animation
      },
    });
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen mb-2 px-4 lg:px-0">
      {/* Image Section */}
      <div className="flex items-center justify-center lg:w-1/2 w-full p-4">
        <img
          src={verifyImage}
          alt="Reset Password"
          className="h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] w-auto object-contain rounded-lg max-w-full mt-2"
        />
      </div>

      {/* Form Section */}
      <div className="flex flex-col items-center lg:w-1/3 w-full bg-white p-6 lg:p-8 shadow-lg rounded-lg mb-4 lg:mb-0">
        <h2 className="text-2xl font-bold text-green-600 mb-4 text-center">
          Reset Password
        </h2>
        <p className="text-gray-600 text-center mb-6 text-sm sm:text-base">
          Create Your New Password
        </p>

        {/* New Password Section */}
        <div className="w-full mb-4 relative">
          <input
            type={showNewPassword ? "text" : "password"}
            value={newPassword}
            onChange={handleNewPasswordChange}
            placeholder="Enter new password"
            className="w-full p-2 border-2 border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="button"
            onClick={toggleNewPasswordVisibility}
            className="absolute right-2 top-2 text-gray-500 bg-transparent p-1 rounded-full focus:outline-none hover:text-gray-700"
          >
            {showNewPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>

        {/* Confirm Password Section */}
        <div className="w-full mb-4 relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Confirm new password"
            className="w-full p-2 border-2 border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="button"
            onClick={toggleConfirmPasswordVisibility}
            className="absolute right-2 top-2 text-gray-500 bg-transparent p-1 rounded-full focus:outline-none hover:text-gray-700"
          >
            {showNewPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>

        <button
          onClick={handleResetPassword}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200"
        >
          Update Password
        </button>

        {message && (
          <p className="text-sm text-orange-500 mt-4 text-center">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Forget;
