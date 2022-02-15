import { connect } from "react-redux"
import { requestServer } from "../../actions/server_actions";
import FriendIndex from "./friend_index"
import { withRouter } from 'react-router-dom';
import { resetUserState, requestFriends } from "../../actions/user_actions";
import { requestDms } from "../../actions/dm_actions";

const getFriends = (state) => {
    let users = Object.values(state.entities.users);
    let friends = users.filter(user => user.id !== state.session.currentUserId)
    return friends
}

const mapStateToProps = (state, ownProps) => {
    return {
        friends: getFriends(state),
        currentUser: state.entities.users[state.session.currentUserId],
        current_user_id: state.session.currentUserId,
        dms: Object.values(state.entities.dms),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        clearChannelErrors: () => dispatch(clearChannelErrors()),
        requestServer: (serverId) => dispatch(requestServer(serverId)),
        clearChannelsFromState: () => dispatch(clearChannelsFromState()),
        resetUserState: (currentUserId) => dispatch(resetUserState(currentUserId)),
        requestFriends: () => dispatch(requestFriends()),
        requestDms: () => dispatch(requestDms()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FriendIndex));