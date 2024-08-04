import "./Message.css"

import { Avatar } from "@mui/material"

const Message = () => {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>
          muhammadui
          <span className="message__timestamp">This is a timestamp</span>
        </h4>
        <p>This is a message</p>
      </div>
    </div>
  )
}

export default Message
