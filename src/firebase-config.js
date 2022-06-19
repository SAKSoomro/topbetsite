import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBRtf2C-nHOrylbJrT5XRqdajrQUTfMtWE",
  authDomain: "topbetauth.firebaseapp.com",
  projectId: "topbetauth",
  storageBucket: "topbetauth.appspot.com",
  messagingSenderId: "1049463850332",
  appId: "1:1049463850332:web:095b103c1f85390a096d99"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);