import { MdOutlineShoppingBasket } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { IoIosLogIn } from "react-icons/io";

const searchbarMenu = [
  {
    path: "/login",
    title: "login",
    icon: IoIosLogIn,
  },
  {
    path: "/shoppingCard",
    title: "Shopping Card",
    icon: MdOutlineShoppingBasket,
  },
  {
    path: "/settings",
    title: "settings",
    icon: IoIosSettings,
  },
];
export default searchbarMenu;
