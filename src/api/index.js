import { auth,db } from "../config/firebase.config"
import { doc,onSnapshot, setDoc } from "firebase/firestore"
export const getUserDetail = () =>{
    return new Promise((resolve, reject) =>{
        const unsubscribe = auth.onAuthStateChanged((userCred) => {
            if(userCred){
                const userData = userCred.providerData[0]
                const unsubscribe =onSnapshot(doc(db, "users", userData?.uid), (_doc) =>{
                    if(_doc.exists()){
                        resolve(_doc.data())
                    }else{
                        setDoc(doc(db, "users", userData?.uid),userData).then(()=>{
                            resolve(userData);
                        });
                    }
                     
                });
                return unsubscribe;
            }else{
                reject(new Error("user is not authenticated"))
            }
            

            //make sure to unsubscribe to the listner
            unsubscribe();
        });
    });
};