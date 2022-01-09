import React from "react";

class MemberIndex extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const members = this.props.members.map(member => {
            return <li>{member.username}</li>
        })
        return (
            <div>
                members
                <ul>
                    {members}
                </ul>
                
            </div>
        );
    }
}

export default MemberIndex;