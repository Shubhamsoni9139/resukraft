import React, { useEffect } from 'react'
import { Footer } from '../containers'
import { AuthButtonWithProvider } from '../components'
import { FaGoogle , FaGithub} from "react-icons/fa6"
import HeaderHomeScreen from '../components/HomeScreen/HeaderHomeScreen'
import { toast } from 'react-toastify'
import useUser from "../hooks/useUser"
import { useNavigate } from 'react-router-dom'

const Authentication = () => {


    const {data, isLoading, isError} = useUser();

    const navigate = useNavigate();
    useEffect(() => {
        if(!isLoading && data){
            navigate("/resumes", {replace: true});
        }
    }, [isLoading, data])
  return (
    <div className='auth-section'>
        {/* top section*/}
        <HeaderHomeScreen/>
        <div className='w-full flex flex-1 flex-col items-center justify-center gap-6 '>
            <h1 className='text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500'>
                Welcome to ResuKraft
            </h1>
            <p className='text-base text-white-600'>
                Express way to Kraft your resume
            </p>
            <h2 className='text-2xl text-white-600'>
                Authenticate
            </h2>
            <div className='w-full lg:w-96 rounded-mdp-2 flex flex-col items-center justify-start gap-6'>
<AuthButtonWithProvider Icon={FaGoogle} label={"Signin with google"} provider={"GoogleAuthProvider"}/>
<AuthButtonWithProvider Icon={FaGithub} label={"Signin with github"} provider={"GitHubAuthProvider"}/>

            </div>
        </div>
 
        {/*footer section*/}
        <Footer/>


    </div>
  )
}

export default Authentication