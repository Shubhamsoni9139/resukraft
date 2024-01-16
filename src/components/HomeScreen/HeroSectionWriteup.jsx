import React, { useState } from "react";


import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from "react-animate-on-scroll";

function HeroSectionWriteup() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      
           
      <TypeAnimation
                cursor={false}
                sequence={[
                  () => setShowSubtitle(true)
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle &&
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    'Crafting Careers, One Click at a Time.',
                    1000,
                    'Elevate Your Profile, Ignite Your Career.',
                    'Your Resume, Your Future.',
                    1000,
                    'Your Journey Starts with a Great Resume.',
                    1000,
                    'Precision Resumes, Professional Impact.',
                    1000,
                    "Uhh...",
                    1000,
                    "Uhh... you can scroll down to see resumes now...",
                    300,
                    () => setShowScrollDown(true),
                    1000,
                    "Seriously, go check them out!",
                    1000,
                    "You're uh...",
                    1000,
                    "You're uh... still here?",
                    1000,
                    "See ya! :)",
                    500,
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              }
        

         
           
      

       
    
    </main>
  );
}

export default HeroSectionWriteup;