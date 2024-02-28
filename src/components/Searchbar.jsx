import logo from "assets/sofa.png";
import { Input } from "@nextui-org/react";

const Searchbar = () => {
  return (
    <div>
      <img src={logo} alt={"logo"} width={"37px"} />
      <Input type="text" label="جستوجو" size="sm" />
    </div>
  );
};

export default Searchbar;
