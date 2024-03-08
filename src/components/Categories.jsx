const Categories = ({ title, icon: Icon }) => {
  return (
    <div className="flex items-center justify-center gap-1 w-fit bg-blue-300 p-2 rounded-3xl cursor-pointer hover:bg-blue-400 transition">
      {title}
      <Icon className="text-xl" />
    </div>
  );
};

export default Categories;
