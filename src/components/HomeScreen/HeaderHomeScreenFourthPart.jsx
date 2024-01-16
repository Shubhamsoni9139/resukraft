import React, { useState } from 'react';
import { Logo } from '../../assets';
import HeroSectionWriteup from './HeroSectionWriteup';

import Footer from '../../containers/Footer';

const HeaderHomeScreenFourthPart = () => {

  return (

    <div>
      <section class="py-12 bg-black sm:py-16 lg:py-20">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="mt-6 text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-white">Make every step user-centrics Inspiration </span>
              </h1>

        <div class="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
            <div class="md:p-8 lg:p-14">
               
                <svg class="mx-auto" width="46" height="46" viewBox="0 0 46 46"  text-gray-800 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 19">
    <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z"/>
    <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z"/>
  </svg>
                <h3 class="mt-12 text-xl font-bold text-white font-pj">User-Friendly Interface
</h3>
                <p class="mt-5 text-base text-white font-pj">Ensure a clean and intuitive design with a user-friendly interface. Users should easily navigate through the resume-building process without confusion.</p>
            </div>

            <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200">
                <svg class="mx-auto" width="46" height="46" viewBox="0 0 46 46"  text-gray-800 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 19">
             
                
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.708 2.292.706-.706A2 2 0 0 1 9.828 1h6.239A.97.97 0 0 1 17 2v12a.97.97 0 0 1-.933 1H15M6 5v4a1 1 0 0 1-1 1H1m11-4v12a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V9.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 5h5.239A.97.97 0 0 1 12 6Z"/>
  </svg>
                <h3 class="mt-12 text-xl font-bold text-white font-pj">Templates</h3>
                <p class="mt-5 text-base text-white font-pj">Provide a variety of professionally designed resume templates. Users should be able to choose a template that suits their industry or personal style.</p>
            </div>

            <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200">
            <svg class="mx-auto" width="46" height="46" viewBox="0 0 46 46"  text-gray-800 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 19">
    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
  </svg>
                <h3 class="mt-12 text-xl font-bold text-white font-pj">Real-Time Preview</h3>
                <p class="mt-5 text-base text-white font-pj">
                Incorporate a feature for real-time preview, enabling users to visualize their resume changes instantly.</p>
            </div>

            <div class="md:p-8 lg:p-14 md:border-t md:border-gray-200">
                <svg class="mx-auto" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.66667 25H6C3.23858 25 1 27.2386 1 30V37C1 39.7614 3.23858 42 6 42H36C38.7614 42 41 39.7614 41 37V30C41 27.2386 38.7614 25 36 25H31.8333C30.2685 25 29 26.2685 29 27.8333C29 29.3981 27.7315 30.6667 26.1667 30.6667H15.3333C13.7685 30.6667 12.5 29.3981 12.5 27.8333C12.5 26.2685 11.2315 25 9.66667 25Z"
                        fill="#D4D4D8"
                    />
                    <path d="M9 9H33" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9 17H33" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1 25H13V31H29V25H41" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M37 1H5C2.79086 1 1 2.79086 1 5V37C1 39.2091 2.79086 41 5 41H37C39.2091 41 41 39.2091 41 37V5C41 2.79086 39.2091 1 37 1Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h3 class="mt-12 text-xl font-bold text-white font-pj">Customization</h3>
                <p class="mt-5 text-base text-white font-pj">Enable users to customize resumes with flexibility in font styles, colors, layout, and the addition of custom sections or fields for highlighting unique skills.</p>
            </div>

            <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
                <svg class="mx-auto" width="46" height="42" viewBox="0 0 46 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M30.562 18.4609C30.0511 17.9392 29.4292 17.5392 28.7426 17.2907C28.0559 17.0422 27.3221 16.9516 26.5956 17.0256C25.8692 17.0996 25.1687 17.3362 24.5462 17.718C23.9237 18.0998 23.3952 18.6169 23 19.2309C22.6049 18.6167 22.0764 18.0995 21.4539 17.7176C20.8315 17.3357 20.1309 17.099 19.4044 17.025C18.6779 16.951 17.944 17.0417 17.2573 17.2903C16.5706 17.5389 15.9488 17.939 15.438 18.4609C14.5163 19.4035 14.0002 20.6695 14.0002 21.9879C14.0002 23.3063 14.5163 24.5722 15.438 25.5149L23 33.1999L30.564 25.5159C31.485 24.5726 32.0004 23.3064 32 21.988C31.9997 20.6696 31.4835 19.4037 30.562 18.4609Z"
                        fill="#D4D4D8"
                        stroke="white"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M41 41H5C3.93913 41 2.92172 40.5786 2.17157 39.8284C1.42143 39.0783 1 38.0609 1 37V1H17L22 9H45V37C45 38.0609 44.5786 39.0783 43.8284 39.8284C43.0783 40.5786 42.0609 41 41 41Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                <h3 class="mt-12 text-xl font-bold text-white font-pj">Quality</h3>
                <p class="mt-5 text-base text-white font-pj">Integrate an AI-driven tool that analyzes job descriptions and optimizes resume content with relevant keywords, enhancing visibility and alignment with employer requirements.</p>
            </div>

            <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
            <svg class="mx-auto" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 7C34.941 7 43 15.059 43 25C43 34.941 34.941 43 25 43C15.059 43 7 34.941 7 25" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M19 1C9.059 1 1 9.059 1 19H19V1Z" fill="white" stroke="" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
</svg>

                <h3 class="mt-12 text-xl font-bold text-white font-pj">Result</h3>
                <p class="mt-5 text-base text-white font-pj">Provide a real-time preview of the resume, highlighting potential formatting issues and suggesting improvements to ensure a polished and professional final result.</p>
            </div>
        </div>
    </div>
</section>
      </div>
  )
}

export default HeaderHomeScreenFourthPart