import { Outlet, useNavigate } from "react-router-dom";
//import Header from "./Header";
import Header from "./Header";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import Spinner from "./Spinner";
//;

const Body = ()=>{
    const [loading,getloading] = useState(true);
    const navigate = useNavigate()
    useEffect(()=>{
            onAuthStateChanged(auth,(res)=>{
                if(!res?.accessToken){
                    navigate("/")
                }else {
                    getloading(false);
                }
            })
    },[])
    
    return loading ? (<Spinner></Spinner>):(<div className="h-[100vh] bg-slate-200">

        
        <Header></Header>    
           <Outlet/>
        
    
    
    </div>)
}


export default Body;