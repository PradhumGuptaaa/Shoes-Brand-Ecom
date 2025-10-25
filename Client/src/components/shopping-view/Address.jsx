
import { useEffect, useState } from "react";
import CommonForm from "../common/Form";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { addressFormControls } from "@/config";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewAddress,
  deleteAddress,
  editaAddress,
  fetchAllAddresses,
} from "@/store/shop/address-slice";
import AddressCard from "./AddressCard";
import { useToast } from "../ui/use-toast";

const initialAddressFormData = {
  address: "",
  city: "",
  phone: "",
  pincode: "",
  notes: "",
};

function Address({ setCurrentSelectedAddress, selectedId }) {
  const [formData, setFormData] = useState(initialAddressFormData);
  const [currentEditedId, setCurrentEditedId] = useState(null);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const { addressList } = useSelector((state) => state.shopAddress);
  const { toast } = useToast();

  useEffect(() => {
    if (user?.id) {
      dispatch(fetchAllAddresses(user.id));
    }
  }, [dispatch, user?.id]);

  function handleManageAddress(event) {
    event.preventDefault();

    if (!user?.id) {
      toast({ title: "User not found. Please log in again!", variant: "destructive" });
      return;
    }

    if (addressList.length >= 3 && currentEditedId === null) {
      toast({ title: "You can add max 3 addresses", variant: "destructive" });
      return;
    }

    const payload = {
      userId: user.id,
      ...formData,
    };

    const action = currentEditedId
      ? editaAddress({ userId: user.id, addressId: currentEditedId, formData })
      : addNewAddress(payload);

    dispatch(action).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchAllAddresses(user.id));
        setFormData(initialAddressFormData);
        setCurrentEditedId(null);
        toast({
          title: currentEditedId ? "Address updated successfully" : "Address added successfully",
        });
      } else {
        toast({ title: data?.payload?.message || "Something went wrong!", variant: "destructive" });
      }
    });
  }

  function handleDeleteAddress(address) {
    if (!user?.id) return;

    dispatch(deleteAddress({ userId: user.id, addressId: address._id })).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchAllAddresses(user.id));
        toast({ title: "Address deleted successfully" });
      }
    });
  }

  function handleEditAddress(address) {
    setCurrentEditedId(address._id);
    setFormData({
      address: address?.address || "",
      city: address?.city || "",
      phone: address?.phone || "",
      pincode: address?.pincode || "",
      notes: address?.notes || "",
    });
  }

  function isFormValid() {
    return Object.values(formData).every((value) => value.trim() !== "");
  }

  return (
    <Card>
      <div className="mb-5 p-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {addressList.length > 0 &&
          addressList.map((item) => (
            <AddressCard
              key={item._id}
              selectedId={selectedId}
              handleDeleteAddress={handleDeleteAddress}
              addressInfo={item}
              handleEditAddress={handleEditAddress}
              setCurrentSelectedAddress={setCurrentSelectedAddress}
            />
          ))}
      </div>
      <CardHeader>
        <CardTitle>{currentEditedId ? "Edit Address" : "Add New Address"}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <CommonForm
          formControls={addressFormControls}
          formData={formData}
          setFormData={setFormData}
          buttonText={currentEditedId ? "Edit" : "Add"}
          onSubmit={handleManageAddress}
          isBtnDisabled={!isFormValid()}
        />
      </CardContent>
    </Card>
  );
}

export default Address;