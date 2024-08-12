import { useDispatch, useSelector } from "react-redux"
import "./App.css"
import Chat from "./components/Chat"
import Sidebar from "./components/Sidebar"
import { login, logout, selectUser } from "./features/userSlice"
import Login from "./components/Login"
import { useEffect } from "react"
import { auth } from "./utils/firebase"

const App = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("user is", authUser)
      if (authUser) {
        // the user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          }),
        )
      } else {
        // the user is logged out
        dispatch(logout())
      }
    })
  }, [dispatch])
  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  )
}

export default App

// Stopped at 38:00
