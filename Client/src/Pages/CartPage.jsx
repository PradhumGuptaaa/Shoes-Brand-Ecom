// import React, { useState, useEffect } from 'react';

// const CartPage = () => {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     // Fetch the cart from localStorage or backend
//     const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     setCart(savedCart);
//   }, []);

//   return (
//     <div>
//       <h1>Your Cart</h1>
//       <div className="cart-items">
//         {cart.map((item, index) => (
//           <div key={index}>
//             <img src={item.image} alt={item.name} />
//             <p>{item.name}</p>
//             <p>{item.price}</p>
//             i am cat
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CartPage;
