import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDzlLaeAes0oDhcF7GzghKY5446V_M_Mq8",
  authDomain: "student-management-syste-f3295.firebaseapp.com",
  projectId: "student-management-syste-f3295",
  storageBucket: "student-management-syste-f3295.appspot.com",
  messagingSenderId: "664163673059",
  appId: "1:664163673059:web:8b0891e04b988a72d9f6d6"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);