import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo/logoWhite.png";
import { navLinks } from "../../../constants";
import { IoMenu } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-6 lg: z-10 md:mx-4 xl:mx-20">
      <div className="w-[50px] lg:w-[80px]">
        <img src={logo} alt="logo" />
      </div>
      <nav className="hidden lg:flex items-center gap-4 font-poppins text-[18px] font-medium text-white">
        {navLinks.map((link, i) => (
          <span key={i}>
            <Link
              to={link.to}
              className={`${
                link.to === "#contact"
                  ? "bg-primary text-accent rounded-3xl"
                  : ""
              } px-4 py-2 hover:text-accent`}
            >
              {link.title}
            </Link>
          </span>
        ))}
      </nav>
      <div className="lg:hidden cursor-pointer">
        <IoMenu color="white" size={30} />
      </div>
    </div>
  );
};

export default NavBar;
