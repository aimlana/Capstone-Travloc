import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBwOsVikEtwcNX1F5BAhSGoDImuHIJA2jY",
  authDomain: "travloc1.firebaseapp.com",
  databaseURL: "https://travloc1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "travloc1",
  storageBucket: "travloc1.appspot.com",
  messagingSenderId: "661568787117",
  appId: "1:661568787117:web:902e66d4bd74165073ac24"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };
