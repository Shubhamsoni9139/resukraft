import React, { useState } from 'react';
import { Logo } from '../../assets';
import HeroSectionWriteup from './HeroSectionWriteup';

import Footer from '../../containers/Footer';

const HeaderHomeScreenThirdPart = () => {

  return (

    <div>
      <section class="py-12 bg-black sm:py-16 lg:py-20">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div className='flex flex-row'><div>
      <img class="object-cover w-40 h-60  " src="https://res.cloudinary.com/dt8emxboh/image/upload/v1705339795/vid_umdrng.gif" alt="" />

      </div>
    
        <div>
    <h1 className="mt-6 text-6xl font-normal text-white sm:mt-10 sm:text-7xl lg:text-8xl xl:text-10xl">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-white">Our Featured <p className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white'>Resumes</p> </span>
</h1></div></div>
      
            
    
        <div class="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
            <div class="relative group">
                <div class="overflow-hidden aspect-w-1 aspect-h-1">
                    <img class="object-cover w-full h-full " src="https://res.cloudinary.com/dt8emxboh/image/upload/v1705339474/f8qxuyhda18wc90u9faj.webp" alt="" />
                </div>
               

            </div>

            <div class="relative group">
                <div class="overflow-hidden aspect-w-1 aspect-h-1">
                    <img class="object-cover w-full h-full " src="https://res.cloudinary.com/dt8emxboh/image/upload/v1705323780/fgdt8vgyxqzwcbvzm2bb.png" alt="" />
                </div>
           
            </div>
            <div class="relative group">
                <div class="overflow-hidden aspect-w-1 aspect-h-1">
                    <img class="object-cover w-full h-full " src="https://res.cloudinary.com/dt8emxboh/image/upload/v1705338103/uol5fi0ivs31xgkdmiaz.webp" alt="" />
                </div>

            </div>

            

            <div class="relative group">
                <div class="overflow-hidden aspect-w-1 aspect-h-1">
                    <img class="object-cover w-full h-full " src="https://res.cloudinary.com/dt8emxboh/image/upload/v1705323729/qeydjzxu38ggwjqe84gm.png" alt="" />
                </div>

            </div>
        </div>
    </div>
</section></div>
  )
}

export default HeaderHomeScreenThirdPart