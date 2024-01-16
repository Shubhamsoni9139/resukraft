import React, { useState } from 'react';
import { Logo } from '../../assets';

import Footer from '../../containers/Footer';

const HeaderHomeScreen = () => {
    const [expanded, setExpanded] = useState(false);
  return (

    <div><header className="py-4 bg-black sm:py-6">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <div className="shrink-0">
        <img src={Logo} className="w-12 h-auto object-contain " alt=''/>
        </div>

        <div className="flex md:hidden">
          <button
            type="button"
            className="text-white"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
          >
            <span style={{ display: !expanded ? 'inline' : 'none' }} aria-hidden="true">
              <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </span>

            <span style={{ display: expanded ? 'inline' : 'none' }} aria-hidden="true">
              <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </button>
        </div>

        <nav className="hidden md:flex md:items-center md:justify-end md:space-x-12">
          <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Home </a>
          <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Kraft resume </a>
          <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Pricing </a>
          <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Sign in </a>
        </nav>
      </div>

      <nav style={{ display: expanded ? 'block' : 'none' }}>
        <div className="flex flex-col pt-8 pb-4 space-y-6">
          <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Home </a>
          <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Kraft resume </a>
          <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Pricing </a>
          <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Sign in </a>
        </div>
      </nav>
    </div>
  </header></div>
  )
}

export default HeaderHomeScreen
