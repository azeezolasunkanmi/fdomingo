import Background from "./Background";
import NavBar from "./NavBar";
import Controls from "./Controls";

import { useEffect, useState } from "react";

const Header = () => {
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(true);

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
    <div className="">
      <div id="top" className="relative h-[100vh] overflow-hidden">
        <div className="fixed top-0 left-0 right-0 z-50">
          <NavBar />
        </div>
        <Background playStatus={playStatus} heroCount={heroCount} />

        {/* Hero Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
          <h1 className="text-[33px] md:text-[50px] lg:text-[70px] font-steelfish font-bold text-center leading-tight max-w-[1000px] mt-10">
            You tell me the story you know by heart
            <br /> – I&apos;ll turn it into a film you never forget.
          </h1>
          <p className="mt-6 text-[16px] md:text-[20px] lg:text-[22px] font-crimson italic md:max-w-[500px] max-w-[600px] text-center">
            Videographer and photographer documenting adventurous weddings and
            real love stories in cinematic style
          </p>
        </div>

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
