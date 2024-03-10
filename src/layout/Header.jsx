import { useLocation } from "react-router-dom";
import Searchbar from "components/Searchbar";

const Header = () => {
  const location = useLocation();
  return (
    <header className={location.pathname === "/" ? "pb-52":'pb-20'}>
      <Searchbar />
    </header>
  );
};

export default Header;
