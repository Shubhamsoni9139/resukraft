import {getApp , getApps , initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import { getFirestore} from "firebase/firestore"
const firebaseConfig = {

  apiKey: "AIzaSyB7x6RuPM1IsyAttrtAtIQye1vdqAd72vA",

  authDomain: "resume-biulder.firebaseapp.com",

  projectId: "resume-biulder",

  storageBucket: "resume-biulder.appspot.com",

  messagingSenderId: "559139474544",

  appId: "1:559139474544:web:21ca7472dfd93d041d78b5"

};

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db =getFirestore(app);

  export { auth , db};

  