import about1 from "../../assets/images/about1.jpg";
import about2 from "../../assets/images/about2.jpeg";
import about3 from "../../assets/images/about3.jpeg";
import bg from "../../assets/images/backcover2.avif";
import OurProcess from "./OurProcess";
import Services from "./Services";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import { motion } from "motion/react";

const AboutUs = () => {
  return (
    <div className="font-poppins">
      <div
        className="bg-no-repeat bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        {/* <div className="p-4">
          <div className="w-[100px] h-1 bg-primary rounded-3xl mt-2 mx-auto"></div>
        </div> */}
        <div className="lg:flex flex-row-reverse justify-center max-w-[1300px] lg:pt-20 mx-auto p-4">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:w-[50%] text-text flex flex-col gap-6 p-4 md:px-20 bg-background rounded"
          >
            <h2 className="text-[60px] lg:text-[90px] font-semibold font-steelfish leading-tight">
              We Are FDomingo
              <br />
              Creative Studio.
            </h2>

            <div className="text-[16px]">
              <p>
                What we offer is far from a standard service—it’s a bespoke
                experience tailored to each client’s unique vision. Every event
                is different, and so are the needs of each client. That’s why
                our approach isn’t dictated by cost but by the value and impact
                that we create. We ensure that every event is not just memorable
                but unforgettable, with every detail meticulously crafted to
                make each vision come to life. We go the extra mile to ensure
                that our clients and their guests have an unparalleled
                experience, leaving everyone with lasting memories of an
                extraordinary occasion.
              </p>
            </div>
            <div className="flex justify-between items-center mb-6 font-medium text-primary">
              <div className="p-2">
                <p className="text-accentSecondary font-normal text-[28px]">
                  140+
                </p>
                <p>Finished</p>
                <p>Projects</p>
              </div>
              <div className="p-2">
                <p className="text-accentSecondary font-normal text-[28px]">
                  15+
                </p>
                <p>Countries</p>
                <p>Visited</p>
              </div>
              <div className="p-2">
                <p className="text-accentSecondary font-normal text-[28px]">
                  500+
                </p>
                <p>Happy</p>
                <p>Clients</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:w-[50%] relative overflow-hidden p-4 md:px-20"
          >
            <img
              src={about1}
              alt="man holding camera"
              className="w-full object-cover rounded-xl z-10"
            />
            <div className="flex gap-4 mt-4">
              <img
                src={about2}
                alt="man holding camera"
                className="w-[50%] h-full object-cover rounded-xl z-10"
              />
              <img
                src={about3}
                alt="man holding camera"
                className="w-[50%] h-full object-cover rounded-xl z-10"
              />
            </div>
          </motion.div>
        </div>
        <div className=" bg-[#c5b3a4] text-white mt-10">
          <div className="max-w-[1300px] mx-auto flex items-center justify-between p-4 md:px-20">
            <h2 className="font-steelfish font-semibold md:text-center text-text uppercase text-[30px] lg:text-[65px] shrink-0">
              Connect with us
            </h2>

            <div className="flex gap-4 md:gap-8">
              <FaFacebookF
                size={20}
                color="#282828"
                className="cursor-pointer"
              />
              <FaInstagram
                size={20}
                color="#282828"
                className="cursor-pointer"
              />
              <FaTiktok size={20} color="#282828" className="cursor-pointer" />
              {/* <FaXTwitter
                size={20}
                color="#282828"
                className="cursor-pointer"
              /> */}
              <FaYoutube size={20} color="#282828" className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <Services />
      <OurProcess />
    </div>
  );
};

export default AboutUs;
