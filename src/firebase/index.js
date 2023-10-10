// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_JalHVu8ZqvK--uhbbpHrb7Kuxg72EqU",
  authDomain: "resource-cloud-test.firebaseapp.com",
  projectId: "resource-cloud-test",
  storageBucket: "resource-cloud-test.appspot.com",
  messagingSenderId: "605829383036",
  appId: "1:605829383036:web:4b1237e9ed2874e457daf9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
