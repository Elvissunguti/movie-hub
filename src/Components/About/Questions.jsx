import React, { useState } from "react";
import { data } from "./AboutData";

const Questions = () => {

    const [openIndex, setOpenIndex] = useState(-1);

    const handlePanelClick = (index) => {
      setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };


    return(
        <section className="bg-[#000000]">
            <div className="max-w-4xl xl:max-w-6xl mx-auto ">
                <div className="text-white  ">
                    <h2 className="text-2xl font-bold">
                        Frequently Asked Questions
                    </h2>
                    <div>
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
            </div>
        </section>
    )
}
export default Questions;