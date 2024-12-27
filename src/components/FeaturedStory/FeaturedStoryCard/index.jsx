import PropTypes from "prop-types";
import { useState } from "react";
import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";

const FeaturedStoryCard = ({ story, reverse }) => {
  const [isPlaying, setIsPlaying] = useState(false); // Control video play state
  return (
    <div
      className={`lg:flex h-auto lg:h-[500px] ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
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
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? `Pause Film` : `Play Film `}{" "}
          {isPlaying ? <FaCirclePause size={24} /> : <FaCirclePlay size={24} />}
        </button>
      </div>
      <div className="lg:w-[50%] lg:h-[500px] h-[300px] relative overflow-hidden">
        <video
          className="w-full h-full object-cover"
          controls={false}
          muted
          loop
          ref={video => {
            if (video) {
              isPlaying ? video.play() : video.pause(); // Dynamically play/pause
            }
          }}
        >
          <source src={story.video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

FeaturedStoryCard.propTypes = {
  story: PropTypes.object.isRequired,
  reverse: PropTypes.bool,
};

export default FeaturedStoryCard;
