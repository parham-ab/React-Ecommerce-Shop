import { MdOutlineShoppingBasket } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { IoIosLogIn } from "react-icons/io";

const searchbarMenu = [
  {
    path: "/login",
    title: "ورود",
    icon: IoIosLogIn,
  },
  {
    path: "/shopingCard",
    title: "سبد خرید",
    icon: MdOutlineShoppingBasket,
  },
  {
    path: "/settings",
    title: "تنظیمات",
    icon: IoIosSettings,
  },
];
export default searchbarMenu;
