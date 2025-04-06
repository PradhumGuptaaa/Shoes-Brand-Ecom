// import { useNavigate } from "react-router-dom";
// import { Button } from "../ui/button";
// import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
// import UserCartItemsContent from "./cart-items-content";

// function UserCartWrapper({ cartItems, setOpenCartSheet }) {
//   const navigate = useNavigate();

//   const totalCartAmount =
//     cartItems && cartItems.length > 0
//       ? cartItems.reduce(
//           (sum, currentItem) =>
//             sum +
//             (currentItem?.salePrice > 0
//               ? currentItem?.salePrice
//               : currentItem?.price) *
//               currentItem?.quantity,
//           0
//         )
//       : 0;

//   return (
//     <SheetContent className="sm:max-w-md">
//       <SheetHeader>
//         <SheetTitle>Your Cart</SheetTitle>
//       </SheetHeader>
//       <div className="mt-8 space-y-4">
//         {cartItems && cartItems.length > 0
//           ? cartItems.map((item) => <UserCartItemsContent cartItem={item} />)
//           : null}
//       </div>
//       <div className="mt-8 space-y-4">
//         <div className="flex justify-between">
//           <span className="font-bold">Total</span>
//           <span className="font-bold">${totalCartAmount}</span>
//         </div>
//       </div>
//       <Button
//         onClick={() => {
//           navigate("/checkout");
//           setOpenCartSheet(false);
//         }}
//         className="w-full mt-6"
//       >
//         Checkout
//       </Button>
//     </SheetContent>
//   );
// }

// export default UserCartWrapper;

//  real one 
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { SheetContent, SheetHeader, SheetTitle, SheetDescription } from "../ui/sheet";
// import { Button } from "../ui/button";
// import { useNavigate } from "react-router-dom";
// import UserCartItemsContent from "./cart-items-content";

// const UserCartWrapper = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { cartItems } = useSelector((state) => state.shopCart);

//   const totalAmount =
//     cartItems?.items?.length > 0
//       ? cartItems.items.reduce(
//           (sum, item) =>
//             sum +
//             (item.salePrice > 0 ? item.salePrice : item.price) * item.quantity,
//           0
//         )
//       : 0;

//   const handleCheckoutClick = () => {
//     navigate("/checkout"); // cart will already be in Redux
//   };

//   return (
//     <SheetContent className="w-full sm:w-[540px] overflow-y-auto">
//       <SheetHeader>
//         <SheetTitle>Your Cart</SheetTitle>
//         <SheetDescription>Review your items before checkout.</SheetDescription>
//       </SheetHeader>

//       <div className="flex flex-col mt-6 gap-4">
//         {cartItems?.items?.length > 0 ? (
//           cartItems.items.map((item, index) => (
//             <UserCartItemsContent key={item.productId || index} cartItem={item} />
//           ))
//         ) : (
//           <p className="text-center text-gray-500 mt-6">Your cart is empty.</p>
//         )}
//       </div>

//       {cartItems?.items?.length > 0 && (
//         <div className="mt-8 space-y-4 border-t pt-4">
//           <div className="flex justify-between text-lg font-semibold">
//             <span>Total:</span>
//             <span>${totalAmount.toFixed(2)}</span>
//           </div>

//           <Button onClick={handleCheckoutClick} className="w-full">
//             Proceed to Checkout
//           </Button>
//         </div>
//       )}
//     </SheetContent>
//   );
// };

// export default UserCartWrapper;
import { useDispatch, useSelector } from "react-redux";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import UserCartItemsContent from "./cart-items-content";

const UserCartWrapper = ({ setOpenCartSheet }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.shopCart);

  const totalAmount =
    cartItems?.items?.reduce((sum, item) => {
      const price = item.salePrice > 0 ? item.salePrice : item.price;
      return sum + price * item.quantity;
    }, 0) || 0;

  const handleCheckoutClick = () => {
    setOpenCartSheet(false);
    navigate("/checkout");
  };

  return (
    <SheetContent
      side="right"
      className="w-full sm:w-[90%] md:w-[600px] lg:w-[640px] max-w-[640px] overflow-y-auto px-4 sm:px-6 py-6"
    >
      <SheetHeader>
        <SheetTitle className="text-xl font-bold">Your Cart</SheetTitle>
        <SheetDescription>Review your items before checkout.</SheetDescription>
      </SheetHeader>

      <div className="flex flex-col mt-6 gap-4">
        {cartItems?.items?.length > 0 ? (
          cartItems.items.map((item, index) => (
            <UserCartItemsContent
              key={item.productId || index}
              cartItem={item}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 mt-6">Your cart is empty.</p>
        )}
      </div>

      {cartItems?.items?.length > 0 && (
        <div className="mt-8 space-y-4 border-t pt-4">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>

          <Button onClick={handleCheckoutClick} className="w-full">
            Proceed to Checkout
          </Button>
        </div>
      )}
    </SheetContent>
  );
};

export default UserCartWrapper;

