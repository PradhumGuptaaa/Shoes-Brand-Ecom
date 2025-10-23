import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './Navbar/Nav.jsx';
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./Pages/admin-view/dashboard";
import AdminProducts from "./Pages/admin-view/products";
import AdminOrders from "./Pages/admin-view/orders";
import AdminFeatures from "./Pages/admin-view/features.jsx";

import Ai from './Pages/Ai.jsx'
import ShoppingListing from "./Pages/listing.jsx";
import Shoppingcart from "./Pages/ShoppingCart.jsx";
import ShoppingCheckout from "./pages/shopping-view/checkout";
import ShoppingAccount from "./pages/shopping-view/account";
import PaypalReturnPage from "./pages/shopping-view/paypal-return";
import PaymentSuccessPage from "./pages/shopping-view/payment-success";

import Home from './Home.jsx';
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
          <Route path="/Ai" element={<Ai/>} />
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
