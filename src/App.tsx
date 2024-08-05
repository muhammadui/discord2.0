import { useSelector } from "react-redux"
import "./App.css"
import Chat from "./components/Chat"
import Sidebar from "./components/Sidebar"
import { selectUser } from "./features/userSlice"

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
        <h2>Please Login</h2>
      )}
    </div>
  )
}

export default App

// Stopped at 38:00
