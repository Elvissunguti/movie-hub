import React from "react";
import createProfile from "../Assets/createProfile.png";

const CreateProfile = () => {
    return(
        <section className="bg-[#000000] border-b-8 border-gray-800 border-solid">
            <div className="my-6 px-6 flex flex-col-reverse lg:flex-row max-w-4xl xl:max-w-6xl mx-auto">
                <div className="lg:w-1/2 ">
                    <img src={createProfile} alt="" />
                </div>
                <div className="text-white flex flex-col items-center justify-center lg:w-1/2">
                    <h2 className="font-bold text-5xl">Create profiles for kids.</h2>
                    <p className="font-semibold text-xl">
                        Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default CreateProfile;