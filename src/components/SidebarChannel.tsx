import "./SidebarChannel.css"

type props = {
  id: String
  channel: String
}

const SidebarChannel = ({ id, channel }) => {
  return (
    <div className="sidebarChannel">
      <h4>
        <span className="sidebarChannel__hash">#</span>Youtube
      </h4>
    </div>
  )
}

export default SidebarChannel
