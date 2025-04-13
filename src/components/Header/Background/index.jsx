import PropTypes from "prop-types";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import bg1 from "../../../assets/images/bg1.jpg";
import bg2 from "../../../assets/images/bg2.avif";
import bg3 from "../../../assets/images/bg3.jpg";

const Background = ({ playStatus, heroCount }) => {
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const css = "absolute inset-0 w-full h-full object-cover -z-50";

  const handleVideoLoad = e => {
    setIsVideoLoading(false);
    // Explicitly play the video for iOS
    const video = e.target;
    video.play().catch(error => {
      console.log("Autoplay failed:", error);
    });
  };

  return (
    <>
      {playStatus ? (
        <>
          {isVideoLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black z-40">
              <FaSpinner className="animate-spin text-white" size={40} />
            </div>
          )}
          <video
            className={`${css} fade-in`}
            autoPlay
            muted
            loop
            preload="auto"
            playsInline
            onLoadedData={handleVideoLoad}
            poster="/video-poster.jpg"
          >
            <source
              src="/OLAMIDE&RILIWANWEDDINGHIGHLIGHT.mp4"
              type="video/mp4"
            />
          </video>
        </>
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
