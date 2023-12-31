//import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
//import { auth } from '../firebaseConfig';
import { Google_Authentication, Loging} from '../utils/Authenticarions';
import {  LOGO_ } from '../utils/Constants';
import { Link } from 'react-router-dom';
import GoogleButton from 'react-google-button'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner';


const Login = () => {
  const [page_load,getpage_load] = useState(false) ;
  const navigate = useNavigate();
  const [email,getemail] = useState("");
  const [password,getpassword] = useState("")
  const Main_SignIn = (e) =>{
    e.preventDefault();
    const Sign_in= Loging(email,password);
    console.log(Sign_in)
  }

  const googleSignIn = () =>{
    const response = Google_Authentication();
    
    }

    useEffect(()=>{
        onAuthStateChanged(auth,(res)=>{
          if(res?.accessToken){
                  navigate("/body/Home")
          } else {
             getpage_load(true);
          }
        })
    },[])
  return  !page_load ? (<div><Spinner></Spinner></div>) : (<div className='h-[100vh] bg-slate-100'>
    <div className='flex justify-between'>
      <Link to="/">
      <img src={LOGO_} className='w-16 p-2' alt="logo"/>
      </Link>
    
    <Link to="/SignUp">
    <button className={`p-2 px-4 m-3 rounded-3xl border border-blue-500 border-1  hover:bg-blue-100`}>Sign Up</button>
    </Link>

    </div>
    
    <div className='flex justify-center items-center h-2/3  '>
      <div className='w-1/4 '>
           
      <h1 className='font-bold text-4xl font-serif'>Sign In</h1>
      <p className='text-slate-400'>Stay updated on your professional world</p>
      <div className='mt-6'>
        <form onSubmit={Main_SignIn}>

      <input type='text' className='block border border-slate-700 w-full p-1 my-4 mr-1 rounded-sm' 
      value={email} onChange={e=>getemail(e.target.value)} placeholder='email or phone'/>
      <input type='password' onChange={e=>getpassword(e.target.value)} value={password}
      className='block border border-slate-700 w-full p-1 my-2 mr-1 rounded-sm' placeholder='password'/>
      <button className='block w-full bg-blue-500 p-1 mt-3 rounded-2xl' type='submit'>Sign In</button>

        </form>
        <div className="inline-flex items-center justify-center mt-6 mb-3 w-full">
    <hr className="w-full h-px my-8 bg-gray-500 border-0 dark:bg-gray-700 " />
    <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-slate-100 left-1/2  ">or</span>
</div>

<div className='w-full flex flex-col items-center justify-center'>
<GoogleButton className='rounded-2xl' size ="large" shape="pill"
  onClick={ googleSignIn}
/>

 <Link to="/SignUp"><button className='block  bg-blue-500 py-3 px-5 my-3 '>New to LinkedIn ? Join Now</button>
  </Link>  
</div>


                

      </div>
      </div>
      

    </div>


  </div>
      )
}

export default Login
