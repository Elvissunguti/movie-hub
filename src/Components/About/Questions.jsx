import React, { useState } from "react";
import { data } from "./AboutData";

const Questions = () => {

    const [openIndex, setOpenIndex] = useState(-1);

    const handlePanelClick = (index) => {
      setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };


    return(
        <section className="bg-[#000000] border-b-8 border-gray-500 border-solid">
            <div className="max-w-4xl xl:max-w-6xl mx-auto mt-8 ">
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
                    <div className="gap-2 flex items-center justify-center mt-2 ">
            <div>
            <input 
            name="email"
           type="email"
           placeholder="Email address"
           required
           autoComplete="email"
           id="email"
           className="text-white  px-2 py-4 bg-black opacity-50 border border-green-400 "
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