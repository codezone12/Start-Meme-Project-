import React, { useState } from 'react';
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {

    return (
        <>
            <nav className="w-screen bg-[#1D212F]   h-[75px] mt-[.3px] m z-50  flex items-center px-5 font-semibold  justify-between fixed">
                <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div class="relative flex h-16 items-center justify-between">
                        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span class="absolute -inset-0.5"></span>
                                <span class="sr-only">Open main menu</span>

                                <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div class="flex flex-shrink-0 items-center">
                                <Link to="/">
                                    <img class="h-8 w-auto" src="img/meme.png" alt="Your Company" />
                                </Link>

                            </div>
                            <div class="hidden sm:ml-6 sm:block">
                                <div class="flex space-x-3 ">
                                    <Link to="/" class="text-gray-300 hover:bg-gray-700 text-lg rounded-md px-3 py-2  font-medium hover:scale-105 duration-[700ms] hover:text-green-500" aria-current="page">MEME Coin</Link>
                                    <Link to="/" class="text-gray-300 hover:bg-gray-700 text-lg rounded-md px-3 py-2  font-medium hover:scale-105 duration-[700ms] hover:text-green-500" >Tokenomics</Link>

                                    <Link to="https://twitter.com/?lang=en" class="text-gray-300 hover:bg-gray-700 text-lg rounded-md px-3 py-2  font-medium hover:scale-105 duration-[700ms] hover:text-green-500">Twitter</Link>
                                    <Link to="https://telegram.org/" class="text-gray-300 hover:bg-gray-700 text-lg rounded-md px-3 py-2  font-medium hover:scale-105 duration-[700ms] hover:text-green-500">Telegram</Link>
                                    <Link to="/" class="text-gray-300 hover:bg-gray-700 text-lg rounded-md px-3 py-2  font-medium hover:scale-105 duration-[700ms] hover:text-green-500">Leaderboard</Link>
                                    <Link to="https://info.dextools.io/" class="text-gray-300 hover:bg-gray-700 text-lg rounded-md px-3 py-2  font-medium hover:scale-105 duration-[700ms] hover:text-green-500">Live Chart</Link>
                                    <Link to="https://uniswap.org/" class="text-gray-300 hover:bg-gray-700 text-lg rounded-md px-3 py-2 font-medium hover:scale-105 duration-[700ms] hover:text-green-500">Buy Token</Link>


                                </div>
                            </div>
                        </div>
                        <div className="flex ml-8 space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10">
                            <Link to="game" >
                                <Button
                                    style={{ background: "black" }}
                                    className="rounded-xl px-4 py-1 overflow-hidden relative group cursor-pointer border-2 font-medium text-[16px] border-white text-black hover:scale-105 duration-[900ms] hover:border-[#003942] hover:text-[white]"
                                >
                                    <span className="absolute w-72 h-0 transition-all duration-[900ms] origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                    <span className="relative text-xl text-white transition duration-[900ms] group-hover:text-black ease">Start Game</span>
                                </Button>
                            </Link>
                            <Button
                                style={{ background: "black" }}
                                className="rounded-xl px-4 py-1 overflow-hidden relative group cursor-pointer border-2 font-medium text-[16px] border-white text-black hover:scale-105 duration-[900ms] hover:border-[#003942] hover:text-[white]"
                            >
                                <span className="absolute w-72 h-0 transition-all duration-[900ms] origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                <span className="relative text-xl text-white transition duration-[900ms] group-hover:text-black ease">Buy Now</span>
                            </Button>
                        </div>


                    </div>
                </div>

                <div class="sm:hidden" id="mobile-menu">

                </div>
            </nav >

        </>

    )
}

export default Navbar;
