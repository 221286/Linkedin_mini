import {GoogleAuthProvider,signInWithPopup,createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebaseConfig';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Loging = async(email,password)=>{
    try{
       const check =await signInWithEmailAndPassword(auth,email,password);
       toast.success("Signed in to LinkedIn!!");
       return check;
       
    } catch (err){
        toast.error("UnAuthorized Credentials");
        return err;


    }
    
}

export const Sign_up = (email,password)=>{
    try{
        const check = createUserWithEmailAndPassword(auth,email,password);
       
       return check;
    } catch (err){
        return err;


    }
    
}



export const Google_Authentication = ()=>{
    try{
       
       //Make an instance of google auth provider
       const create_instance = new GoogleAuthProvider();
       const res = signInWithPopup(auth,create_instance);
       return res;
    } catch (err){
        return err;


    }
    
}