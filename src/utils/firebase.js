const firebaseConfig = {
  apiKey: "AIzaSyCsrXsS2Bg8BbhqHZuHr2dwaFwDz715y2Y",
  authDomain: "flexcord-effd5.firebaseapp.com",
  projectId: "flexcord-effd5",
  storageBucket: "flexcord-effd5.appspot.com",
  messagingSenderId: "189317650412",
  appId: "1:189317650412:web:4a4b1cf671b7fbacc2d2c9",
}

const firebaseApp = firebase.initializaApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }

export default db
