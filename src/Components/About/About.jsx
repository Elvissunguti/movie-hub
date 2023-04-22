import React from "react";
import CreateProfile from "./CreateProfile";
import Enjoy from "./Enjoy";
import Download from "./Download";
import Watch from "./Watch";
import Questions from "./Questions";

const About = () => {

    const components = [
        {name: Enjoy},
        {name: Download},
        {name: Watch},
        {name: CreateProfile},
        {name: Questions},
    ];
    return(
        <div className="bg-[#000000]">
          <div>
            {components.map((component, i) => (
                <div key={i} className="">
                    <component.name />

                </div>
            ))}
          </div>
        </div>
    )
}
export default About;