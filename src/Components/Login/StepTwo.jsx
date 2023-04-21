import React from "react";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

const StepTwo = () => {
    return(
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <h2 className="text-4xl font-bold">Choose your plan.</h2>
                <ul className="space-y-3">
                    <li><span className="text-red-500">&#x2713;</span> No commitments, cancel anytime.</li>
                    <li><span className="text-red-500">&#x2713;</span> Everything on Netflix for one low price.</li>
                    <li><span className="text-red-500">&#x2713;</span> No ads and no extra fees. Ever.</li>
                </ul>
                <Link>
                <button className="px-6 py-2 bg-red-500 text-white hover:bg-red-800">
                    Next
                </button></Link>
            </div>
        </div>
    )
}
export default StepTwo;