import React from "react";
import { Link } from "react-router-dom";
import { LockClosedIcon } from '@heroicons/react/20/solid'


const Login = () => {
    return(
        <>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-4 lg:px-8 ">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Login to your account</h2> 
                </div>
                <form>
                    <div>
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email Address</label>
                            <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            placeholder="Email address"
                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                             />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input 
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            placeholder="password"
                            className="relative block w-full apperance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus: outline-none focus:ring-indigo-500 sm:text-sm "
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <Link to="/forgotpassword" className="font-medium text-[#40AA54] hover:text-indigo-500">
                            Forgot your password?
                            </Link>
                        </div>
                    </div>
                    <div>
                       <p>display error</p>
                    </div>
                    <div>
                        <button
                        type="submit"
                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#40AA54] py-2 px-4 text-sm font-medium text-white hover:bg-[#40AA54]-700 focus:outline-none focus:ring-2 focus:ring-[#40AA54]-500 focus:ring-offset-2"
                        >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                               <LockClosedIcon className="h-5 w-5 text-[#40AA54]-500 group-hover:text-[#40AA54]-400" aria-hidden="true" /> 
                            </span>
                            <p>show loading or login</p>

                        </button>
                    </div>
                </form>
                <div>
                    <Link to="/register" >Don't have an account?<span className="text-[#40AA54] font-bold">Register</span></Link>
                    
                </div>
            </div>
        </div>
        </>
    )
}
export default Login;