import React from "react";

class MemberIndex extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const members = this.props.members.map((member, idx) => {
            return <li key={idx}>
                    <img src={window.default_user_icon} width="32" height="32" />
                    <span>{member.username}</span>
                </li>
        })

        const memberLength = this.props.members.length;
        return (
            <div className="member-list-container">
                <div className="member-title">
                    <span>MEMBERS - {memberLength}</span>
                </div>
                <div className="member-list">
                    <ul>
                        {members}
                    </ul>
                </div>
            </div>
        );
    }
}

export default MemberIndex;