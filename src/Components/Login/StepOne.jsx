import React from "react";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

const StepOne = () => {
    return(
        <div>
        <div>
            <NavBar />
        </div>
        <div>
            <h1>Create a password to start your membership</h1>
            <p>Just a few more steps!</p>
            <p>We hate paperwork, too.</p>
        </div>
        <form>
            <div>
                <input 
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                placeholder="Email"
                className="" 
                />

                <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="Add a password"
                className=""
                 />
            </div>
            <Link to="/step two">
            <button className="px-6 py-2 bg-red-500 text-white hover:bg-red-800">
                Next
            </button>
            </Link>
        </form>
        </div>
    )
 }
 export default StepOne;

