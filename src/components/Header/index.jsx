import Background from "./Background";
import NavBar from "./NavBar";
import Hero from "./Hero";
import { heroData } from "../../constants";
import { useEffect, useState } from "react";

const Header = () => {
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  console.log(heroCount);
  useEffect(() => {
    if (!playStatus) {
      const interval = setInterval(() => {
        setHeroCount(prevCount => (prevCount === 2 ? 0 : prevCount + 1));
      }, 3000);

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [playStatus]);

  return (
    <div className="relative h-screen overflow-hidden">
      <Background playStatus={playStatus} heroCount={heroCount} />
      <NavBar />
      <Hero
        setHeroCount={setHeroCount}
        setPlayStatus={setPlayStatus}
        playStatus={playStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
      />
    </div>
  );
};

export default Header;
