import React from "react";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <section>
             <div>
            <NavBar />
        </div>
        <div>
            login 
            <div>
                <h2>Finish setting up your account</h2>
                <p>Netflix is personalized for you. Create a password to watch on any device at any time.</p>
                <Link to='/stepone'>
                <button className="text-white bg-red-500 px-5 py-3 hover:bg-red-800">
                    Next
                </button>
                </Link>
            </div>
        </div>

        </section> 
    )
}
export default Login;