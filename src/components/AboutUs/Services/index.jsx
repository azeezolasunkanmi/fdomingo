import pic1 from "../../../assets/images/bg1.jpg";
import pic2 from "../../../assets/images/bg2.jpg";
import pic3 from "../../../assets/images/bg3.jpg";

const Services = () => {
  return (
    <div className="relative p-4 my-10 bg-background">
      <h2 className=" font-poppins font-semibold text-center text-text uppercase text-[35px] lg:text-[45px]">
        What we offer
      </h2>
      <div className="lg:flex justify-center gap-8 items-start text-text mt-16">
        <div className="rounded max-w-[350px] mx-auto lg:mx-0 text-center flex flex-col gap-4 pb-10 bg-[#c5b3a4] mt-8">
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
            <a href="#" className=" px-6 py-2 bg-text text-white rounded">
              Contact Us
            </a>
          </p>
        </div>
        <div className="rounded max-w-[350px] mx-auto lg:mx-0 text-center flex flex-col gap-4 pb-10 bg-[#c5b3a4] mt-8">
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
            <a href="#" className=" px-6 py-2 bg-text text-white rounded">
              Contact Us
            </a>
          </p>
        </div>
        <div className="rounded max-w-[350px] mx-auto lg:mx-0 text-center flex flex-col gap-4 pb-10 bg-[#c5b3a4] mt-8">
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
            <a href="#" className=" px-6 py-2 bg-text text-white rounded">
              Contact Us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
