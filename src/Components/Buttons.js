import React from 'react'
import { Link } from 'react-router-dom'
const Buttons = () => {
    return (
        <div>

            <div className="bg-[#1D1D1D] border-indigo-500 text-[#003b5c]   relative font-['Roboto'] ">
                <div className='py-5'>
                    <div className="pt-24 text-5xl text-white "> </div>
                    <div className="w-full mt-8  flex justify-center items-center">


                    </div>
                    <div className='flex justify-center text-center'>

                        <div className="my-8 text-3xl  h-40  leading-7 bg-[#20D9AF] mx-10 text-black rounded-lg py-10">
                            <div className=" text-5xl font-semibold text-white  "> </div>
                            <div className='  gap-5  text-3xl  mx-2 flex justify-center items-center font-["Roboto"] hover:scale-105 duration-[700ms] hover:text-white '>

                                Top Performers Ranking

                            </div>
                            <a href="/">
                                <button className="mt-5 px-5 py-3 text-lg font-semibold rounded-lg  border-white-2px overflow-hidden relative group cursor-pointer bg-[#58274f]  hover:scale-105 duration-[700ms]">
                                    <span className="absolute w-64 h-0 transition-all duration-[700ms] origin-center rotate-45 -translate-x-16 bg-[#9e478e] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                    <span className="relative text-white transition duration-[700ms] group-hover:text- ease">
                                        Leaderboard
                                    </span>
                                </button>
                            </a>

                        </div> <div className="my-8 text-3xl w-100 h-40  leading-7  bg-[#20D9AF] mx-10 text-black rounded-lg py-10">
                            <div className=" text-5xl font-semibold text-white "> </div>
                            <div className=' gap-5 mx-2  text-3xl flex justify-center items-center hover:scale-105 duration-[700ms] hover:text-white '>

                                Dynamic Performance Display

                            </div>
                            <a href="https://info.dextools.io/">
                                <button className="mt-5 px-5 py-3 text-lg font-semibold rounded-lg  border-white-2px overflow-hidden relative group cursor-pointer bg-[#58274f]  hover:scale-105 duration-[700ms]">
                                    <span className="absolute w-64 h-0 transition-all duration-[700ms] origin-center rotate-45 -translate-x-16 bg-[#9e478e] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                    <span className="relative text-white transition duration-[700ms] group-hover:text-black ease">
                                        Live Chart
                                    </span>
                                </button>
                            </a>

                        </div>
                        <div className="my-8 text-3xl w-80 h-40  leading-7 bg-[#20D9AF] mx-10 text-black rounded-lg py-10">
                            <div className=" text-5xl font-semibold text-white "> </div>
                            <div className=' gap-5  text-3xl flex justify-center items-center hover:scale-105 duration-[700ms] hover:text-white '>


                                Purchase Token Now

                            </div>
                            <a href="https://uniswap.org/">
                                <button className="mt-5 px-5 py-3 text-lg font-semibold rounded-lg  border-white-2px overflow-hidden relative group cursor-pointer bg-[#58274f]  hover:scale-105 duration-[700ms]">
                                    <span className="absolute w-64 h-0 transition-all duration-[700ms] origin-center rotate-45 -translate-x-16 bg-[#9e478e] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                    <span className="relative text-white transition duration-[700ms] group-hover:text-black ease">
                                        Buy Token
                                    </span>
                                </button>
                            </a>

                        </div>
                    </div>


                </div></div>
        </div >
    )
}

export default Buttons