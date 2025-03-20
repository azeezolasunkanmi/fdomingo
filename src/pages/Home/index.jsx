import Header from "../../components/Header";
import FeaturedStory from "../../components/FeaturedStory";
import Collaborate from "../../components/Collaborate";
import AboutUs from "../../components/AboutUs";
import Footer from "../../components/Footer";
import Intro from "../../components/Intro";

const Home = () => {
  return (
    <>
      <Header />
      <Intro />
      <div className="bg-background">
        <AboutUs />
        <FeaturedStory />
        <Collaborate />
        <Footer />
      </div>
    </>
  );
};

export default Home;
