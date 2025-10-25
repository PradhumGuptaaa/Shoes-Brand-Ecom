
import { useDispatch, useSelector } from "react-redux";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "../ui/Sheet";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";
import UserCartItemsContent from "./CartItemsContent";

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
      className="w-full sm:w-[90%] md:w-[600px] lg:w-[640px] max-w-[640px] overflow-y-auto px-4 sm:px-6 py-6 bg-white "
    >
      <SheetHeader>
        <SheetTitle className="text-xl font-bold">Your Cart</SheetTitle>
        <SheetDescription>Review your items before checkout.</SheetDescription>
      </SheetHeader>

      <div className="flex flex-col mt-6 gap-4 bg-white ">
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

          <Button onClick={handleCheckoutClick} className="w-full bg-black text-white hover:bg-[#ff266e]">
            Proceed to Checkout
          </Button>
        </div>
      )}
    </SheetContent>
  );
};

export default UserCartWrapper;

