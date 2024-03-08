import { BiCategory } from "react-icons/bi";
import { IoWomanOutline } from "react-icons/io5";
import { IoManOutline } from "react-icons/io5";
import { GiPearlNecklace } from "react-icons/gi";
import { AiOutlineLaptop } from "react-icons/ai";

const productCategories = [
  { id: 0, title: "All", icon: BiCategory },
  { id: 1, title: "men's clothing", icon: IoManOutline },
  { id: 2, title: "jewelery", icon: GiPearlNecklace },
  { id: 3, title: "women's clothing", icon: IoWomanOutline },
  { id: 4, title: "electronics", icon: AiOutlineLaptop },
];
export default productCategories;
