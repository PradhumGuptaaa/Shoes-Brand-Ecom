import { Badge } from "../ui/Badge";
import { DialogContent } from "../ui/Dialog";
import { Label } from "../ui/Label";
import { Separator } from "../ui/Separator";

function ShoppingOrderDetailsView({ orderDetails }) {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto text-black bg-white">
      <div className="grid gap-6">
        <div className="grid gap-2">
          <div className="flex mt-6 items-center justify-between">
            <p className="font-medium">Order ID</p>
            <Label>{orderDetails?._id}</Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Order Date</p>
            <Label>{orderDetails?.orderDate?.split("T")[0]}</Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Order Price</p>
            <Label>${orderDetails?.totalAmount}</Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Payment method</p>
            <Label>{orderDetails?.paymentMethod}</Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Payment Status</p>
            <Label>{orderDetails?.paymentStatus}</Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Order Status</p>
            <Label>
              <Badge
                className={`py-1 px-3 text-white ${
                  orderDetails?.orderStatus === "confirmed"
                    ? "bg-green-500"
                    : orderDetails?.orderStatus === "rejected"
                    ? "bg-red-600"
                    : "bg-black"
                }`}
              >
                {orderDetails?.orderStatus}
              </Badge>
            </Label>
          </div>
        </div>

        <Separator />

        <div className="grid gap-4 bg-white">
          <div className="font-semibold text-lg text-gray-800">Order Details</div>
          <ul className="grid gap-3">
            {orderDetails?.cartItems && orderDetails.cartItems.length > 0 ? (
              orderDetails.cartItems.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border border-gray-300 bg-gray-100 p-4 rounded-lg shadow-sm"
                >
                  <span className="text-[15px] text-gray-700">
                    <span className="inline-block w-[70px] font-medium text-gray-600">Title:</span>
                    <span className="font-normal text-gray-900">{item.title}</span>
                  </span>
                  <span className="text-[15px] text-gray-700">
                    <span className="inline-block w-[90px] font-medium text-gray-600">Quantity:</span>
                    <span className="font-normal text-gray-900">{item.quantity}</span>
                  </span>
                  <span className="text-[15px] text-gray-700">
                    <span className="inline-block w-[90px] font-medium text-gray-600">Price:</span>
                    <span className="font-normal text-gray-900">${item.price}</span>
                  </span>
                </li>
              ))
            ) : (
              <li className="text-sm text-gray-500">No items found.</li>
            )}
          </ul>
        </div>

        <div className="grid gap-4">
          <div className="font-semibold text-lg text-gray-800">Shipping Info</div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <span className="block mb-2 text-[15px] text-gray-800 font-semibold">
              <span className="inline-block w-[100px] text-gray-600 font-medium">Name:</span>
              <span className="text-gray-900 font-normal">{user?.fullName}</span>
            </span>
            <span className="block mb-2 text-[15px] text-gray-800 font-semibold">
              <span className="inline-block w-[100px] text-gray-600 font-medium">Address:</span>
              <span className="text-gray-900 font-normal">{orderDetails?.addressInfo?.address}</span>
            </span>
            <span className="block mb-2 text-[15px] text-gray-800 font-semibold">
              <span className="inline-block w-[100px] text-gray-600 font-medium">City:</span>
              <span className="text-gray-900 font-normal">{orderDetails?.addressInfo?.city}</span>
            </span>
            <span className="block mb-2 text-[15px] text-gray-800 font-semibold">
              <span className="inline-block w-[100px] text-gray-600 font-medium">Pincode:</span>
              <span className="text-gray-900 font-normal">{orderDetails?.addressInfo?.pincode}</span>
            </span>
            <span className="block mb-2 text-[15px] text-gray-800 font-semibold">
              <span className="inline-block w-[100px] text-gray-600 font-medium">Phone:</span>
              <span className="text-gray-900 font-normal">{orderDetails?.addressInfo?.phone}</span>
            </span>
            <span className="block mb-2 text-[15px] text-gray-800 font-semibold">
              <span className="inline-block w-[100px] text-gray-600 font-medium">Notes:</span>
              <span className="text-gray-900 font-normal">{orderDetails?.addressInfo?.notes}</span>
            </span>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}

export default ShoppingOrderDetailsView;