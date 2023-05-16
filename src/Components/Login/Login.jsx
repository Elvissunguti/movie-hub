import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const [ firstName, setFirstName] = useState("");
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const [ isFocusedFirstName, setIsFocusedFirstName ] = useState(false);
    const [ isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [ isFocusedPassword, setIsFocusedPassword] = useState(false);


    const handleInputChangeFirstName = (e) => {
        setFirstName(e.target.value)
    };

    const handleInputChangeEmail = (e) => {
        setEmail(e.target.value)
    };

    const handleInputChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleInputFocusFirstName = () => {
        setIsFocusedFirstName(true)
    };

    const handleInputFocusEmail = () => {
        setIsFocusedEmail(true);
    };

    const handleInputFocusPassword = () => {
        setIsFocusedPassword(true);
    };

    const handleInputBlurFirstName = () => {
        setIsFocusedFirstName(false)
    };

    const handleInputBlurEmail = () => {
        setIsFocusedEmail(false)
    };

    const handleInputBlurPassword = () => {
        setIsFocusedPassword(false)
    };

    return (
        <section className="">
        <div className="w-full h-screen mx-auto relative">
            <div className="bg-custom absolute inset-0">
                <form className="absolute w-full h-screen flex items-center justify-center flex-col ">
                    <div className="bg-black py-28 px-16 bg-opacity-70">
                    <div className="flex flex-col space-y-5 items-center justify-center">
                        <h2 className="text-white text-3xl font-bold">Sign Up</h2>
                        
                        <div className="relative">
                            <label htmlFor="firstName"
                            className={`absolute transition-all duration-200 pointer-events-none ${
                                isFocusedFirstName || firstName ? 'text-sm text-gray-500 top-0 ' : 'text-base text-gray-400 top-3'
                              }`}
                            >
                                First Name

                            </label>
                            <input 
                            type="firstName"
                            name="firstName"
                            id="firstName"
                            placeholder=" "
                            value={firstName}
                            required
                            className="px-16 py-3 text-black-500 rounded-lg focus:outline-none"
                            onChange={handleInputChangeFirstName}
                            onFocus={handleInputFocusFirstName}
                            onBlur={handleInputBlurFirstName}

                            />
                        </div>
                        <div className="relative ">
                        <label htmlFor="email"
                                className={`absolute transition-all duration-200 pointer-events-none ${
                                    isFocusedEmail || email ? 'text-sm text-gray-500 top-0 ' : 'text-base text-gray-400 top-3'
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
                        className="px-16 py-3 text-black-500 rounded-lg focus:outline-none"
                        onChange={handleInputChangeEmail}
                        onFocus={handleInputFocusEmail}
                        onBlur={handleInputBlurEmail}
                        />
                        </div>



                        <div className="relative">
                        <label htmlFor="password"
                         className={`absolute transition-all duration-200 pointer-events-none ${
                            isFocusedPassword || password ? 'text-sm text-gray-500 top-0' : 'text-base text-gray-400 top-3'
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
                        className="px-16 py-3 rounded-lg focus:outline-none"
                        onChange={handleInputChangePassword}
                        onFocus={handleInputFocusPassword}
                        onBlur={handleInputBlurPassword}
                        />
                        </div>
                        
                        
                    </div>
                    <div>
                        <Link to="/browse page">
                        <button className="bg-red-800 text-white my-4 px-32 py-3 text-lg font-bold rounded-lg">
                            Sign In
                        </button>
                        </Link>
                    </div>
                 
                    </div>
                </form>

            </div> 
        </div>
    </section>
    )
}
export default Login;