
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB2ZjRQCddzIgDORyJASbG9x1WoOao8Rdw",
  authDomain: "chat-app-24e57.firebaseapp.com",
  projectId: "chat-app-24e57",
  storageBucket: "chat-app-24e57.firebasestorage.app",
  messagingSenderId: "103301429223",
  appId: "1:103301429223:web:162d876f442617e63c6f42",
  measurementId: "G-T1QJ4LP7WS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username,email,password) => {
  try{
    const res = await createUserWithEmailAndPassword(auth,email,password);
    const user = res.user;
    await setDoc(doc(db,"users",user.uid),{
      id:user.uid,
      username:username.toLowerCase(),
      email,
      name:"",
      avatar:"",
      bio:"Hey,there i am using chat app",
      lastSeen:Date.now()
    })
    await setDoc(doc(db,"chats",user.uid),{
      chatData:[]
    })
  } catch (error) {
      console.error(error)
      toast.error(error.code.split('/')[1].split('-').join(" "))
  }
}

const login = async(email,password) => {
    try{
      await signInWithEmailAndPassword(auth,email,password)
    }catch(error) {
      console.error(error);
      toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = async () => {
  try {
      await signOut(auth)
  } catch (error) {
      console.error(error);
      toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

export {signup,login,logout,auth,db}