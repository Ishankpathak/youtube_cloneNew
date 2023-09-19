import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <div className=" bg-black text-white flex justify-between items-center p-3 ">
      <Link to={"/"}>
        <img src={logo} alt="Navbar-icon" className="w-10" />
      </Link>
      <SearchBar />
    </div>
  );
};

export default Navbar;
