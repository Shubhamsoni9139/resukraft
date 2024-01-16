import React, { useState } from 'react';
import { Logo } from '../../assets';
import HeroSectionWriteup from './HeroSectionWriteup';

import Footer from '../../containers/Footer';

const HeaderHomeScreenSecondPart = () => {

  return (

    <div>
      <section className=" bg-black sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative">
            <div className="lg:w-2/3">
              <p className="text-sm font-normal tracking-widest text-gray-300 uppercase"><HeroSectionWriteup/></p>
              <h1 className="mt-6 text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Unlimited Design</span> Inspiration
              </h1>
              <p className="max-w-lg mt-4 text-xl font-normal text-gray-400 sm:mt-8">
              Welcome to resukraft  your gateway to standout resumes! Whether you're a seasoned pro or a recent grad, our intuitive builder caters to your career needs. Kraft your masterpiece today! 🌐


              </p>
              <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                <a href="#" title="" className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full" role="button">
                 Explore Now <p className='text-xl'>🚀</p>
                </a>
              </div>

              <div>
              <div className="inline-flex items-center pt-6 mt-8 border-t border-gray-800 sm:pt-10 sm:mt-14">
              <img src={"https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/1/3d-illustration.png"} className="w-12 h-auto object-contain " alt=''/>

  <span className="ml-2 text-base font-normal text-white">42 new design inspirations were added last week</span>
</div>

              </div>
            </div>

            <div className="mt-8 md:absolute md:mt-0 md:top-32 lg:top-0 md:right-0">
              <img className="w-full max-w-xs mx-auto lg:max-w-lg xl:max-w-xl " src="http://res.cloudinary.com/dt8emxboh/image/upload/v1705309984/qnjsnza3xqkvtzdupygj.png" alt="" />
            </div>
          </div>
        </div>
      </section></div>
  )
}

export default HeaderHomeScreenSecondPart