import logo from "assets/shop.png";
import { Avatar, Input } from "@nextui-org/react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import { IoExitOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import searchbarMenu from "../constants/serchbarMenu";
import { IoIosSearch } from "react-icons/io";

const Searchbar = () => {
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <div className="flex items-center justify-between px-3 py-1 bg-gray-200 shadow-lg fixed w-full z-10" >
      <div className="flex items-center gap-[30px]">
        <img src={logo} alt={"logo"} width={"37px"} />
        <Input
          type="text"
          placeholder="Search..."
          size=""
          className="sm:w-[240px] md:w-[400px]"
          endContent={
            <IoIosSearch className="text-black/50  dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
        />
      </div>

      <Dropdown>
        <DropdownTrigger>
          <Avatar
            as="button"
            className="transition-transform text-lg ml-3"
            icon={<FaUserAlt />}
            classNames={{
              icon: "text-gray-700",
            }}
          />
        </DropdownTrigger>
        <DropdownMenu variant="faded" aria-label="searchbar menu">
          <DropdownSection>
            {searchbarMenu.map((item) => (
              <DropdownItem
                key={item.title}
                textValue={item.title}
                startContent={<item.icon className={iconClasses} />}
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
