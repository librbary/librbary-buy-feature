import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA88_YMgi3O0hSMntZAuRnBraxVj2EE_fw",
    authDomain: "librbary-app.firebaseapp.com",
    databaseURL: "https://librbary-app-default-rtdb.firebaseio.com",
    projectId: "librbary-app",
    storageBucket: "librbary-app.appspot.com",
    messagingSenderId: "212031870084",
    appId: "1:212031870084:web:40cfb11dd82ace3a3c1ed1"
  };
  

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };