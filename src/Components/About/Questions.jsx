import React, { useState } from "react";
import { data } from "./AboutData";

const Questions = () => {

    const [openIndex, setOpenIndex] = useState(-1);
    const [ email , setEmail] = useState("");
    const [isFocused , setIsFocused ] = useState(false);

    const handlePanelClick = (index) => {
      setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };

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
        <section className="bg-[#000000] border-b-8 border-gray-500 border-solid">
            <div className="max-w-5xl xl:max-w-6xl mx-auto my-6 px-6 ">
                <div className="text-white  ">
                    <h2 className="text-5xl font-bold">
                        Frequently Asked Questions
                    </h2>
                    <div className="mt-8">
                       {data.map((panel, index) => (
                    <div className="panel" key={index}>
                    <div className={`panel-header ${openIndex === index ? 'open' : ''}`} onClick={() => handlePanelClick(index)}>
                    {panel.question}
                     </div>
                    <div className={`panel-body ${openIndex === index ? 'open' : ''}`}>
                    {panel.answer}
                    </div>
                    </div>
                      ))}

                        </div>
                </div>
                <div className="text-white py-8">
                    <p className="text-xl">Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className="gap-2 relative flex items-center justify-center mt-2 ">
            <div className="relative">
                <label htmlFor="email"
                  className={`absolute transition-all duration-200 pointer-events-none ${
                    isFocused || email ? 'text-sm text-gray-500 top-0' : 'text-base text-gray-400 top-4'
                  }`}
                  >
                    Email address
                </label>
            <input 
            name="email"
           type="email"
           value={email}
           placeholder=" "
           required
           autoComplete="email"
           id="email"
           onChange={handleInputChange}
           onFocus={handleInputFocus}
           onBlur={handleInputBlur}
           className="text-white px-8 py-4 bg-black opacity-50 border rounded-lg border-green-400 "
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
        </section>
    )
}
export default Questions;