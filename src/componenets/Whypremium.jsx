import React from "react";

const Whypremium = () => {
  return (
    <div className="w-full px-4  bg-[white] py-8">
      <div className="max-w-[1240px] grid  sm:grid-cols-2 grid-cols-1 sm:px-4 px-0 sm:gap-1 gap-7 pt-8 pb-4 mx-auto   ">
      <div>
      <h1 className="text-[#0a183d] font-bold text-4xl sm:text-6xl  max-w-[1240px] mx-auto">
      Why go Premium
      </h1>
      </div>
      <div>
      <p className="text-gray-600 text-[16px] font-semibold pr-12">
            {" "}
            To get the best experience, we recommend paying the YouTube Music fee. This will remove ads and give you access to offline listening. But wait, there's more! With YouTube Premium, you can also watch any video without ads and play audio in the background.
          </p>
      </div>
        
      </div>
      <div className="max-w-[1240px] grid  sm:grid-cols-4 grid-cols-1 sm:px-4 px-0 sm:gap-1 gap-9 py-16 mx-auto   ">
      <div className="mx-auto">
       <img src="/images/person.jpg" className="rounded-full" alt="" />
       <p  className="text-center py-2 text-2xl font-semibold">No ad interruptions</p>
      </div>
      <div className="mx-auto">
      <img src="/images/garden.jpg" className="rounded-full" alt="" />
      <p className="text-center py-2 text-2xl font-semibold">High Quality</p>

      </div>
      <div className="mx-auto">
      <img src="/images/man.jpg" className="rounded-full" alt="" />
      <p className="text-center py-2 text-2xl font-semibold">Listen Offline</p>

      </div>
      <div className="mx-auto">
      <img src="/images/music.jpg" className="rounded-full" alt="" />
      <p className="text-center py-2 text-2xl font-semibold">Download Music</p>

      </div>

      </div>
    </div>
  );
};

export default Whypremium;
