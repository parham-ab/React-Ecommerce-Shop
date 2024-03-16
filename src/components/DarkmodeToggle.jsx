import { useSelector } from "react-redux";
const DarkModeToggle = ({ toggleDarkMode }) => {
  const theme = useSelector((state) => state.utils.theme);
  return (
    <p onClick={toggleDarkMode}>
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </p>
  );
};

export default DarkModeToggle;
