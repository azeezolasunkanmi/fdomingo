import pic1 from "../../../assets/images/bg1.jpg";
import pic2 from "../../../assets/images/bg2.jpg";
import pic3 from "../../../assets/images/bg3.jpg";
import { motion } from "motion/react";

const Services = () => {
  return (
    <div className="relative p-4 my-10 lg:py-20 bg-background">
      <div className="">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className=" font-steelfish font-semibold text-center text-text uppercase text-[40px] lg:text-[70px]"
        >
          What we offer
        </motion.h2>
        <p className="text-center text-text max-w-[600px] mx-auto mb-10 lg:mb-20 px-2">
          We specialize in capturing unforgettable moments and transforming them
          into cinematic stories. From weddings to live events, we deliver
          exceptional video production, editing, and coverage tailored to your
          vision.
        </p>
      </div>
      <div className="lg:flex justify-center gap-8 items-stretch text-text mt-16">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded max-w-[350px] mx-auto lg:mx-0 text-center flex flex-col gap-4 pb-10 bg-[#c5b3a4] mt-8"
        >
          <img src={pic1} alt="" />
          <h3 className="font-crimson text-[30px] font-semibold">
            Video production
          </h3>
          <p className="px-4">
            Capture your story with stunning visuals and professional
            production. From concept to completion, we create high-quality
            videos tailored to your unique vision
          </p>
          <p className="flex justify-center items-center mt-2">
            <a
              href="#contact"
              className=" px-6 py-2 bg-text text-white rounded"
            >
              Contact Us
            </a>
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded max-w-[350px] mx-auto lg:mx-0 text-center flex flex-col gap-4 pb-10 bg-[#c5b3a4] mt-8"
        >
          <img src={pic2} alt="" />
          <h3 className="font-crimson text-[30px] font-semibold">
            Video editing
          </h3>
          <p className="px-4">
            Transform raw footage into polished, cinematic masterpieces. Our
            expert editing adds the perfect touch of creativity and precision to
            every frame.
          </p>
          <p className="flex justify-center items-center mt-2">
            <a
              href="#contact"
              className=" px-6 py-2 bg-text text-white rounded"
            >
              Contact Us
            </a>
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded max-w-[350px] mx-auto lg:mx-0 text-center flex flex-col gap-4 pb-10 bg-[#c5b3a4] mt-8"
        >
          <img src={pic3} alt="" />
          <h3 className="font-crimson text-[30px] font-semibold">
            Live Stream Coverage
          </h3>
          <p className="px-4">
            Seamlessly stream or document your events in real time. We ensure no
            moment goes unnoticed, delivering professional and engaging live
            coverage.
          </p>
          <p className="flex justify-center items-center mt-2">
            <a
              href="#contact"
              className=" px-6 py-2 bg-text text-white rounded"
            >
              Contact Us
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
