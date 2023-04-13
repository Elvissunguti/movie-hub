import React from "react";
import watch from "../Assets/watch.png";

const Watch = () => {
    return(
      <section className="bg-[#000000] border-b-8 border-gray-800 border-solid ">
        <div className="flex flex-col lg:flex-row max-w-4xl max-w-6xl mx-auto">
            <div className="lg:w-1/2 text-white flex flex-col items-center justify-center">
                <h2 className="text-5xl font-bold">Watch everywhere.</h2>
                <p className="font-semibold text-xl">
                    Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                </p>
            </div>
            <div className="lg:w-1/2">
                <img src={watch} alt="" />
            </div>
        </div>
      </section>
    )
}
export default Watch;