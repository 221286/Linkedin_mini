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

export const Sign_up_auth = async (email,password)=>{
    if (password.length > 6){
    try{
        const check = await createUserWithEmailAndPassword(auth,email,password);
       toast.success("Your account has been created!!!")
       return check;
    } catch (err){
        toast.error("Error in createing the account!! Try again")
        return err;


    }
}else{toast.error("Password is short");}
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