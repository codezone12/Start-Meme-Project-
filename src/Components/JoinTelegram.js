import React from 'react'
import { Link } from "react-router-dom";

const JoinTelegram = () => {
    return (
        <div>

            <div className="bg-[#1D1D1D] border-indigo-500 text-[#003b5c]   relative font-['Roboto'] ">
                <div className='py-5'>
                    <div className="pt-24 text-5xl text-white "> </div>
                    <div className="w-full mt-8  flex justify-center items-center">


                    </div>
                    <div className="my-8 text-3xl  leading-7 bg-[#2563EB]  border-2 border-white mx-8 text-black rounded-lg py-10">
                        <div className=" text-5xl font-semibold text-white hover:text-black  hover:scale-105 duration-[700ms]  font-['serif']">Free Crypto Signals Channel </div>

                        <div className='mt-8   gap-5 text-3xl font-semibold flex justify-center items-center '>
                            <p className="hover:text-white  hover:scale-105 duration-[700ms]">More than 50k members</p>
                            <p className="hover:text-white  hover:scale-105 duration-[700ms]">• Technical analysis</p>
                            <p className="hover:text-white  hover:scale-105 duration-[700ms]">• Up to 3 free signals weekly</p>
                            <p className="hover:text-white  hover:scale-105 duration-[700ms]">• Educational content</p>
                        </div>

                        <Link to="">
                            <button className="mt-10 px-5 py-3 text-lg font-semibold rounded-lg  border-white-2px overflow-hidden relative group cursor-pointer bg-[#58274f]  hover:scale-105 duration-[700ms]">
                                <span className="absolute w-64 h-0 transition-all duration-[700ms] origin-center rotate-45 -translate-x-16 bg-[#9e478e] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                <span className="relative text-white transition duration-[700ms] group-hover:text-white ease">
                                    Join Telegram
                                </span>
                            </button>
                        </Link>

                    </div>


                </div></div>
        </div >
    )
}

export default JoinTelegram