import React, { useState } from "react";
import { Link } from "react-router-dom";


const Hero = () => {

  const [email, setEmail] = useState('');
  const [ isFocused , setIsFocused]= useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

    return(
        <div className="w-full h-screen mx-auto relative">
        <div className="bg-custom inset-0 absolute">
        <div className=" absolute w-full h-screen text-white space-y-5 flex flex-col justify-center items-center ">
          <h2 className="font-bold text-4xl xl:text-6xl">Unlimited movies, TV shows, and more.</h2>
          <p className="text-2xl font-semibold">Watch anywhere. Cancel anytime.</p>
          <p className="text-xl font-semibold ">Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="gap-2 flex items-center justify-center mt-2 relative">
            <form>

          <label
        htmlFor="email"
        className={`absolute transition-all duration-200 pointer-events-none ${
          isFocused || email ? 'text-sm text-gray-500 top-3 ' : 'text-base text-gray-400'
        }`}
      >
        Email
      </label>
            <input 
            name="email"
           type="email"
           placeholder=" "
           required
           autoComplete="email"
           id="email"
           className="text-white px-16 py-4 bg-black opacity-50 border rounded-lg "
           value={email}
           onChange={handleInputChange}
           onFocus={handleInputFocus}
           onBlur={handleInputBlur}
           />
           </form>
            
         <Link to='/login'>
         <button 
           className="text-xl p-4 bg-[#ff0000] font-semibold my-2 hover:bg-red-900 duration tr">
            Get Started <span className="font-semibold text-xl">&gt;</span></button>
            </Link>
         
         
          </div>
          </div>
        </div>
      </div>

    )
    
}
export default Hero;