import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebaseConfig';
export const Loging = async(email,password)=>{
    try{
       const check =await signInWithEmailAndPassword(auth,email,password);
       return check;
    } catch (err){
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