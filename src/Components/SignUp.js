import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FULL_LINKED_IN_LOGO } from '../utils/Constants'
import { Sign_up_auth } from '../utils/Authenticarions'
import GoogleButton from 'react-google-button'
import { Google_Authentication } from '../utils/Authenticarions'

const SignUp = () => {
    const [email,getemail]=useState("");
    const [password,getpassword]=useState("");
    const Main_SignUp =(e)=>{
        e.preventDefault();
        const resp = Sign_up_auth(email,password);

    }
    const googleSignIn = () =>{
        const response = Google_Authentication();
        
        }
  return (
    <div className='h-[100vh] bg-slate-100'>
        
    <div className='flex justify-between m-auto'>
      <Link to="/">
      <img src={FULL_LINKED_IN_LOGO} className='w-36 p-6' alt="logo"/>
      </Link>
    
    <Link to="/">
    <button className={`p-2 px-4 m-3 rounded-3xl border border-blue-500 border-1  hover:bg-blue-100`}>Sign In</button>
    </Link>

    </div>
    <div className='text-center text-4xl font-bold mt-16 mb-2'><p>Make the most of your proffesional life</p></div>
    <div className='flex justify-center items-center h-2/3   '>
      <div className='w-[30vw] h-full shadow-2xl bg-white'>
           
      
      <div className='px-3 py-4'>
        <form onSubmit={Main_SignUp}>

      <input type='text' className='block border border-slate-700 w-full p-1 my-4 mr-1 rounded-sm' 
      value={email} onChange={e=>getemail(e.target.value)} placeholder='email or phone'/>
      <input type='password' onChange={e=>getpassword(e.target.value)} value={password}
      className='block border border-slate-700 w-full p-1 my-2 mr-1 rounded-sm' placeholder='password'/>
      <button className='block w-full bg-blue-500 p-1 mt-3 rounded-2xl' type='submit'>Sign Up</button>

        </form>
        <div className="inline-flex items-center justify-center mt-6 mb-3 w-full">
    <hr className="w-full h-px my-8 bg-gray-500 border-0 dark:bg-gray-700 " />
    <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-slate-100 left-1/2  ">or</span>
</div>

<div className='w-full flex flex-col items-center justify-center'>
<GoogleButton className='rounded-2xl' size ="large" shape="pill"
  onClick={ googleSignIn}
/>

 <Link to="/"><button className='block  bg-blue-500 py-3 px-2 text-sm font-bold my-3 '>Already have an account? Sign in</button>
  </Link>  
</div>


                

      </div>
      </div>
      

    </div>


  </div>
  )
}

export default SignUp
