import React from "react";

const Home = () => {
  return (
    <div className="container px-10 pt-20">
      <div className="box-border border-2 rounded-lg md:h-full lg:h-72 mb-4 flex justify-center items-center">
        Carousel here
      </div>
      <div className="grid grid-cols-2 gap-4 my-6">
        <div className="box-border h-32 p-4 border-2 rounded-lg">Left</div>
        <div className="box-border h-32 p-4 border-2 rounded-lg">Right</div>
        <div className="box-border h-32 p-4 border-2 rounded-lg">Left</div>
        <div className="box-border h-32 p-4 border-2 rounded-lg">Right</div>
        <div className="box-border h-32 p-4 border-2 rounded-lg">Left</div>
        <div className="box-border h-32 p-4 border-2 rounded-lg">Right</div>
      </div>
    </div>
  );
};

export default Home;
