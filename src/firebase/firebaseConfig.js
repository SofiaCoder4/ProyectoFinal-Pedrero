import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBD4XeJqCgW8HKm5J16eUAMC1z73UYu1_g",
  authDomain: "ecommerce-coder-6932c.firebaseapp.com",
  projectId: "ecommerce-coder-6932c",
  storageBucket: "ecommerce-coder-6932c.appspot.com",
  messagingSenderId: "346527194644",
  appId: "1:346527194644:web:9d9f7446e6147996b75101"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
