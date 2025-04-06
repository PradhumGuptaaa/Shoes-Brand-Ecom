// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Nav from './Navbar/Nav.jsx';
// import AdminLayout from "./components/admin-view/layout";
// import AdminDashboard from "./Pages/admin-view/dashboard";
// import AdminProducts from "./Pages/admin-view/products";
// import AdminOrders from "./Pages/admin-view/orders";
// import AdminFeatures from "./Pages/admin-view/features.jsx";

// // import ShoppingLayout from "./components/shopping-view/layout";
// // import NotFound from "./pages/not-found";
// // import ShoppingHome from "./pages/shopping-view/home";
// import ShoppingListing from "./pages/shopping-view/listing";
// import ShoppingCheckout from "./pages/shopping-view/checkout";
// import ShoppingAccount from "./pages/shopping-view/account";
// // import CheckAuth from "./components/common/check-auth";
// // import UnauthPage from "./pages/unauth-page";
// import { useDispatch, useSelector } from "react-redux";
// // import { useEffect } from "react";
// // import { checkAuth } from "./store/auth-slice";
// // import { Skeleton } from  "./components/ui/skeleton.jsx";
// import PaypalReturnPage from "./pages/shopping-view/paypal-return";
// import PaymentSuccessPage from "./pages/shopping-view/payment-success";
// // import SearchProducts from "./pages/shopping-view/search";


// import Home from './Home.jsx'
// // import Products from './Pages/ProductPage.jsx'
// import Cart from './Pages/CartPage.jsx'
// import Login from './Pages/LoginPage.jsx';
// import Footers from './Footer/Footer.jsx';
// import Trial from './Trial.jsx'

// const App = () => {

//   // const { user, isAuthenticated, isLoading } = useSelector(
//   //   (state) => state.auth
//   // );

//   // const dispatch = useDispatch();
//   // if (isLoading) return <Skeleton className="w-[800] bg-black h-[600px]" />;
//   const location = useLocation();  // Get the current route location
//   const isLoginRoute = location.pathname === '/login';

//   return (
//     <Router>
//       <div className="relative min-h-screen w-screen overflow-x-hidden">
//         <Nav />

//         <div className="">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/product" element={<ShoppingListing />} />
//             <Route path="/cart" element={<ShoppingCheckout />} />
//             <Route path="/paypal-return" element={<PaypalReturnPage />} />
//             <Route path="/payment-success" element={<PaymentSuccessPage />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/account" element={<ShoppingAccount />} />


//             {/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> Admin Dashboard Route

//             <Route path="/admin/products" element={<AdminProducts />} />
//             <Route path="/admin/orders" element={<AdminOrders />} /> */}




//             <Route path="/admin" element={<AdminLayout />}>
//               <Route path="dashboard" element={<AdminDashboard />} />
//               <Route path="products" element={<AdminProducts />} />
//               <Route path="orders" element={<AdminOrders />} />
//               <Route path="features" element={<AdminFeatures />} />
//             </Route>


//             {/* <Route
//               path="/shop"
//               element={

//                 <ShoppingLayout />

//               }
//             >
//               <Route path="home" element={<ShoppingHome />} />
//               <Route path="listing" element={<ShoppingListing />} />
//               <Route path="checkout" element={<ShoppingCheckout />} />
//               <Route path="account" element={<ShoppingAccount />} />
//               <Route path="paypal-return" element={<PaypalReturnPage />} />
//               <Route path="payment-success" element={<PaymentSuccessPage />} />
//               <Route path="search" element={<SearchProducts />} />
//             </Route>
//             <Route path="/unauth-page" element={<UnauthPage />} />
//             <Route path="*" element={<NotFound />} /> */}




//           </Routes>
//         </div>
//         {!isLoginRoute && <Footers />}
//         {/* <Trial/> */}
//       </div>
//     </Router >
//   );
// };

// export default App;

// // LOCOMOTIVE JS  SCROLL ANIMATION

// // import React, { useEffect, useRef } from 'react';
// // import { BrowserRouter, Route, Routes } from 'react-router-dom';
// // import LocomotiveScroll from 'locomotive-scroll'; // Import Locomotive Scroll
// // import 'locomotive-scroll/dist/locomotive-scroll.css'; // Import the Locomotive Scroll CSS
// // import Nav from './Navbar/Nav.jsx';
// // import Home from './Home.jsx';
// // import ProductPage from './pages/ProductPage';
// // import CartPage from './pages/CartPage';
// // import ProfilePage from './pages/ProfilePage';
// // import LoginPage from './Pages/LoginPage.jsx';
// // import Footers from './Footer/Footer.jsx';

// // const App = () => {
// //   const scrollRef = useRef(null);

// //   // Initialize Locomotive Scroll inside useEffect
// //   useEffect(() => {
// //     const scroll = new LocomotiveScroll({
// //       el: scrollRef.current,        // Attach to the scrollable container
// //       smooth: true,                 // Enable smooth scrolling
// //       multiplier: 1,                // Adjust scrolling speed
// //       lerp: 0.08,                   // Control the smoothness of scrolling
// //     });

// //     // Cleanup function to destroy Locomotive Scroll when the component unmounts
// //     return () => {
// //       if (scroll) scroll.destroy();
// //     };
// //   }, []); // Empty dependency array means this effect runs only once after initial render

// //   return (
// //     <BrowserRouter>
// //       <div
// //         ref={scrollRef}
// //         data-scroll-container
// //         className="relative min-h-screen w-screen overflow-x-hidden"
// //       >
// //         {/* Navbar stays fixed */}
// //         <Nav />

// //         {/* Routes */}
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/men" element={<ProductPage category="men" />} />
// //           <Route path="/women" element={<ProductPage category="women" />} />
// //           <Route path="/kids" element={<ProductPage category="kids" />} />
// //           <Route path="/cart" element={<CartPage />} />
// //           <Route path="/profile" element={<ProfilePage />} />
// //           <Route path="/login" element={<LoginPage />} />
// //         </Routes>

// //         {/* Footer */}
// //         <Footers />
// //       </div>
// //     </BrowserRouter>
// //   );
// // };

// // export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './Navbar/Nav.jsx';
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./Pages/admin-view/dashboard";
import AdminProducts from "./Pages/admin-view/products";
import AdminOrders from "./Pages/admin-view/orders";
import AdminFeatures from "./Pages/admin-view/features.jsx";

import ShoppingListing from "./pages/shopping-view/listing";
import Shoppingcart from "./pages/shopping-view/ShoppingCart.jsx";
import ShoppingCheckout from "./pages/shopping-view/checkout";
import ShoppingAccount from "./pages/shopping-view/account";
import PaypalReturnPage from "./pages/shopping-view/paypal-return";
import PaymentSuccessPage from "./pages/shopping-view/payment-success";

import Home from './Home.jsx';
// import Cart from './Pages/CartPage.jsx';
import Login from './Pages/LoginPage.jsx';
import Footers from './Footer/Footer.jsx';


// 💡 Layout wrapper to conditionally show/hide Nav and Footer
const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;

  // Hide Nav/Footer on /login or /admin or any subroute like /admin/products
  const hideLayout = path === '/login' || path.startsWith('/admin');

  return (
    <>
      {!hideLayout && <Nav />}
      {children}
      {!hideLayout && <Footers />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          {/* Shopping Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ShoppingListing />} />
          <Route path="/cart" element={<Shoppingcart />} />
          <Route path="/checkout" element={<ShoppingCheckout />} />
          <Route path="/paypal-return" element={<PaypalReturnPage />} />
          <Route path="/payment-success" element={<PaymentSuccessPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<ShoppingAccount />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="features" element={<AdminFeatures />} />
          </Route>
        </Routes>
      </LayoutWrapper>
    </Router>
  );
};

export default App;
