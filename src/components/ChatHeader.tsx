import {
  EditLocationRounded,
  HelpRounded,
  Notifications,
  PeopleAltRounded,
  SearchRounded,
  SendRounded,
} from "@mui/icons-material"

import "./ChatHeader.css"
const ChatHeader = () => {
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          {/* <span className="chatHeader__hash">#</span>Test Channel */}
          <span className="chatHeader__hash">#</span>Frontend Channel
        </h3>
      </div>
      <div className="chatHeader__right">
        <Notifications />
        <EditLocationRounded />
        <PeopleAltRounded />
        <div className="chatHeader__search">
          <input placeholder="search" />
          <SearchRounded />
        </div>
        <SendRounded />
        <HelpRounded />
      </div>
    </div>
  )
}

export default ChatHeader
