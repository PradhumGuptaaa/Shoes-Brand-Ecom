import { useState } from "react";
import { Sheet } from "@/components/ui/Sheet";
import UserCartWrapper from "@/components/shopping-view/CartWrapper";

function ShoppingCart() {
  const [open, setOpen] = useState(true); // Change to false if you want the sheet to be closed initially

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <UserCartWrapper setOpenCartSheet={setOpen} />
    </Sheet>
  );
}

export default ShoppingCart;
