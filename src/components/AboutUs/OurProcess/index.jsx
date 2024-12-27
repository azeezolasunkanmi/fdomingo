import icon1 from "../../../assets/images/icon1.png";
import icon2 from "../../../assets/images/icon2.png";
import icon3 from "../../../assets/images/icon3.png";
import icon4 from "../../../assets/images/icon4.png";
import { motion } from "motion/react";

const OurProcess = () => {
  return (
    <div className="p-4 max-w-[1300px] bg-background mx-auto font-poppins my-6">
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-steelfish font-semibold text-center text-text uppercase text-[40px] lg:text-[70px]"
      >
        Our Process
      </motion.h2>
      <p className="text-center text-text max-w-[600px] mx-auto mb-10 lg:mb-20 px-2">
        From planning to delivery, we ensure every step is seamless, capturing
        your love story in the most authentic and cinematic way possible.
      </p>
      <div className="md:mx-20 lg:flex justify-between flex-wrap lg:max-w-[1300px] mx-auto px-2">
        <div className="flex gap-4 my-8 lg:w-[45%]">
          <div className="w-[80px] shrink-0">
            <img src={icon4} className="w-full" alt="" />
          </div>
          <div className="">
            <p className="text-[22px] text-primary font-medium">
              Planning & Storyboarding
            </p>
            <p className="text-[15px] text-text mt-2">
              Together, We’ll discuss your story, preferences, and create a
              detailed plan, including timelines, key shots, and creative ideas.
              Our goal is to ensure a seamless filming experience.
            </p>
          </div>
        </div>
        <div className="flex gap-4 my-8 lg:w-[45%]">
          <div className="w-[80px] shrink-0">
            <img src={icon1} className="w-full" alt="" />
          </div>
          <div className="">
            <p className="text-[22px] text-primary font-medium">
              Filming the Big Day
            </p>
            <p className="text-[15px] text-text mt-2">
              we’ll blend into the background to capture every laugh, tear, and
              dance move. From the quiet, intimate moments to the joyous
              celebrations, we’ll be there.
            </p>
          </div>
        </div>
        <div className="flex gap-4 my-8 lg:w-[45%]">
          <div className="w-[80px] shrink-0">
            <img src={icon2} className="w-full" alt="" />
          </div>
          <div className="">
            <p className="text-[22px] text-primary font-medium">
              Editing and Post-Production
            </p>
            <p className="text-[15px] text-text mt-2">
              We meticulously edit your footage, adding music, transitions, and
              effects to craft a cinematic masterpiece that tells your unique
              love story.
            </p>
          </div>
        </div>
        <div className="flex gap-4 my-8 lg:w-[45%]">
          <div className="w-[80px] shrink-0">
            <img src={icon3} className="w-full" alt="" />
          </div>
          <div className="">
            <p className="text-[22px] text-primary font-medium">
              Delivery & Reliving the Day
            </p>
            <p className="text-[15px] text-text mt-2">
              Your finished film will be delivered in your preferred format,
              eady for you to relive and share the best day of your lives with
              loved ones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
