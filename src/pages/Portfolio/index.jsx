import bg from "../../assets/images/probg.avif";
import FeaturedStoryCard from "../../components/FeaturedStory/FeaturedStoryCard";
import { featuredStoryData } from "../../constants";
import Footer from "../../components/Footer";
import Collaborate from "../../components/Collaborate";
// import NavBar from "../../components/Header/NavBar";

const Portfolio = () => {
  return (
    <div>
      <div
        className={`relative bg-no-repeat bg-cover bg-center py-16 md:py-24`}
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        <div className="relative z-20">
          <h2 className="text-white text-center text-[60px] lg:text-[80px] uppercase font-steelfish font-semibold z-50">
            Portfolio
          </h2>
          <p className="text-center text-white px-8 md:w-[70%] xl:w-[60%] mx-auto lg:text-[18px] z-50">
            Short description about the heading
          </p>
        </div>
      </div>
      <div className="bg-text pt-10">
        {featuredStoryData.map((story, i) => (
          <FeaturedStoryCard key={i} story={story} reverse={i % 2 !== 0} />
        ))}
      </div>
      <Collaborate />
      <Footer />
    </div>
  );
};

export default Portfolio;
