import PropTypes from "prop-types";
import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";

const Hero = ({
  setHeroCount,
  playStatus,
  setPlayStatus,
  heroData,
  heroCount,
}) => {
  return (
    <div className="p-6 md:mx-4 xl:mx-20 z-10">
      <div className="mt-10 xl:mt-32 font-merriweather text-[50px] md:text-[75px] capitalize leading-[60px] md:leading-[80px] fade-in text-white drop-shadow-lg">
        <h2>{heroData.text1}</h2>
        <h2>{heroData.text2}</h2>
      </div>
      <div className="mt-6">
        <button className="bg-white px-4 py-3 text-primary text-[16px] font-poppins font-medium rounded-3xl flex items-center gap-8">
          See Our Stories <FaArrowCircleRight size={24} color="#FF5722" />
        </button>
      </div>

      <div className="absolute right-0 left-0 bottom-0 p-6 md:mx-4 xl:mx-20 flex items-center justify-between gap-4">
        <ul className="flex gap-3">
          <li
            onClick={() => setHeroCount(0)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              heroCount === 0 ? "bg-accent" : " bg-white"
            }`}
          ></li>
          <li
            onClick={() => setHeroCount(1)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              heroCount === 1 ? "bg-accent" : "bg-white"
            }`}
          ></li>
          <li
            onClick={() => setHeroCount(2)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              heroCount === 2 ? "bg-accent" : " bg-white"
            }`}
          ></li>
        </ul>
        <div
          className="flex items-center gap-4 text-white cursor-pointer"
          onClick={() => setPlayStatus(!playStatus)}
        >
          <p className="text-lg">{playStatus ? "Pause" : "Play"} the video</p>
          {playStatus ? (
            <FaCirclePause size={35} />
          ) : (
            <FaCirclePlay size={35} />
          )}
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  heroCount: PropTypes.number.isRequired,
  playStatus: PropTypes.bool.isRequired,
  setHeroCount: PropTypes.func.isRequired,
  setPlayStatus: PropTypes.func.isRequired,
  heroData: PropTypes.object.isRequired,
};

export default Hero;
