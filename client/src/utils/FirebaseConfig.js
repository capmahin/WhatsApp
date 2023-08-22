import { initializeApp } from "firebase/app"; 
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyB_nGkOVUa1b3o-oZXv60W9dWi40G_FIPY",
    authDomain: "whatsapp-clone-7f055.firebaseapp.com",
    projectId: "whatsapp-clone-7f055",
    storageBucket: "whatsapp-clone-7f055.appspot.com",
    messagingSenderId: "346678296811",
    appId: "1:346678296811:web:3918f25ed1f8848861beae",
    measurementId: "G-J2WT5PPH53"
  };

  const app = initializeApp(firebaseConfig);
  export const firebaseAuth = getAuth(app);