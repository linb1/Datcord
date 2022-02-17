import React from "react";
import Chat from "../messages/chat";

class Dm extends React.Component {

    componentDidMount(){
        this.props.resetUserState(this.props.currentUserId)
        // this.props.requestDm(this.props.dmId)
    }

    render() {
        const name = () => {
            if (!this.props.currentDm) {
                return ""
            } else {
                return this.props.currentDm.friend.username
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