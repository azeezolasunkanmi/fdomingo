import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";

const FeaturedStoryCard = ({ story, reverse }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  // Effect hook to control the video play/pause logic
  useEffect(() => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.play() : videoRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className={`lg:flex h-auto ${reverse ? "lg:flex-row-reverse" : ""}`}>
      <div className="lg:w-[50%] p-[5%] md:px-[8%] flex flex-col gap-6 text-white">
        <h2 className="text-[45px] lg:text-[60px] font-medium font-steelfish">
          {story.name}
        </h2>
        <p className="text-[18px] font-poppins">{story.title}</p>
        <p className="text-[18px] text-secondaryText font-crimson italic">
          &quot;{story.remark}&quot;
        </p>
        <p className="text-[18px]">{story.author}</p>
        <button
          className="px-6 py-2 flex gap-4 items-center mx-auto text-primary font-medium rounded-md bg-secondaryText"
          onClick={() => setIsPlaying(prev => !prev)}
          aria-label={isPlaying ? "Pause Film" : "Play Film"}
        >
          {isPlaying ? `Pause Film` : `Play Film`}{" "}
          {isPlaying ? <FaCirclePause size={24} /> : <FaCirclePlay size={24} />}
        </button>
      </div>

      <div className="lg:w-[50%] h-[500px] relative overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          controls={false}
          muted
          loop
          preload="auto"
          playsInline
          aria-label="Story video"
        >
          <source src={story.video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

// Stricter prop validation
FeaturedStoryCard.propTypes = {
  story: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    remark: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
  }).isRequired,
  reverse: PropTypes.bool,
};

export default FeaturedStoryCard;
