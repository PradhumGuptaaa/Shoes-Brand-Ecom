import Address from "@/components/shopping-view/address";
import img from "@/assets/account.jpg";
import { useDispatch, useSelector } from "react-redux";
import UserCartItemsContent from "@/components/shopping-view/cart-items-content";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { createNewOrder } from "@/store/shop/order-slice";
import { useToast } from "@/components/ui/use-toast";

function ShoppingCheckout() {
  const { cartItems } = useSelector((state) => state.shopCart);
  const { approvalURL } = useSelector((state) => state.shopOrder);
  const [currentSelectedAddress, setCurrentSelectedAddress] = useState(null);
  const [isPaymentStart, setIsPaymentStart] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false); // State to handle redirection control
  const dispatch = useDispatch();
  const { toast } = useToast();

  const user = JSON.parse(localStorage.getItem("user")) || {};

  const totalCartAmount =
    cartItems?.items?.length > 0
      ? cartItems.items.reduce(
          (sum, currentItem) =>
            sum +
            (currentItem?.salePrice > 0 ? currentItem?.salePrice : currentItem?.price) *
              currentItem?.quantity,
          0
        )
      : 0;

  // Handle initiating the PayPal payment process
  function handleInitiatePaypalPayment() {
    if (!cartItems?.items?.length) {
      toast({ title: "Your cart is empty. Please add items to proceed", variant: "destructive" });
      return;
    }
    if (!currentSelectedAddress) {
      toast({ title: "Please select an address to proceed.", variant: "destructive" });
      return;
    }

    const orderData = {
      userId: user?.id,
      cartId: cartItems?._id,
      cartItems: cartItems.items.map((item) => ({
        productId: item?.productId,
        title: item?.title,
        image: item?.image,
        price: item?.salePrice > 0 ? item?.salePrice : item?.price,
        quantity: item?.quantity,
      })),
      addressInfo: {
        addressId: currentSelectedAddress?._id,
        address: currentSelectedAddress?.address,
        city: currentSelectedAddress?.city,
        pincode: currentSelectedAddress?.pincode,
        phone: currentSelectedAddress?.phone,
        notes: currentSelectedAddress?.notes,
      },
      orderStatus: "pending",
      paymentMethod: "paypal",
      paymentStatus: "pending",
      totalAmount: totalCartAmount,
      orderDate: new Date(),
      orderUpdateDate: new Date(),
      paymentId: "",
      payerId: "",
    };

    // Dispatch the order creation action
    dispatch(createNewOrder(orderData)).then((data) => {
      setIsPaymentStart(data?.payload?.success || false);
      if (data?.payload?.success) {
        setIsRedirecting(true); // Set redirection state to true after successful order creation
      }
    });
  }

  // Redirect to PayPal only after clicking the "Checkout" button
  useEffect(() => {
    if (isRedirecting && approvalURL) {
      window.location.href = approvalURL; // Redirect to PayPal if the redirect is enabled
    }
  }, [isRedirecting, approvalURL]); // Trigger only when `isRedirecting` is true

  return (
    <div className="flex flex-col">
      <div className="relative h-[300px] w-full overflow-hidden">
        <img src={img} className="h-full w-full object-cover object-center" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 p-5">
        <Address
          selectedId={currentSelectedAddress}
          setCurrentSelectedAddress={setCurrentSelectedAddress}
        />

        <div className="flex flex-col gap-4 text-black overflow-y-auto max-h-[600px]">
          {cartItems?.items?.length
            ? cartItems.items.map((item, index) => (
                <UserCartItemsContent key={item.productId || index} cartItem={item} />
              ))
            : null}

          <div className="mt-8 space-y-4">
            <div className="flex justify-between text-lg font-semibold border-t pt-2">
              <span className="text-black">Total:</span>
              <span className="text-black">${totalCartAmount.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-4 w-full">
            <Button onClick={handleInitiatePaypalPayment} className="w-full">
              {isPaymentStart ? "Processing Paypal Payment..." : "Checkout with Paypal"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCheckout;
