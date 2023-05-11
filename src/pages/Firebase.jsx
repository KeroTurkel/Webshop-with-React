// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcEOStzXu6n2PPdPcLl2qUlvmox0XWyCs",
  authDomain: "webapplication-lerna.firebaseapp.com",
  projectId: "webapplication-lerna",
  storageBucket: "webapplication-lerna.appspot.com",
  messagingSenderId: "824635447931",
  appId: "1:824635447931:web:53a1e7cf090b556aa520de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
export const auth = getAuth(app);