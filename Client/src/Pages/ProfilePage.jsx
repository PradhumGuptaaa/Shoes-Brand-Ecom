import React from 'react';

const ProfilePage = () => {
  return (
    <div>
      <h1>Your Profile</h1>
      <p>Details about the user go here.</p>
    </div>
  );
};

export default ProfilePage;


  //  <div className="right-section">
  //       <div className="form-container">
  //         <h3>{isSignUp ? "Sign Up" : "Login"}</h3>
  //         <form onSubmit={handleSubmit}>
  //           {isSignUp && (
  //             <>
  //               <input
  //                 type="text"
  //                 name="fullName"
  //                 placeholder="Full Name"
  //                 value={formData.fullName}
  //                 onChange={handleChange}
  //               />
  //               {errors.fullName && (
  //                 <div className="error">{errors.fullName}</div>
  //               )}

  //               <input
  //                 type="text"
  //                 name="phoneNumber"
  //                 placeholder="Phone Number"
  //                 value={formData.phoneNumber}
  //                 onChange={handleChange}
  //               />
  //               {errors.phoneNumber && (
  //                 <div className="error">{errors.phoneNumber}</div>
  //               )}
  //             </>
  //           )}

  //           <input
  //             type="email"
  //             name="email"
  //             placeholder="Email"
  //             value={formData.email}
  //             onChange={handleChange}
  //           />
  //           {errors.email && <div className="error">{errors.email}</div>}

  //           <input
  //             type="password"
  //             name="password"
  //             placeholder="Password"
  //             value={formData.password}
  //             onChange={handleChange}
  //           />
  //           {errors.password && (
  //             <div className="error">{errors.password}</div>
  //           )}

  //           <button type="submit" className="login-button">
  //             {isSignUp ? "Sign Up" : "Log In"}
  //           </button>

  //           <button type="button" className="toggle-button" onClick={toggleForm}>
  //             {isSignUp
  //               ? "Already have an account? Login"
  //               : "Don't have an account? Sign Up"}
  //             {loading ? (
  //               <>
  //                 <Spinner size="sm" />
  //                 <span className="pl-3">Loading...</span>
  //               </>
  //             ) : (
  //               ""
  //             )}
  //           </button>
  //           <Google />
  //           {errorMessage && (
  //             <Alert className="mt-5" color="failure">
  //               {errorMessage}
  //             </Alert>
  //           )}
  //         </form>
  //       </div>
  //     </div>