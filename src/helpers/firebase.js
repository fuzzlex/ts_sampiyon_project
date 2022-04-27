import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAT0__og-mVTVm76i7K_GesWZZx0x6Khi8",
    authDomain: "tsts-81858.firebaseapp.com",
    databaseURL: "https://tsts-81858-default-rtdb.firebaseio.com",
    projectId: "tsts-81858",
    storageBucket: "tsts-81858.appspot.com",
    messagingSenderId: "786775096103",
    appId: "1:786775096103:web:a5a8206e22627a43650702"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export default app 
