import React, { useState } from 'react';
import '../Css_files/LoginPage.css';

const Signup = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
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
          <form>
            {isSignUp && (
              <>
                <input type="text" placeholder="Username" required />
                <input type="email" placeholder="Email" required />
                <input type="phone" placeholder="Phone" required />
              </>
            )}
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="login-button">
              {isSignUp ? "Sign Up" : "Log In"}
            </button>
            <button type="button" className="toggle-button" onClick={toggleForm}>
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