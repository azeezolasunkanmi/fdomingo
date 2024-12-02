import FeaturedStoryCard from "./FeaturedStoryCard";
import { featuredStoryData } from "../../constants";

const FeaturedStory = () => {
  return (
    <div className="p-4 bg-primary text-white">
      <div className="my-10 lg:my-20">
        <h2 className="text-[24px] lg:text-[36px] font-poppins text-center uppercase">
          Featured Love Stories
        </h2>
        <div className="w-[150px] h-1 bg-secondaryText rounded-3xl mt-2 mx-auto"></div>
      </div>
      {featuredStoryData.map((story, i) => (
        <FeaturedStoryCard key={i} story={story} reverse={i % 2 !== 0} />
      ))}
    </div>
  );
};

export default FeaturedStory;
