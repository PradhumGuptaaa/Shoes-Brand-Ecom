// import gsap from "gsap";
// import { useEffect, useRef, useState } from "react";
// import { useWindowScroll } from 'react-use';
// import { Link } from "react-router-dom";
// import { TiLocationArrow } from "react-icons/ti";
// import { FaUserCircle } from "react-icons/fa";
// import { BsBagHeart, BsCart3 } from "react-icons/bs";
// import Button from "../AdvertisingSection/sub_component/Button";
// import Menu from '../AdvertisingSection/sub_component/Menu';
// import { CiMenuFries } from "react-icons/ci";

// const navItems = [
//   { label: "Home", icon: null, to: "/" },
//   { label: "Profile", icon: <FaUserCircle />, to: "/profile" },
//   { label: "Wishlist", icon: <BsBagHeart />, to: "/wishlist" },
//   { id: "men", label: "Men", icon: null, to: "/product/men" },
//   { id: "women", label: "Women", icon: null, to: "/product/women" },
//   { id: "men", label: "Kids", icon: null, to: "/product/kids" },
//   { label: "Cart", icon: <BsCart3 />, to: "/cart" },
//   { label: "accont", icon: null, to: "/account" },
// ];

// const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
//   const menuRef = useRef(null);
//   const menuItemsRef = useRef([]);

//   useEffect(() => {

//     if (isMenuOpen) {
//       gsap.fromTo(
//         menuRef.current,
//         { y: "-100%", opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
//       );

//       // GSAP animation for menu items appearing one by one
//       gsap.fromTo(
//         menuItemsRef.current,
//         { opacity: 0, x: -100 },
//         {
//           opacity: 1,
//           x: 0,
//           stagger: 0.2, // Stagger items by 0.1 seconds
//           duration: 0.5,
//           ease: "power2.out",
//         }
//       );
//     } else {
//       gsap.to(menuRef.current, { y: "-100%", opacity: 0, duration: 0.3, ease: "power2.in" });
//     }
//   }, [isMenuOpen]);

//   return (
//     <div ref={menuRef} className="fixed top-0 left-0 w-full h-screen bg-black  transform -translate-y-full z-40">
//       <div className="flex flex-col items-center justify-center h-full space-y-8 text-3xl font-bold">
//         {navItems.map((item, index) => (
//           <Link
//             to={item.to}
//             key={index}
//             ref={(el) => (menuItemsRef.current[index] = el)}
//             onClick={() => setIsMenuOpen(false)}
//             className="flex items-center space-x-4 cursor-pointer hover:text-gray-600 transition-colors text-pink-600" // Set text color to black
//           >
//             {item.icon}
//             <span>{item.label}</span>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// const Nav = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isNavVisible, setIsNavVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track user login state
//   const navContainerRef = useRef(null);
//   const { y: currentScrollY } = useWindowScroll();  // Hook to track scroll position

//   useEffect(() => {
//     // Retrieve login state from localStorage
//     gsap.fromTo(
//       ".nav",
//       { opacity: 0, y: -100 },
//       {
//         opacity: 1,
//         y: 0,
//         stagger: 1, // Stagger items by 0.1 seconds
//         duration: 2,
//         delay: 3,
//         ease: "power2.out",
//       }
//     );

//     const loggedInStatus = localStorage.getItem('isLoggedIn');
//     if (loggedInStatus === 'true') {
//       setIsLoggedIn(true);
//     }

//     if (currentScrollY === 0) {
//       setIsNavVisible(true);
//       navContainerRef.current.classList.remove("floating-nav");
//     } else if (currentScrollY > lastScrollY) {
//       setIsNavVisible(false);
//       navContainerRef.current.classList.add("floating-nav");
//     } else if (currentScrollY < lastScrollY) {
//       setIsNavVisible(true);
//       navContainerRef.current.classList.add("floating-nav");
//     }

//     setLastScrollY(currentScrollY);
//   }, [currentScrollY, lastScrollY]);

//   useEffect(() => {
//     gsap.to(navContainerRef.current, {
//       y: isNavVisible ? 0 : -100,
//       opacity: isNavVisible ? 1 : 0,
//       duration: 0.2,
//     });
//   }, [isNavVisible]);

//   const handleLoginClick = () => {
//     setIsLoggedIn(true);
//     localStorage.setItem('isLoggedIn', 'true'); // Persist the login status
//   };

//   const handleLogoutClick = () => {
//     setIsLoggedIn(false);
//     localStorage.setItem('isLoggedIn', 'false'); // Clear the login status
//   };

//   return (
//     <>
//       <div ref={navContainerRef} className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 overflow-hidden">
//         <header className="absolute top-1/2 w-full -translate-y-1/2">
//           <nav className="flex w-full items-center justify-between px-4 py-2">
//             <div className="flex items-center gap-4">
//               <Menu item={{ image: "/images/logo.png " }} cla="w-32 md:w-48  object-contain " />

//               <Link to="/product">
//                 <Button
//                   id="product-button"
//                   title="Products"
//                   rightIcon={<TiLocationArrow />}
//                   containerClass="hidden md:flex items-center gap-1 bg-violet-100 px-4 py-2 rounded-lg hover:bg-violet-200"
//                 /> </Link>
//             </div>

//             <div className=" nav hidden md:flex items-center gap-8">
//               <Link to="/" className="nav-link hover:text-violet-600  hover:border-b-2 hover:border-slate-700 ">Home</Link>
//               <Link to="/product/men" className="nav-link hover:text-violet-600  hover:border-b-2 hover:border-slate-700">Men</Link>
//               <Link to="/product/women" className="nav-link hover:text-violet-600  hover:border-b-2 hover:border-slate-700">Women</Link>
//               <Link to="/product/kids" className="nav-link hover:text-violet-600  hover:border-b-2 hover:border-slate-700">Kids</Link>
//               <Link to="/cart" className="nav-link hover:text-violet-600  hover:border-b-2 hover:border-slate-700">
//                 <BsCart3 className="text-2xl" />
//               </Link>
//               <Link to="/account" className="nav-link hover:text-violet-600  hover:border-b-2 hover:border-slate-700">account</Link>
//               {/* Conditionally render Login/Logout or User Icon */}
//               {!isLoggedIn ? (
//                 <Link to="/login">     <button onClick={handleLoginClick} className="nav-link hover:text-violet-600">
//                   Login
//                 </button>  </Link>
//               ) : (
//                 <button onClick={handleLogoutClick} className="nav-link hover:text-violet-600">
//                   Logout
//                 </button>
//               )}
//             </div>

//             <div className="md:hidden">
//               <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//                 <CiMenuFries className="text-2xl" />
//               </button>
//             </div>
//           </nav>
//         </header>
//       </div>

//       <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
//     </>
//   );
// };

// export default Nav;


import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import { Link, useNavigate } from "react-router-dom";
import { TiLocationArrow } from "react-icons/ti";
import { FaUserCircle } from "react-icons/fa";
import { BsBagHeart, BsCart3 } from "react-icons/bs";
import Button from "../AdvertisingSection/sub_component/Button";
import { CiMenuFries } from "react-icons/ci";
import axios from "axios"; // ✅ axios imported

const navItems = [
  { label: "Home", icon: null, to: "/" },
  { label: "Profile", icon: <FaUserCircle />, to: "/profile" },
  { label: "Wishlist", icon: <BsBagHeart />, to: "/wishlist" },
  { label: "Cart", icon: <BsCart3 />, to: "/cart" },
  { label: "Account", icon: null, to: "/account" },
];

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuRef = useRef(null);
  const menuItemsRef = useRef([]);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        menuRef.current,
        { y: "-100%", opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );

      gsap.fromTo(
        menuItemsRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 0.5,
          ease: "power2.out",
        }
      );
    } else {
      gsap.to(menuRef.current, { y: "-100%", opacity: 0, duration: 0.3, ease: "power2.in" });
    }
  }, [isMenuOpen]);

  return (
    <div ref={menuRef} className="fixed top-0 left-0 w-full h-screen bg-black transform -translate-y-full z-40">
      <div className="flex flex-col items-center justify-center h-full space-y-8 text-3xl font-bold">
        {navItems.map((item, index) => (
          <Link
            to={item.to}
            key={index}
            ref={(el) => (menuItemsRef.current[index] = el)}
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center space-x-4 cursor-pointer hover:text-gray-600 transition-colors text-pink-600"
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const navContainerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      ".nav",
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        stagger: 1,
        duration: 2,
        delay: 3,
        ease: "power2.out",
      }
    );

    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  const handleLogout = async () => {
    try {
      const response = await axios.post("http://localhost:5000/auth/logout", {}, {
        withCredentials: true,
      });

      if (response.status === 200) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("isLoggedIn");
        navigate("/");
      } else {
        alert("Logout failed. Please try again.");
      }
    } catch (error) {
      console.error("Logout Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <div
        ref={navContainerRef}
        className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 overflow-visible"
      >
        <header className="absolute top-1/2 w-full -translate-y-1/2">
          <nav className="flex w-full items-center justify-between px-4 py-0.5">
            <div className="flex items-center gap-4">
              <Link to="/product">
                <Button
                  id="product-button"
                  title="Products"
                  rightIcon={<TiLocationArrow />}
                  containerClass="hidden md:flex items-center gap-1 bg-violet-100 px-4 py-2 rounded-lg hover:bg-violet-200"
                />
              </Link>
            </div>

            <div className="nav hidden md:flex items-center gap-8 relative">
              <Link
                to="/"
                className="nav-link hover:text-violet-600 hover:border-b-2 hover:border-slate-700"
              >
                Home
              </Link>
              <Link
                to="/cart"
                className="nav-link hover:text-violet-600 hover:border-b-2 hover:border-slate-700"
              >
                <BsCart3 className="text-2xl" />
              </Link>

              {/* Account Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowDropdown((prev) => !prev)}
                  className="nav-link hover:text-violet-600 hover:border-b-2 hover:border-slate-700 focus:outline-none"
                >
                  Account
                </button>

                <div
                  className={`absolute left-0 mt-2 w-44 bg-white border rounded-md shadow-lg z-50 transition-all duration-200 overflow-hidden ${
                    showDropdown
                      ? "opacity-100 scale-100 visible"
                      : "opacity-0 scale-95 invisible"
                  }`}
                >
                  <Link
                    to="/account"
                    className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition"
                    onClick={() => setShowDropdown(false)}
                  >
                    Account
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition"
                  >
                    Logout
                  </button>
                </div>
              </div>

              <Link
                to="/login"
                className="nav-link hover:text-violet-600 hover:border-b-2 hover:border-slate-700"
              >
                Login
              </Link>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <CiMenuFries className="text-2xl" />
              </button>
            </div>
          </nav>
        </header>
      </div>

      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
};

export default Nav;
