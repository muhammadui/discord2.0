import React from "react"
import "./SidebarChannel.css"

interface SidebarChannelProps {
  id: string
  channelName: string
}

const SidebarChannel: React.FC<SidebarChannelProps> = ({ id, channelName }) => {
  return (
    <div className="sidebarChannel">
      <h4>
        <span className="sidebarChannel__hash">#</span>
        {channelName}
      </h4>
    </div>
  )
}
export default SidebarChannel
