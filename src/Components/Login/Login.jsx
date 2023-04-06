import React from "react";

const Login = () => {
    return(
        <>
        <div className="bg-black">
            <div>
                <div>
                    <h2>Login to your account</h2> 
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
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
export default Login;