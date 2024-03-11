import React from 'react'
import { Link } from "react-router-dom";

const Description = () => {
    return (
        <div>

            <div className="bg-[#1D1D1D] border-indigo-500 text-[#003b5c]   relative font-['Atalic'] ">

                <div className="pt-24 text-5xl text-white "><span className="text-green-500"></span> </div>
                <div className="w-full mt-8  flex justify-center items-center">


                </div>
                <div className="mt-8 text-xl  leading-7 bg-[#000000] border-white border-2  mx-20 text-white rounded-lg py-5">
                    <div className=" text-5xl text-white hover:scale-105 duration-[700ms] hover:text-green-500  ">Play and  <span className="text-green-500  hover:text-white   ">Earn?</span> </div>

                    <p className='mt-5 hover:scale-105  mx-8 duration-[700ms] hover:text-green-500'>Intelligent Signals is the brainchild of Andrew Anthony (founder), a professional trader with over 20 years in forex, stocks, and crypto. A former analytical scientist, senior manager, and entrepreneur, he soon developed a passion for technical analysis using GANN techniques. He developed a manual system for chart pattern recognition that provides an accuracy of 70% profitability per trade.</p>

                </div>


            </div>
        </div>
    )
}

export default Description