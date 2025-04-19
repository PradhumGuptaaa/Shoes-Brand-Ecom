// import {
//   Label,
//   Button,
//   ButtonGroup,
//   Navbar,
//   TextInput,
//   FloatingLabel,
//   Alert,
//   Spinner,
// } from "flowbite-react";
// import { useDispatch, useSelector } from "react-redux";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Magnet from '../AdvertisingSection/sub_component/Magnet';
// import { useNavigate } from "react-router-dom";
// import "../Css_files/LoginPage.css";
// import Google from "../components/ui/Google"

// const Signup = () => {
//   const [isSignUp, setIsSignUp] = useState(false);
//   const { loading, error: errorMessage } = useSelector((state) => state.user);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phoneNumber: "",
//     password: "",
//   });
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const toggleForm = () => {
//     setIsSignUp(!isSignUp);
//     setFormData({
//       fullName: "",
//       email: "",
//       phoneNumber: "",
//       password: "",
//     });
//     setErrors({});
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     // Validate Full Name (only for SignUp)
//     if (isSignUp && !formData.fullName.trim()) {
//       newErrors.fullName = "Full Name is required";
//     }

//     // Validate Email
//     if (!formData.email) {
//       newErrors.email = "Email is required";
//     }

//     // Validate Phone Number (only for SignUp, 10 digits)
//     if (isSignUp && !/^\d{10}$/.test(formData.phoneNumber)) {
//       newErrors.phoneNumber = "Phone Number must be 10 digits";
//     }

//     // Validate Password (at least 8 characters)
//     if (!formData.password || formData.password.length < 8) {
//       newErrors.password = "Password must be at least 8 characters long";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate the form
//     if (!validateForm()) return;

//     try {
//       let response, data;
//       if (isSignUp) {
//         // Sign Up Request
//         response = await fetch("http://localhost:000/auth/register", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         });

//         data = await response.json();

//         if (response.ok) {
//           alert("Signup Successful! Please login.");
//           setFormData({
//             fullName: "",
//             email: "",
//             phoneNumber: "",
//             password: "",
//           });
//           setIsSignUp(false);
//         } else {
//           alert(data.message || "Signup Failed!"); // Display error message from server
//         }
//       } else {
//         // Sign In Request
//         response = await fetch("http://localhost:5000/auth/login", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             email: formData.email,
//             password: formData.password,
//           }),
//         });

//         data = await response.json();

//         if (response.ok) {
//           localStorage.setItem("token", data.token);
//           localStorage.setItem("user", JSON.stringify(data.user));

//           // Role-based navigation
//           if (data.user.role === "admin") {
//             navigate("/admin/dashboard");
//           } else {
//             navigate("/");
//           }
//         } else {
//           // Ensure the error message is from the server, not an object
//           const errorMessage = data?.message || "Login Failed!";
//           alert(errorMessage); // Display error message properly
//         }
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="login-page-container max-h-[100vh] ">
//       <div className="left-section relative ">
//       <Link to="/" >  <Magnet padding={10} disabled={false} magnetStrength={7}>
//                 <h1 className="w-64 md:w-64  object-contain logo  text-[#ff266e]  absolute top-[-40vh] left-[-2vw] text-5xl font-extrabold">Steps</h1>
//               </Magnet>  </Link>
//         <div className="left-content ">
//           <h1>Your Ideas into Reality</h1>
//           <p>Start for free and get attractive offers from the community</p>

//         </div>
//       </div>
//       <div className="right-section">
//         <div className="form-wrapper">
//           <h3>{isSignUp ? "Sign Up" : "Login"}</h3>
//           <form onSubmit={handleSubmit}>
//             {isSignUp && (
//               <>
//                 <input
//                   type="text"
//                   name="fullName"
//                   placeholder="Full Name"
//                   required
//                   value={formData.fullName}
//                   onChange={handleChange}
//                 />
//                 {errors.fullName && <div className="error">{errors.fullName}</div>}

//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//                 {errors.email && <div className="error">{errors.email}</div>}

//                 <input
//                   type="text"
//                   name="phoneNumber"
//                   placeholder="Phone Number"
//                   required
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                 />
//                 {errors.phoneNumber && (
//                   <div className="error">{errors.phoneNumber}</div>
//                 )}
//               </>
//             )}
//             {!isSignUp && (
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             )}
//             {errors.email && <div className="error">{errors.email}</div>}

//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               required
//               value={formData.password}
//               onChange={handleChange}
//             />
//             {errors.password && (
//               <div className="error">{errors.password}</div>
//             )}

//             <button type="submit" className="login-button">
//               {isSignUp ? "Sign Up" : "Log In"}
//             </button>


//             <div className="google-button">
//               <Button
//                 type="submit"
//                 className=" nav-hover-btn"
//                 onClick={toggleForm}
//                 disabled={loading}
//               >
//                 {isSignUp ? "Login" : "Sign Up"}
//                 {loading ? (
//                   <>
//                     <Spinner size="sm" />
//                     <span className="pl-3">Loading...</span>
//                   </>
//                 ) : (
//                   ""
//                 )}
//               </Button>
             
//             </div>
//             <Google />
//              {errorMessage && (
//               <Alert className="mt-5" color="failure">
//                 {errorMessage}
//               </Alert> 
//                 )}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import {
  Label,
  Button,
  ButtonGroup,
  Navbar,
  TextInput,
  FloatingLabel,
  Alert,
  Spinner,
} from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Magnet from '../AdvertisingSection/sub_component/Magnet';
import { useNavigate } from "react-router-dom";
import "../Css_files/LoginPage.css";
import Google from "../components/ui/Google"

const Signup = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const { loading, error: errorMessage } = useSelector((state) => state.user);
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
    <div className="login-page-container max-h-[100vh] ">
      <div className="left-section relative ">
      <Link to="/" >  <Magnet padding={10} disabled={false} magnetStrength={7}>
                <h1 className="w-64 md:w-64  object-contain logo  text-[#ff266e]  absolute top-[-40vh] left-[-2vw] text-5xl font-extrabold">Steps</h1>
              </Magnet>  </Link>
        <div className="left-content ">
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


            <div className="google-button">
              <Button
                type="submit"
                className=" nav-hover-btn"
                onClick={toggleForm}
                disabled={loading}
              >
                {isSignUp ? "Login" : "Sign Up"}
                {loading ? (
                  <>
                    <Spinner size="sm" />
                    <span className="pl-3">Loading...</span>
                  </>
                ) : (
                  ""
                )}
              </Button>
             
            </div>
            <Google />
             {errorMessage && (
              <Alert className="mt-5" color="failure">
                {errorMessage}
              </Alert> 
                )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;