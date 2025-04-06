// import { AlignJustify, LogOut } from "lucide-react";
// import { Button } from "../ui/button";
// import { useNavigate } from "react-router-dom";

// function AdminHeader({ setOpen }) {
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/auth/logout", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//       });

//       if (response.ok) {
//         // Remove token from localStorage
//         localStorage.removeItem("token");

//         // Navigate to login page
//         navigate("/");
//       } else {
//         alert("Logout failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Logout Error:", error);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
//       <Button onClick={() => setOpen(true)} className="lg:hidden sm:block">
//         <AlignJustify />
//         <span className="sr-only">Toggle Menu</span>
//       </Button>
//       <div className="flex flex-1 justify-end">
//         <Button
//           onClick={handleLogout}
//           className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow"
//         >
//           <LogOut />
//           Logout
//         </Button>
//       </div>
//     </header>
//   );
// }

// export default AdminHeader;


import { AlignJustify, LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminHeader({ setOpen }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Axios call with credentials (for cookies)
      const response = await axios.post(
        "http://localhost:5000/auth/logout",
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Important for cookie-based auth
        }
      );

      if (response.status === 200) {
        // Remove token from localStorage
        localStorage.removeItem("token");
        localStorage.removeItem("user"); // If you're storing user as well

        // Navigate to home
        navigate("/");
      } else {
        alert("Logout failed. Please try again.");
      }
    } catch (error) {
      console.error("Logout Error:", error);
      alert("Something went wrong!");
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
