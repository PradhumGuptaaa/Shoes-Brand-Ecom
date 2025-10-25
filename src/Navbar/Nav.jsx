import {
  Button,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
} from "flowbite-react";

import gsap from "gsap";
import { Avatar, AvatarFallback } from "../components/ui/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from 'react-use';
import UserCartWrapper from "../components/shopping-view/CartWrapper";
import {
  Link,
  // useLocation,
  useNavigate,
  // useSearchParams,
} from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/DropdownMenu";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/Sheet";
import { logoutUser } from "@/store/auth-slice";
import { fetchCartItems } from "@/store/shop/cart-slice";
import { TiLocationArrow } from "react-icons/ti";
import { FaUserCircle } from "react-icons/fa";
import { BsBagHeart, BsCart3 } from "react-icons/bs";
import Buttons from "../AdvertisingSection/sub_component/Button";
import Button2 from "../components/ui/Button2"
import Magnet from '../AdvertisingSection/sub_component/Magnet';
import GooeyNav from './GooeyNav'
import { CiMenuFries } from "react-icons/ci";
import axios from "axios"; // ✅ axios imported

const navItems = [
  { label: "Home", icon: null, to: "/" },
  { label: "Profile", icon: <FaUserCircle />, to: "/account" },
  { label: "Wishlist", icon: <BsBagHeart />, to: "/wishlist" },
  { label: "Men", icon: null, to: "/men" },
  { label: "Women", icon: null, to: "/women" },
  { label: "Kids", icon: null, to: "/kids" },
];

const items = [
  { label: "Home", to: "/" },
  { label: "Profile", to: "/profile" },
  { label: "Contact", to: "/contact" },
  { label: "AI ✨", to: "/Ai" },
];

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuRef = useRef(null);
  const menuItemsRef = useRef([]);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        menuRef.current,
        { y: "-100%", opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );

      gsap.fromTo(
        menuItemsRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 0.5,
          ease: "power2.out",
        }
      );
    } else {
      gsap.to(menuRef.current, { y: "-100%", opacity: 0, duration: 0.3, ease: "power2.in" });
    }
  }, [isMenuOpen]);

  return (
    <div ref={menuRef} className="fixed top-0 left-0 w-full h-screen bg-black transform -translate-y-full z-40">
      <div className="flex flex-col items-center justify-center h-full space-y-8 text-3xl font-bold">
        {navItems.map((item, index) => (
          <Link
            to={item.to}
            key={index}
            ref={(el) => (menuItemsRef.current[index] = el)}
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center space-x-4 cursor-pointer hover:text-gray-600 transition-colors text-pink-600"
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { user } = useSelector((state) => state.auth);
  const navContainerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {


    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  const handleLogout = () => {
    dispatch(logoutUser()).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <div
        ref={navContainerRef}
        className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 "
      >
        <header className="absolute top-1/2 w-full -translate-y-1/2">
          <nav className="flex w-full items-center justify-between px-4 py-2">
            <div className="flex items-center gap-4">
            <Magnet padding={10} disabled={false} magnetStrength={7}>
                <p className="w-32 md:w-42  object-contain logo text-5xl text-cyan-600">Steps</p>
              </Magnet>

              <Link to="/product">
                <Buttons
                  id="product-button"
                  title="Products"
                  rightIcon={<TiLocationArrow />}
                  containerClass="hidden md:flex items-center gap-1 bg-violet-100 px-4 py-2 rounded-lg hover:bg-violet-200"
                />
              </Link>
            </div>

            <div className="nav hidden md:flex items-center gap-8 relative">
            <GooeyNav
                items={items}
                animationTime={600}
                pCount={15}
                minDistance={20}
                maxDistance={42}
                maxRotate={75}
                colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                timeVariance={300}
              />

            </div>
            <div className="flex items-center justify-center ml-40 gap-[4vw]">
              <HeaderRightContent />

              {/* Conditionally render Login/Logout or User Icon */}

              {user ? (
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    <img
                      className="rounded-full w-9 h-9 object-cover"
                      src={"https://icon-library.com/images/generic-user-icon/generic-user-icon-9.jpg"}
                    />
                  }
                >
                  <DropdownHeader>
                    <span className="block">@{user?.userName || 'User'}</span>
                    <span className="block truncate">{user?.email || ''}</span>
                  </DropdownHeader>

                  <Link to={"/account"}>
                    <DropdownItem>Profile</DropdownItem>
                  </Link>
                  <DropdownDivider />
                  <DropdownItem onClick={handleLogout}>
                    Sign out
                  </DropdownItem>
                </Dropdown>
              ) : (
                <Link to="/login">
                  <Button2
                    as="button"
                    className="custom-class"
                    color="cyan"
                    speed="5s"
                    outline
                  >
                    Sign in
                  </Button2>
                </Link>
              )}
            </div>


            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <CiMenuFries className="text-2xl" />
              </button>
            </div>
          </nav>
        </header>
      </div>

      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
};

export default Nav;

function HeaderRightContent() {
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.shopCart);
  const [openCartSheet, setOpenCartSheet] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser()).then(() => {
      navigate("/");
    });
  }

  useEffect(() => {
    dispatch(fetchCartItems(user?.id));
  }, [dispatch]);


  return (
    <div className="flex lg:items-center lg:flex-row flex-col gap-4">
      <Sheet open={openCartSheet} onOpenChange={() => setOpenCartSheet(false)}>
        <button
          onClick={() => setOpenCartSheet(true)}
          variant="outline"
          size="icon"
          className="relative bg-transparent"
        >
              <Link to="/cart" className="nav-link hover:text-cyan-600 ">
        <BsCart3 className="text-2xl mix-blend-difference" />
      </Link>
          <span className="absolute top-[-10px] right-[-4px] font-bold text-sm text-red-700">
            {cartItems?.items?.length || 0}
          </span>
          <span className="sr-only">User cart</span>
        </button>
        <UserCartWrapper
          setOpenCartSheet={setOpenCartSheet}
          cartItems={
            cartItems && cartItems.items && cartItems.items.length > 0
              ? cartItems.items
              : []
          }
        />
      </Sheet>
 
    </div>
  );
}