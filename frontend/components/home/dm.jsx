import React from "react";
import Chat from "../messages/chat";

class Dm extends React.Component {

    componentDidMount(){
        this.props.resetUserState(this.props.currentUserId)
        // this.props.requestDm(this.props.dmId)
    }
    render() {
        // debugger
        const name = () => {
            if (!this.props.currentDm) {
                return ""
            } else {
                const otherMembers = Object.values(this.props.currentDm.members).filter(member => member.id !== this.props.currentUserId).map(member => member.username)
                // otherMembers
                // debugger
                return otherMembers
            }
        }
        return (
            <div className="dm-container">
                <div className="dm-header-container">
                    <div className="dm-header">
                        <div className="dm-title">
                            <img src={window.group} width="20" height="20" />
                            <span>{name()}</span>
                        </div>
                    </div>
                </div>
                <div className="dm-content">
                    <div className="message-container type-dm">
                        <Chat type="dm"/> 
                    </div>
                </div>
            </div>
        )
    }

}

export default Dm;