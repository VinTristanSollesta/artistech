import React from "react";

const Home = () => {
  return (
    <div className="container px-10 pt-16">
      <div className="box-border border-2 rounded-lg md:h-screen lg:h- mb-4 flex justify-center items-center bg-zinc-50">
        Carousel here
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 my-6">
        <div className="box-border h-32 p-4 border-2 rounded-lg bg-zinc-50">
          Left
        </div>
        <div className="box-border h-32 p-4 border-2 rounded-lg bg-zinc-50">
          Right
        </div>
        <div className="box-border h-32 p-4 border-2 rounded-lg bg-zinc-50">
          Left
        </div>
        <div className="box-border h-32 p-4 border-2 rounded-lg bg-zinc-50">
          Right
        </div>
      </div>
    </div>
  );
};

export default Home;
