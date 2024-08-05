import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCsrXsS2Bg8BbhqHZuHr2dwaFwDz715y2Y",
  authDomain: "flexcord-effd5.firebaseapp.com",
  projectId: "flexcord-effd5",
  storageBucket: "flexcord-effd5.appspot.com",
  messagingSenderId: "189317650412",
  appId: "1:189317650412:web:4a4b1cf671b7fbacc2d2c9",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }
export default db
