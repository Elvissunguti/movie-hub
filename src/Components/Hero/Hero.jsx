import React from "react";


const Hero = () => {
    return(
        <div className="w-full h-screen relative">
        <div className="absolute inset-0 bg-custom"></div>
        <div className="relative z-10 text-white flex flex-col items-center justify-center ">
          <h2 className="text-5xl font-bold ">Unlimited movies, TV shows, and more.</h2>
          <p className="text-2xl ">Watch anywhere. Cancel anytime.</p>
          <p className="text-xl">Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="gap-2 flex items-center justify-center ">
            <div>
            <input 
            name="email"
           type="email"
           placeholder="Email address"
           required
           autoComplete="email"
           id="email"
           className="text-white  px-2 py-4 bg-black opacity-50 border "
           />
            </div>
         <div>
         <button 
           className="text-xl p-4  bg-[#ff0000] font-semibold my-2">
            Get Started &gt;</button>
         </div>
         
          </div>
        </div>
      </div>

    )
    
}
export default Hero;