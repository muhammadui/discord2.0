import ChatHeader from "./ChatHeader"

import "./Chat.css"
import {
  AddCircle,
  CardGiftcard,
  EmojiEmotions,
  Gif,
} from "@mui/icons-material"
import Message from "./Message"
const Chat = () => {
  return (
    <section className="chat__section  ">
      <ChatHeader />
      <div className="chat__messages">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <div className="chat__input">
        <AddCircle />
        <form action="">
          <input type="text" placeholder={`Message Test Channel`} />
          <button className="chat__inputButton" type="submit">
            Send Message
          </button>
        </form>
        <div className="chat__inputIcons">
          <CardGiftcard fontSize="large" />
          <Gif fontSize="large" />
          <EmojiEmotions fontSize="large" />
        </div>
      </div>
    </section>
  )
}

export default Chat
