import { useSelector } from "react-redux"
import "./App.css"
import Chat from "./components/Chat"
import Sidebar from "./components/Sidebar"
import { selectUser } from "./features/userSlice"
import Login from "./components/Login"

const App = () => {
  const user = useSelector(selectUser)

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
