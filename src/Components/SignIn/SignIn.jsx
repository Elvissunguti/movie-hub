import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
    return(
        <section className="">
            <div className="w-full h-screen relative">
                <div className="bg-custom absolute inset-0">
                    <form className="relative z-10 text-white">
                        <div className="relative">
                            <h2>Sign In</h2>
                            <input
                            type="email"
                            name="email"
                            required
                            placeholder="Email or phone number"
                            className=""
                            />
                            <input
                            type="password"
                            name="password"
                            required
                            placeholder="Password"
                            className=""
                            />
                            
                        </div>
                        <div>
                            <Link to="/login">
                            <button>
                                Sign In
                            </button>
                            </Link>
                        </div>
                        <div>
                            <p>
                                New to Movie-Hub? <a href="#" className="text-red-500 hover:text-underline" >Sign up Now</a>.
                            </p>
                        </div>
                    </form>

                </div>
                
            </div>
        </section>
    )
}
export default SignIn;