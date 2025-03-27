import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Navbar/Nav.jsx';
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./Pages/admin-view/dashboard";
import AdminProducts from "./Pages/admin-view/products";
import AdminOrders from "./Pages/admin-view/orders";
import AdminFeatures from "./Pages/admin-view/features.jsx";


import Home from './Home.jsx'
import Products from './Pages/ProductPage.jsx'
import Cart from './Pages/CartPage.jsx'
import Login from './Pages/LoginPage.jsx';
import Footers from './Footer/Footer.jsx';
import Trial from './Trial.jsx'

const App = () => {

  // const { user, isAuthenticated, isLoading } = useSelector(
  //   (state) => state.auth
  // );

  // const dispatch = useDispatch();
  return (
    <Router>
      <div className="relative min-h-screen w-screen overflow-x-hidden">
        <Nav />

        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />

            {/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> Admin Dashboard Route

            <Route path="/admin/products" element={<AdminProducts />} />
            <Route path="/admin/orders" element={<AdminOrders />} /> */}




            <Route path="/admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="products" element={<AdminProducts />} />
              <Route path="orders" element={<AdminOrders />} />
              <Route path="features" element={<AdminFeatures />} />
            </Route>




          </Routes>
        </div>
        <Footers />
        {/* <Trial/> */}
      </div>
    </Router>
  );
};

export default App;

// LOCOMOTIVE JS  SCROLL ANIMATION

// import React, { useEffect, useRef } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import LocomotiveScroll from 'locomotive-scroll'; // Import Locomotive Scroll
// import 'locomotive-scroll/dist/locomotive-scroll.css'; // Import the Locomotive Scroll CSS
// import Nav from './Navbar/Nav.jsx';
// import Home from './Home.jsx';
// import ProductPage from './pages/ProductPage';
// import CartPage from './pages/CartPage';
// import ProfilePage from './pages/ProfilePage';
// import LoginPage from './Pages/LoginPage.jsx';
// import Footers from './Footer/Footer.jsx';

// const App = () => {
//   const scrollRef = useRef(null);

//   // Initialize Locomotive Scroll inside useEffect
//   useEffect(() => {
//     const scroll = new LocomotiveScroll({
//       el: scrollRef.current,        // Attach to the scrollable container
//       smooth: true,                 // Enable smooth scrolling
//       multiplier: 1,                // Adjust scrolling speed
//       lerp: 0.08,                   // Control the smoothness of scrolling
//     });

//     // Cleanup function to destroy Locomotive Scroll when the component unmounts
//     return () => {
//       if (scroll) scroll.destroy();
//     };
//   }, []); // Empty dependency array means this effect runs only once after initial render

//   return (
//     <BrowserRouter>
//       <div
//         ref={scrollRef}
//         data-scroll-container
//         className="relative min-h-screen w-screen overflow-x-hidden"
//       >
//         {/* Navbar stays fixed */}
//         <Nav />

//         {/* Routes */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/men" element={<ProductPage category="men" />} />
//           <Route path="/women" element={<ProductPage category="women" />} />
//           <Route path="/kids" element={<ProductPage category="kids" />} />
//           <Route path="/cart" element={<CartPage />} />
//           <Route path="/profile" element={<ProfilePage />} />
//           <Route path="/login" element={<LoginPage />} />
//         </Routes>

//         {/* Footer */}
//         <Footers />
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;
