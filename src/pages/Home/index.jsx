import Header from "../../components/Header";
import FeaturedStory from "../../components/FeaturedStory";
import Collaborate from "../../components/Collaborate";
import AboutUs from "../../components/AboutUs";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="">
      <Header />
      <div className="bg-background">
        <AboutUs />
        <FeaturedStory />
        <Collaborate />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
