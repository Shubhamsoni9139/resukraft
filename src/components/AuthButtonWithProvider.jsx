import React from 'react';
import { FaChevronRight } from 'react-icons/fa6';

const AuthButtonWithProvider = (props) => {
  const { Icon, label, provider } = props;

  
  const handleClick = async () =>{
    switch(provider){
      case "GoogleAuthProvider":
        console.log("inside thegoogle auth")
        break

      case "GitHubAuthProvider":
        console.log("inside the github auth")
        break
      default:
        console.log("inside the google")

    }

  }

  return (
    <div onClick={handleClick} className='w-full px-4 py-3 rounded-md border-2 border-blue-200 flex items-center justify-between cursor-pointer group hover:bg-blue-700 active:scale-95 duration-150 hover:shadow-md'>
      <Icon className="text-txtPrimary text-xl group-hover:text-white" />
      <p className='text-txtPrimary text-l group-hover:text-white'>{label}</p>
      <FaChevronRight className='text-txtPrimary text-base group-hover:text-white' />
    </div>
  );
};

export default AuthButtonWithProvider;
