import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./setup";
import { setLoginCookies } from "../utils/loginCookies";


async function signIn (email, password){
    const result = await new Promise((resolve, reject) => {
        resolve(signInWithEmailAndPassword(auth, email,password)
            .then((userCredential) => {

                //returns user uid - but can return anything needed
                const user = userCredential.user.uid;
                
                return(auth.currentUser);
            })
            .catch((error) => {
                return "INVALID CREDENTIALS";
            }))
    })
    setLoginCookies(result)
    
    //returns true if authenticated and false if not authenticated
    return (result!=="INVALID CREDENTIALS")
    
}


export {signIn};