import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig ={
  apiKey: "AIzaSyCfhOsrOJHIeTBAuzEpdGaRkYTZCBWodxc",
  authDomain: "employee-login-786bc.firebaseapp.com",
  projectId: "employee-login-786bc",
  storageBucket: "employee-login-786bc.appspot.com",
  messagingSenderId: "313505402314",
  appId: "1:313505402314:web:6b60e59fede139cfafd333"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// const app = initializeApp(firebaseConfig);

// const auth = getAuth();

// export { app, auth };