import { Outlet } from "react-router-dom";
//import Header from "./Header";
import Header from "./Header";
//;

const Body = ()=>{
    
    return(<div className="h-[100vh] bg-slate-200">

        
        <Header></Header>    
           <Outlet/>
        
    
    
    </div>)
}


export default Body;