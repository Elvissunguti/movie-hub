import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
    return(
        <section className="">
            <div className="w-full h-screen relative">
                <div className="bg-custom absolute inset-0">
                    <form className="relative z-10 text-white">
                        <div className="flex flex-col gap-5 items-center justify-center">
                            <h2>Sign In</h2>
                            <label>
                            <input
                            type="email"
                            name="email"
                            required
                            placeholder="Email or phone number"
                            className=""
                            />
                            </label>
                            <label>
                            <input
                            type="password"
                            name="password"
                            required
                            placeholder="Password"
                            className=""
                            />
                            </label>
                            
                        </div>
                        <div>
                            <Link to="/browse page">
                            <button>
                                Sign In
                            </button>
                            </Link>
                        </div>
                        <div>
                            <p>
                                New to Movie-Hub? <Link to="/login" className="text-red-500 hover:text-underline" >Sign up Now</Link>.
                            </p>
                        </div>
                    </form>

                </div>
                
            </div>
        </section>
    )
}
export default SignIn;