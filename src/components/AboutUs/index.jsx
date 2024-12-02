import about1 from "../../assets/images/about1.jpg";
import about2 from "../../assets/images/about2.jpeg";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import icon4 from "../../assets/images/icon4.png";

const AboutUs = () => {
  return (
    <div className="p-4 font-poppins max-w-[1300px] mx-auto">
      <div className="my-6">
        <h2 className="text-[24px] lg:text-[36px] text-center font-semibold uppercase">
          About Us
        </h2>
        <div className="w-[100px] h-1 bg-primary rounded-3xl mt-1 mx-auto"></div>
      </div>
      <div className="lg:flex flex-row-reverse justify-center py-6">
        <div className="lg:w-[50%] flex flex-col gap-6 p-4 md:px-20">
          <div className="text-[28px] font-semibold leading-[35px]">
            <h2 className="">We Are FDomingo</h2>
            <h2 className="text-accentSecondary">Creative Studio.</h2>
          </div>

          <div className="font-crimson font-medium text-[18px] text-primary">
            <p>
              The world without Photography will be meaningless to us if there
              is no light and color, which opens up our minds and expresses
              passion. My videos are inspired by light, color, creative
              perspective, techniques and personalities.
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
        </div>
        <div className="lg:w-[50%] relative overflow-hidden h-[500px] p-4 md:px-20">
          <img
            src={about1}
            alt="man holding camera"
            className="w-[90%] h-[70%] object-cover rounded-xl z-10"
          />
          <img
            src={about2}
            alt="man holding camera"
            className="absolute bottom-[5%] right-[5%] w-[180px] h-[180px] md:w-[300px] md:h-[200px] object-cover rounded-xl z-20"
          />
        </div>
      </div>
      <h2 className="font-crimson font-semibold text-center text-accentSecondary italic text-[45px] my-6">
        Our Process
      </h2>
      <div className="md:mx-10 lg:flex justify-between flex-wrap">
        <div className="flex gap-4 my-8 lg:w-[45%]">
          <div className="w-[80px] shrink-0">
            <img src={icon4} className="w-full" alt="" />
          </div>
          <div className="">
            <p className="text-[22px] text-primary font-medium">
              Planning & Storyboarding
            </p>
            <p className="text-[15px] text-[#343a40] mt-2">
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
            <p className="text-[15px] text-[#343a40] mt-2">
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
            <p className="text-[15px] text-[#343a40] mt-2">
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
            <p className="text-[15px] text-[#343a40] mt-2">
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

export default AboutUs;
