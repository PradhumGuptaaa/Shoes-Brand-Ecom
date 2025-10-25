import React from "react";

import { AlignJustify, LogOut } from "lucide-react";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminHeader({ setOpen }) {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("isLoggedIn");

        navigate("/", { replace: true });  // try with replace
        window.location.href = "/";        // fallback in case React Router fails
      }
      else {
        console.warn("Unexpected response:", response);
        alert("Logout failed. Please try again.");
      }
    } catch (error) {
      console.error("Logout Error:", error);

      // You can show a more detailed error to the user if needed
      alert("Logout failed. Server might be down or endpoint missing.");
    }
  };


  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
      <Button onClick={() => setOpen(true)} className="lg:hidden sm:block">
        <AlignJustify />
        <span className="sr-only">Toggle Menu</span>
      </Button>

      <div className="flex flex-1 justify-end">
        <Button
          onClick={handleLogout}
          className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow"
        >
          <LogOut />
          Logout
        </Button>
      </div>
    </header>
  );
}

export default AdminHeader;
