import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/images/logo/logoWhite.png";

import { IoMenu } from "react-icons/io5";

const NavBar = () => {
  const location = useLocation();
  const isActive = path => location.pathname === path;

  return (
    <div className="flex items-center justify-center gap-8 p-6 lg: z-10 md:mx-4 xl:mx-20">
      <Link
        to="/"
        className={`px-4 py-2 font-poppins text-[18px] font-medium text-white hover:text-accent ${
          isActive("/") ? "text-accent font-semibold" : "text-white"
        }`}
      >
        Home
      </Link>
      <div className="w-[50px] lg:w-[80px]">
        <img src={logo} alt="logo" />
      </div>
      <Link
        to="/portfolio"
        className={`px-4 py-2 font-poppins text-[18px] font-medium text-white hover:text-accent ${
          isActive("/portfolio") ? "text-accent font-semibold" : "text-white"
        }`}
      >
        Portfolio
      </Link>

      <div className="lg:hidden cursor-pointer">
        <IoMenu color="white" size={30} />
      </div>
    </div>
  );
};

export default NavBar;
