import logo from "assets/shop.png";
import { Avatar, Badge, Input } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";
import { IoExitOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import searchbarMenu from "constants/serchbarMenu";
import { IoIosSearch } from "react-icons/io";
import { useState, useRef, useEffect } from "react";
import { useGetAllProductsQuery } from "../features/api/apiSlice";
import titleSplit from "utils/titleSplit";
import { useDispatch, useSelector } from "react-redux";
import DarkModeToggle from "./DarkmodeToggle";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { toggleDarkMode } from "../features/utilsSlice";

const Searchbar = () => {
  const state = useSelector((state) => state.cart.count);
  const theme = useSelector((state) => state.utils.theme);
  const dispatch = useDispatch();
  const location = useLocation();
  const { data } = useGetAllProductsQuery();
  const [inputVal, setInputVal] = useState(" ");
  const [filteredData, setFilteredData] = useState([]);
  const newInputVal = useRef();

  useEffect(() => {
    setInputVal("");
    setFilteredData([]);
  }, [location]);
  const filterHandle = (e) => {
    setInputVal(e.target.value);
    const filteredItems = data.filter((item) => {
      return item.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    newInputVal.current.value.length === 0
      ? setFilteredData([])
      : setFilteredData(filteredItems);
  };
  const toggleDarkModeHandler = () => {
    dispatch(toggleDarkMode(theme === "dark" ? "light" : "dark"));
  };
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);
  return (
    <div className="flex items-center justify-between px-3 py-2 dark:bg-neutral-900 bg-gray-200 shadow-lg fixed w-full z-10">
      <div className="flex items-center gap-[30px]">
        <Link to="/">
          {state ? (
            <Badge content={state} size="lg" shape="circle" color="danger">
              <img src={logo} alt={"logo"} width={"37px"} />
            </Badge>
          ) : (
            <img src={logo} alt={"logo"} width={"37px"} />
          )}
        </Link>

        <div>
          <Input
            value={inputVal}
            ref={newInputVal}
            onChange={filterHandle}
            type="text"
            placeholder="Search..."
            size=""
            className="sm:w-[240px] md:w-[400px]"
            endContent={
              <IoIosSearch className="text-black/50  text-slate-400 pointer-events-none flex-shrink-0" />
            }
          />
          <div
            className={
              filteredData.length &&
              "bg-gray-100 dark:bg-neutral-800 border-solid border-1 rounded-lg w-fit absolute top-[55px] left-[80px]"
            }
          >
            {filteredData.length !== 0 &&
              filteredData.slice(0, 6).map((item) => (
                <Link key={item.id} to={`/${item.id}`}>
                  <div className="sm:w-[240px] md:w-[400px] hover:bg-gray-200 dark:hover:bg-neutral-900 p-2 hover:rounded-lg transition">
                    {titleSplit(item.title)}
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      <Dropdown>
        <DropdownTrigger>
          <Avatar
            as="button"
            className="transition-transform text-lg ml-3"
            icon={<FaUserAlt />}
            classNames={{
              icon: "text-gray-700 dark:text-white",
            }}
          />
        </DropdownTrigger>
        <DropdownMenu variant="faded" aria-label="searchbar menu">
          <DropdownSection>
            <DropdownItem
              textValue={theme === "dark" ? "Light Mode" : "Dark Mode"}
              startContent={
                theme === "dark" ? (
                  <MdOutlineLightMode className={"icon-class"} />
                ) : (
                  <MdOutlineDarkMode className={"icon-class"} />
                )
              }
            >
              <DarkModeToggle toggleDarkMode={toggleDarkModeHandler} />
            </DropdownItem>
            {searchbarMenu.map((item) => (
              <DropdownItem
                key={item.title}
                textValue={item.title}
                startContent={<item.icon className={"icon-class"} />}
              >
                <Link to={item.path}>{item.title}</Link>
              </DropdownItem>
            ))}
          </DropdownSection>
          <DropdownSection>
            <DropdownItem
              key="delete"
              className="text-danger"
              color="danger"
              startContent={<IoExitOutline className="text-danger" />}
            >
              LogOut
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Searchbar;
