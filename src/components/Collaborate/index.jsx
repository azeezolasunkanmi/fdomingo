import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Collaborate = () => {
  return (
    <div className="p-4 max-w-[1300px] bg-background mx-auto font-poppins my-6 md:my-32">
      <div className="md:mx-10 lg:flex justify-center gap-20">
        <div className="flex flex-col uppercase font-steelfish py-4 lg:w-[47%] lg:text-right">
          <p className="text-text font-poppins md:text-[18px]">Collaborate</p>
          <div className="text-[60px] lg:text-[90px] font-bold text-primary leading-tight">
            <h2>Want to work </h2>
            <h2 className="text-accentSecondary">with us? Leave us</h2>
            <h2>a message!</h2>
          </div>
          <div className="flex gap-4 mb-6 mt-2 lg:justify-end">
            <FaFacebookF size={20} color="#454543" className="cursor-pointer" />
            <FaInstagram size={20} color="#454543" className="cursor-pointer" />
            <FaTiktok size={20} color="#454543" className="cursor-pointer" />
            <FaXTwitter size={20} color="#454543" className="cursor-pointer" />
            <FaYoutube size={20} color="#454543" className="cursor-pointer" />
          </div>
        </div>
        <div className="mt-10 lg:w-[47%]">
          <form action="">
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full border p-4 outline-none"
              required
            ></textarea>
            <div className="lg:flex gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full border p-4 mt-2 outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full border p-4 mt-2 outline-none"
                required
              />
            </div>
            <button className="w-full border p-4 mt-2 lg:mt-4 bg-primary text-white uppercase">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
