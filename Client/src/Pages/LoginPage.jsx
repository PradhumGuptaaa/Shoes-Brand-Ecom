import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css_files/LoginPage.css";

const Signup = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
    });
    setErrors({});
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    // Validate Full Name (only for SignUp)
    if (isSignUp && !formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    // Validate Email
    if (!formData.email) {
      newErrors.email = "Email is required";
    }

    // Validate Phone Number (only for SignUp, 10 digits)
    if (isSignUp && !/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone Number must be 10 digits";
    }

    // Validate Password (at least 8 characters)
    if (!formData.password || formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form
    if (!validateForm()) return;

    try {
      let response, data;
      if (isSignUp) {
        // Sign Up Request
        response = await fetch("http://localhost:5000/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        data = await response.json();

        if (response.ok) {
          alert("Signup Successful! Please login.");
          setFormData({
            fullName: "",
            email: "",
            phoneNumber: "",
            password: "",
          });
          setIsSignUp(false);
        } else {
          alert(data.message || "Signup Failed!"); // Display error message from server
        }
      } else {
        // Sign In Request
        response = await fetch("http://localhost:5000/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        data = await response.json();

        if (response.ok) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));

          // Role-based navigation
          if (data.user.role === "admin") {
            navigate("/admin/dashboard");
          } else {
            navigate("/");
          }
        } else {
          // Ensure the error message is from the server, not an object
          const errorMessage = data?.message || "Login Failed!";
          alert(errorMessage); // Display error message properly
        }
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-page-container">
      <div className="left-section">
        <div className="left-content">
          <h1>Your Ideas into Reality</h1>
          <p>Start for free and get attractive offers from the community</p>
        </div>
      </div>
      <div className="right-section">
        <div className="form-wrapper">
          <h3>{isSignUp ? "Sign Up" : "Login"}</h3>
          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && <div className="error">{errors.fullName}</div>}

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="error">{errors.email}</div>}

                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                {errors.phoneNumber && (
                  <div className="error">{errors.phoneNumber}</div>
                )}
              </>
            )}
            {!isSignUp && (
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            )}
            {errors.email && <div className="error">{errors.email}</div>}

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <div className="error">{errors.password}</div>
            )}

            <button type="submit" className="login-button">
              {isSignUp ? "Sign Up" : "Log In"}
            </button>

            <button
              type="button"
              className="toggle-button"
              onClick={toggleForm}
            >
              {isSignUp ? "Login" : "Register"}
            </button>

            <div className="google-button">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google Logo"
              />
              <span>Sign in with Google</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
