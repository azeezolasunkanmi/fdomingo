import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/images/logo/logoWhite.png";

const NavBar = () => {
  const location = useLocation();
  const isActive = path => location.pathname === path;

  return (
    <div className="flex items-center justify-center gap-10 p-2 z-50 lg:text-[20px] bg-black/50 backdrop-blur-sm">
      <Link
        to="/"
        className={`px-4 py-2 font-poppins text-[18px] font-medium hover:text-primary z-50 text-white ${
          isActive("/") ? "text-primary font-semibold" : "text-white"
        }`}
      >
        Home
      </Link>
      <div className="w-[50px] lg:w-[80px] z-50">
        <img src={logo} alt="logo" />
      </div>
      <Link
        to="/portfolio"
        className={`px-4 py-2 font-poppins text-[18px] font-medium hover:text-primary z-50 text-white ${
          isActive("/portfolio") ? "text-primary font-semibold" : "text-white"
        }`}
      >
        Portfolio
      </Link>
    </div>
  );
};

export default NavBar;
