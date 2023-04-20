import React from "react";
import { Link } from "react-router-dom";


const Hero = () => {
    return(
        <div className="w-full h-screen mx-auto">
        <div className="bg-custom inset-0 relative">
        <div className=" absolute w-full h-screen text-white space-y-5 flex flex-col justify-center items-center ">
          <h2 className="text-5xl font-bold ">Unlimited movies, TV shows, and more.</h2>
          <p className="text-2xl font-semibold">Watch anywhere. Cancel anytime.</p>
          <p className="text-xl font-semibold ">Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="gap-2 flex items-center justify-center mt-2">
            <input 
            name="email"
           type="email"
           placeholder="Email address"
           required
           autoComplete="email"
           id="email"
           className="text-white px-2 py-4 bg-black opacity-50 border "
           />
            
         <Link to='/login'>
         <button 
           className="text-xl p-4 bg-[#ff0000] font-semibold my-2 hover:bg-red-900 duration tr">
            Get Started &gt;</button>
            </Link>
         
         
          </div>
          </div>
        </div>
      </div>

    )
    
}
export default Hero;