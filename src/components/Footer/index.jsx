import bg from "../../assets/images/bg4.jpg";
import logo from "../../assets/images/logo/logoWhite.png";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { MdAddCall, MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <p className="p-6 bg-[#c5b3a4] text-white text-[16px] font-crimson italic xl:text-[20px]">
        Documenting destination weddings and real love stories in cinematic
        style. We don&apos;t sell videos, we craft films. Amid all the beauty,
        the laughter, the love and tears of any wedding day, we create a
        celebration of you in a beautiful film crafted in our unique style. Our
        films tell the story of your love and express who you are. We strive to
        capture those special moments as they happen. It means being alive to
        the present, honouring the past, creating real treasures for the future.
        It is about transforming the events of your wedding into a living,
        lasting memory.
      </p>
      <div className="lg:flex gap-8 justify-center py-2 lg:py-10 drop-shadow-lg">
        <div className="text-white capitalize text-[18px] font-crimson border-r-4 px-4 mt-10 md:mt-20">
          <img src={logo} alt="logo" className="w-[100px]" />

          <div className="flex gap-8 mt-4">
            <FaFacebookF size={20} color="#fff" className="cursor-pointer" />
            <FaInstagram size={20} color="#fff" className="cursor-pointer" />
            <FaTiktok size={20} color="#fff" className="cursor-pointer" />
            <FaXTwitter size={20} color="#fff" className="cursor-pointer" />
            <FaYoutube size={20} color="#fff" className="cursor-pointer" />
          </div>
        </div>
        <div
          id="contact"
          className="text-white flex flex-col gap-4 font-poppins px-4 mt-10 md:mt-20"
        >
          <h2 className="text-[22px] font-semibold">Contact Us</h2>

          <p className="flex items-center gap-2">
            <FaLocationDot />
            54 Sanya street, aguda, surulere, Lagos.
          </p>

          <p className="flex items-center gap-2">
            <MdAddCall />
            <a href="tel:+2348137726692" className="">
              +2348137726692
            </a>
          </p>
          <p className="flex items-center gap-2">
            <MdEmail />
            <a href="mailto:fdomingofilms@gmail.com" className="">
              fdomingofilms@gmail.com
            </a>
          </p>
        </div>
        <div className="text-white flex flex-col gap-4 font-poppins px-4 mt-10 md:mt-20">
          <h2 className="text-[22px] font-semibold">Quick Links</h2>

          <p className="">
            <a href="#top" className="">
              Back to Top
            </a>
          </p>
          <p className="">
            <a href="#" className="">
              Portfolio
            </a>
          </p>
        </div>
        <div className="text-white flex flex-col gap-4 font-poppins px-4 mt-10 md:mt-20">
          <h2 className="text-[22px] font-semibold">Services</h2>

          <span className="">Video production</span>
          <span className="">Video editing</span>
          <span className="">Live Stream</span>
        </div>
      </div>
      <div className="text-center text-white font-poppins text-[14px] p-2 drop-shadow-lg mt-10">
        <p>©2024 FDomingo • All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
