import FeaturedStoryCard from "./FeaturedStoryCard";
import { featuredStoryData } from "../../constants";
import { motion } from "motion/react";

const FeaturedStory = () => {
  return (
    <div className="p-4 bg-text text-white">
      <div className="my-10 lg:my-20">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[40px] lg:text-[70px] font-medium font-steelfish text-center uppercase"
        >
          Featured Love Stories
        </motion.h2>
        <div className="w-[150px] h-1 bg-secondaryText rounded-3xl mt-2 mx-auto"></div>
      </div>
      {featuredStoryData.map((story, i) => (
        <FeaturedStoryCard key={i} story={story} reverse={i % 2 !== 0} />
      ))}
    </div>
  );
};

export default FeaturedStory;
