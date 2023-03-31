import { auth } from "../../config/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import { setLoginSession } from '../../lib/auth'

export default async function login(req, res) {
    try {
  
        signInWithEmailAndPassword(auth, req.body.email, req.body.password)
        .then( async (response)=>{
            if(response){
                const { uid, email, accessToken } = response.user;
                
                await setLoginSession(res, {uid, email, accessToken});
                res.status(200).send(response.user);
            }
        })
        .catch(err=>{
            res.status(err.status || 500).end(err.message);
        })

    } catch (error) {
      res.status(error.status || 500).end(error.message);
    }
  }
  

