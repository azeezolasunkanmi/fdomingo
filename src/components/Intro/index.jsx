const Intro = () => {
  return (
    <div className="p-4 md:px-8 bg-text text-white">
      <div className="lg:flex justify-between items-center max-w-[1200px] mx-auto my-10">
        <h2 className="lg:w-[45%] text-[60px] lg:text-[90px] font-semibold font-steelfish leading-tight my-10">
          Cenematic wedding films for free-spirited couples
        </h2>
        <div className="lg:w-[50%] my-10">
          <h4 className="font-poppins uppercase mb-4">
            Your wedding is a unique moment in time to pause, reflect, and look
            back on for years to come
          </h4>
          <p className="font-crimson italic text-[18px] text-justify">
            Whether you’re creating an intentional space to celebrate with your
            favorite people or planning a getaway adventure elopement, I help
            you document the day while telling the story of your relationship in
            a way that’s intentional, true to you, and authentically
            encapsulates all the beautiful chapters of the journey you’ve shared
            so far. No matter where life leads, you’ll have a treasured keepsake
            that can transport you back to this moment and remind you again and
            again why you’re together and why it’s worth it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
