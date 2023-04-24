import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {

    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const [ isFocused, setIsFocused] = useState(false);

    const handleInputChangeEmail = (e) => {
        setEmail(e.target.value)
    };

    const handleInputChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleInputFocus = () => {
        setIsFocused(true);
    };

    const handleInputBlur = () => {
        setIsFocused(false)
    }
    return(
        <section className="">
            <div className="w-full h-screen mx-auto relative">
                <div className="bg-custom absolute inset-0">
                    <form className="absolute w-full h-screen flex items-center justify-center flex-col text-white">
                        <div className="flex flex-col space-y-5 items-center justify-center">
                            <h2 className="text-3xl font-bold">Sign In</h2>
                            <div>
                            <label htmlFor="email"
                                    className={`absolute transition-all duration-200 pointer-events-none ${
                                        isFocused || email ? 'text-sm text-gray-500 top-0 ' : 'text-base text-gray-400'
                                      }`}
                            >
                                Email Or phone number
                                </label>

                            <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            autoComplete="email"
                            required
                            placeholder=" "
                            className=""
                            onChange={handleInputChangeEmail}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                            />
                            </div>



                            <div>
                            <label htmlFor="password"
                             className={`absolute transition-all duration-200 pointer-events-none ${
                                isFocused || password ? 'text-sm text-gray-500 top-3' : 'text-base text-gray-400'
                             }`}
                             >
                                Password
                                </label>
                            <input
                            type="password"
                            name="password"
                            id="email"
                            required
                            value={password}
                            placeholder=" "
                            className="text-black"
                            onChange={handleInputChangePassword}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                            />
                            </div>
                            
                            
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
                                New to Movie-Hub? <Link to="/" className="text-red-500 hover:text-underline" >Sign up Now</Link>.
                            </p>
                        </div>
                    </form>

                </div>
                
            </div>
        </section>
    )
}
export default SignIn;