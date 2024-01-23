import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className=" flex sm:flex-row md:flex-col lg:flex-col absolute gap-5 overflow-auto mt-5 p-1 items-center max-w-[100%]">
      {categories.map((item) => (
        <span
          onClick={() => setSelectedCategory(item.name)}
          key={item.name}
          className=" hover:bg-red-500 rounded-md p-1 "
          style={{
            background: item.name === selectedCategory && "#FC1503",
          }}
        >
          <button className="p-1 pl-2">{item.icon}</button>
          <button className="p-1 pl-2">{item.name}</button>
        </span>
      ))}
    </div>
  );
};

export default SideBar;
