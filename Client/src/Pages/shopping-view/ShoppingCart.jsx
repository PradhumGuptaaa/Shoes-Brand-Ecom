// import { useState } from "react";
// import {
//   Sheet,
//   SheetTrigger,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
// } from "@/components/ui/sheet"; // adjust the path if needed
// import UserCartWrapper from "@/components/shopping-view/cart-wrapper";

// // Dummy cartItems to avoid error — replace this with actual cart data from context, redux, or props
// const dummyCartItems = [
//   {
//     id: "1",
//     name: "Sample Shoe",
//     price: 100,
//     salePrice: 80,
//     quantity: 2,
//   },
// ];

// function Shoppingcart() {
//   const [open, setOpen] = useState(true); // Make sure sheet is open on load (or change to false if needed)

//   return (
//     <Sheet open={open} onOpenChange={setOpen}>
//       {/* Optional: A button to trigger opening the sheet (not needed if auto open) */}
//       {/* <SheetTrigger>
//         <button>Open Cart</button>
//       </SheetTrigger> */}
      
//       <UserCartWrapper cartItems={dummyCartItems} setOpenCartSheet={setOpen} />
//     </Sheet>
//   );
// }

// export default Shoppingcart;


import { useState } from "react";
import { Sheet } from "@/components/ui/sheet";
import UserCartWrapper from "@/components/shopping-view/cart-wrapper";

function ShoppingCart() {
  const [open, setOpen] = useState(true); // Change to false if you want the sheet to be closed initially

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <UserCartWrapper setOpenCartSheet={setOpen} />
    </Sheet>
  );
}

export default ShoppingCart;
