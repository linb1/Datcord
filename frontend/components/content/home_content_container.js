import { connect } from "react-redux"
import HomeContent from "./home_content"
import { withRouter } from 'react-router-dom';
import { requestServer } from "../../actions/server_actions";
import { createMembership } from "../../actions/membership_actions";
import { resetUserState, requestFriends } from "../../actions/user_actions";
const mapStateToProps = (state, ownProps) => {
    return {
        currentUserId: state.session.currentUserId,
        servers: Object.values(state.entities.servers)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestServer: (serverId) => dispatch(requestServer(serverId)),
        createMembership: (membership) => dispatch(createMembership(membership)),
        resetUserState: (currentUserId) => dispatch(resetUserState(currentUserId)),
        requestFriends: () => dispatch(requestFriends()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContent));