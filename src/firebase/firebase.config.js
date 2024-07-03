import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAl43nEDW2CCekxB9ULatlBUq-oFKwz05U",
  authDomain: "hotel-relax-9facb.firebaseapp.com",
  projectId: "hotel-relax-9facb",
  storageBucket: "hotel-relax-9facb.appspot.com",
  messagingSenderId: "24431307758",
  appId: "1:24431307758:web:a65a0586b35e3949c03cff",
  measurementId: "G-QV7W9N1LWV",
};

//Initialize firebase
const app = initializeApp(firebaseConfig);
export default app;
