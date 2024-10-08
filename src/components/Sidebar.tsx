import AddIcon from "@mui/icons-material/Add"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import "./Sidebar.css"
import SidebarChannel from "./SidebarChannel"
import CallIcon from "@mui/icons-material/Call"
import { Avatar } from "@mui/material"
import { Headset, Mic, Settings } from "@mui/icons-material"

const Sidebar = () => {
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar__top">
          <h3>Discord2.0</h3>
          <ExpandMoreIcon />
        </div>

        <div className="sidebar__channels">
          <div className="sidebar__channelsHeader">
            <div className="sidebar__header">
              <ExpandMoreIcon />
              <h4>Text Channels</h4>
            </div>
            <AddIcon className="sidebar__addChannel" />
          </div>
          <div className="sidebar__channelsList">
            <SidebarChannel id="4" channelName="Frontend" />
            <SidebarChannel id="4" channelName="Backend" />
            <SidebarChannel id="4" channelName="UI / UX" />
            <SidebarChannel id="4" channelName="Product Design" />
            {/* <SidebarChannel id={"4"} channel={"Youtube"} />
            <SidebarChannel id={"4"} channel={"Youtube"} />
            <SidebarChannel id={"4"} channel={"Youtube"} />
            <SidebarChannel id={"4"} channel={"Youtube"} /> */}
          </div>
        </div>

        <div className="sidebar__voice">
          <SignalCellularAltIcon
            className="sidebar__voiceIcon"
            fontSize="large"
          />
          <div className="sidebar__voiceInfo">
            <h3>Voice Connected</h3>
            <p>stream</p>
          </div>
          <div className="sidebar__voiceIcons">
            <InfoOutlinedIcon />
            <CallIcon />
          </div>
        </div>
        {/* Okay to above */}
        <div className="sidebar__profile">
          <Avatar src="https://github.com/shadcn.png" />
          <div className="sidebar__profileInfo">
            <h3>Muhammad UI</h3>
            <p>#muhammadui</p>
          </div>
          <div className="sidebar__profileIcons">
            <Mic />
            <Headset />
            <Settings />
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
