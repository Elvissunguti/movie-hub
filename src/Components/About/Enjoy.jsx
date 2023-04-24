import React from "react";
import enjoy from "../Assets/enjoy.png";

const Enjoy = () => {
    return(
        <section className="bg-[#000000]  border-t-8 border-b-8 border-gray-800 border-solid ">
        <div className="mx-auto px-6 max-w-5xl xl:max-w-6xl  flex flex-col lg:flex-row ">
            <div className="lg:w-1/2 my-6 text-white flex flex-col items-center justify-center">
                <h2 className="font-bold text-5xl">Enjoy on Your TV.</h2>
                <p className="font-semibold text-xl">
                    Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                    </p>
            </div>
            <div className="lg:w-1/2">
                <img src={enjoy} alt="" className="" />
            </div>
        </div>
        </section>
    )
}
export default Enjoy;