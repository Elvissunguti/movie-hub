import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {

    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const [ isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [ isFocusedPassword, setIsFocusedPassword] = useState(false);
    const [ error, setError ] = useState("");
    
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
    
        const userData = {
          email: email,
          password: password
        };
    
        try {
           
          const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
          });

        
    
          if (response.ok) {
            // Success! User signed up successfully
            // You can redirect the user or show a success message
            navigate("/browse page")
            console.log('User signed up successfully');
        
          } else {
            // Handle sign-up error
            // You can show an error message to the user
            console.error('Sign up failed');
            setError('Wrong email or password');
          }

        } catch (error) {
          // Handle any network or server errors
          console.error('Error:', error);
          
        }
      };

    const handleInputChangeEmail = (e) => {
        setEmail(e.target.value)
    };

    const handleInputChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleInputFocusEmail = () => {
        setIsFocusedEmail(true);
    };

    const handleInputFocusPassword = () => {
        setIsFocusedPassword(true);
    };

    const handleInputBlurEmail = () => {
        setIsFocusedEmail(false)
    }

    const handleInputBlurPassword = () => {
        setIsFocusedPassword(false)
    }
    return(
        <section className="">
            <div className="w-full h-screen mx-auto relative">
                <div className="bg-custom absolute inset-0">
                    <form onSubmit={handleLogin}
                    className="absolute w-full h-screen flex items-center justify-center flex-col ">
                        <div className="bg-black py-28 px-16 bg-opacity-70">
                        <div className="flex flex-col space-y-5 items-center justify-center">
                            <h2 className="text-white text-3xl font-bold">Sign In</h2>
                            <div className="relative ">
                            <label htmlFor="email"
                                    className={`absolute transition-all duration-200 pointer-events-none ${
                                        isFocusedEmail || email ? 'text-sm text-gray-500 top-0 ' : 'text-base text-gray-400 top-3'
                                      }`}
                            >
                                Email
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
                            id="password"
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
                        <div className='text-center text-red-500 md:text-lg'>
                            <p>{error}</p>
                        </div>
                            
                            <button type="Submit"
                             className="bg-red-800 text-white my-4 px-32 py-3 text-lg font-bold rounded-lg">
                               sign in 
                            </button>
                            
                        </div>
                        <div>
                            <p className="text-white">
                                New to Movie-Hub? <Link to="/" className="text-red-500 hover:text-underline" >Sign up Now</Link>.
                            </p>
                        </div>
                        </div>
                    </form>

                </div> 
            </div>
        </section>
    )
}
export default SignIn;