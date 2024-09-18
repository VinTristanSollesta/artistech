import React from "react";

const Home = () => {
  return (
    <div className="container px-10 pt-16">
      <div className="box-border border-2 rounded-lg md:h-screen lg:h-72 mb-4 flex justify-center items-center">
        Carousel here
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 my-6">
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
