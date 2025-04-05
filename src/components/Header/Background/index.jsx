import PropTypes from "prop-types";
import bg1 from "../../../assets/images/bg1.jpg";
import bg2 from "../../../assets/images/bg2.avif";
import bg3 from "../../../assets/images/bg3.jpg";
import olavideo from "../../../assets/videos/OLAMIDE&RILIWANWEDDINGHIGHLIGHT.mp4";

const Background = ({ playStatus, heroCount }) => {
  const css = "absolute inset-0 w-full h-full object-cover -z-50";

  return (
    <>
      {playStatus ? (
        <video className={`${css} fade-in`} autoPlay muted loop>
          <source src={olavideo} type="video/mp4" />
        </video>
      ) : (
        <img
          key={heroCount} // Ensures re-render triggers animation
          src={[bg1, bg2, bg3][heroCount]} // Dynamic selection
          className={`${css} fade-in`}
          loading="lazy"
          alt="background"
        />
      )}
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 -z-40"></div>
    </>
  );
};

Background.propTypes = {
  heroCount: PropTypes.number.isRequired,
  playStatus: PropTypes.bool.isRequired,
};

export default Background;
