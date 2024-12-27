import Background from "./Background";
// import NavBar from "./NavBar";
import Controls from "./Controls";

import { useEffect, useState } from "react";

const Header = () => {
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  // console.log(heroCount);
  useEffect(() => {
    if (!playStatus) {
      const interval = setInterval(() => {
        setHeroCount(prevCount => (prevCount === 2 ? 0 : prevCount + 1));
      }, 3000);

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [playStatus]);

  return (
    <div className="p-4 ">
      <h1 className="text-[65px] lg:text-[96px] text-text font-steelfish leading-tight mb-6">
        THE PERFECT
        <br /> WEDDING EXPERIENCE
      </h1>

      <div id="top" className="relative rounded-lg h-[70vh] overflow-hidden">
        <Background playStatus={playStatus} heroCount={heroCount} />
        <Controls
          setHeroCount={setHeroCount}
          setPlayStatus={setPlayStatus}
          playStatus={playStatus}
          heroCount={heroCount}
        />
      </div>
    </div>
  );
};

export default Header;
