//import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
//import { auth } from '../firebaseConfig';
import { Loging, Sign_up } from '../utils/Authenticarions';
import { BG_COLOR, LOGO_ } from '../utils/Constants';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email,getemail] = useState("");
  const [password,getpassword] = useState("")
  const Main_SignUp = (e) =>{
    e.preventDefault();
    const Sign_in= Loging(email,password);
    console.log(Sign_in)
   
   
    /* try {
      const usercredentntial = createUserWithEmailAndPassword(auth,email,password);
      console.log(usercredentntial)
    } catch(err){
      console.error(err);
    }*/
  }
  return (<div className='h-[100vh] bg-slate-100'>
    <div className='flex justify-between'>
      <Link to="/">
      <img src={LOGO_} className='w-16 p-2' alt="logo"/>
      </Link>
    
    <Link to="/SignUp">
    <button className={`p-2 px-4 m-3 rounded-3xl border border-yellow-500 border-1  hover:bg-yellow-100`}>Sign Up</button>
    </Link>

    </div>
    
    <div className='flex justify-center items-center h-2/3  '>
      <div className='w-1/4 '>
           
      <h1 className='font-bold text-4xl font-serif'>Sign In</h1>
      <p className='text-slate-400'>Stay updated on your professional world</p>
      <div className='mt-6'>
        <form onSubmit={Main_SignUp}>

      <input type='text' className='block border border-slate-700 w-full p-1 my-4 mr-1 rounded-sm' 
      value={email} onChange={e=>getemail(e.target.value)} placeholder='email or phone'/>
      <input type='password' onChange={e=>getpassword(e.target.value)} value={password}
      className='block border border-slate-700 w-full p-1 my-2 mr-1 rounded-sm' placeholder='password'/>
      <button className='block w-full bg-yellow-500 p-1 mt-3 rounded-2xl' type='submit'>Sign In</button>

        </form>
        <div className="inline-flex items-center justify-center my-6 w-full">
    <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 " />
    <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-slate-100 left-1/2  ">or</span>
</div>
                

      </div>
      </div>
      

    </div>


  </div>
      )
}

export default Login
