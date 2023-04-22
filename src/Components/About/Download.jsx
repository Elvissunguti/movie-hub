import React from "react";
import download from "../Assets/download.jpg";

const Download = () => {
    return (
        <section className="bg-[#000000] border-b-8 border-gray-800 border-solid">
            <div className="my-6 flex flex-col-reverse lg:flex-row max-w-4xl max-w-6xl mx-auto">
                <div className="lg:w-1/2">
                    <img src={download} alt="" className="" />
                </div>
                <div className="text-white flex flex-col items-center justify-center lg:w-1/2">
                    <h2 className="font-bold text-5xl">Download your shows to watch offline.</h2>
                    <p className="font-semibold text-xl">Save your favorites easily and always have something to watch.</p>
                </div>
            </div>
        </section>
    )
}
export default Download;