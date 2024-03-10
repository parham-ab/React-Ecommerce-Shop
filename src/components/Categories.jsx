import { useDispatch, useSelector } from "react-redux";
import { toggleCategory } from "../features/utilsSlice";

const Categories = ({ title, icon: Icon }) => {
  const state = useSelector((state) => state.utils.categoryStatus);
  const dispatch = useDispatch();
  return (
    <div
      className={`flex items-center justify-center gap-1 w-fit ${
        state === title ? "bg-blue-300" : "bg-blue-100"
      } p-2 rounded-3xl cursor-pointer hover:bg-blue-400 transition`}
      onClick={() => dispatch(toggleCategory(title))}
    >
      {title}
      <Icon className="text-xl" />
    </div>
  );
};

export default Categories;
