import about1 from "../../assets/images/about1.jpg";
import bg from "../../assets/images/backcover2.avif";
import OurProcess from "./OurProcess";
import Services from "./Services";

const AboutUs = () => {
  return (
    <div className="font-poppins">
      <div
        className="bg-no-repeat bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className=" p-4">
          <div className="w-[100px] h-1 bg-primary rounded-3xl mt-2 mx-auto"></div>
        </div>
        <div className="lg:flex flex-row-reverse justify-center max-w-[1300px] lg:pt-20 mx-auto p-4">
          <div className="lg:w-[50%] text-text flex flex-col gap-6 p-4 md:px-20 bg-background rounded">
            <div className="text-[35px] lg:text-[45px] font-semibold leading-[50px]">
              <h2>We Are FDomingo</h2>
              <h2>Creative Studio.</h2>
            </div>

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
          </div>
          <div className="lg:w-[50%] relative overflow-hidden h-[500px] p-4 md:px-20">
            <img
              src={about1}
              alt="man holding camera"
              className="w-full h-full object-cover rounded-xl z-10"
            />
          </div>
        </div>
      </div>
      <Services />
      <OurProcess />
    </div>
  );
};

export default AboutUs;
