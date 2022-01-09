import { connect } from "react-redux"
import { requestServers, requestServer, createServer, deleteServer, clearServerErrors, clearServersFromState } from "../../actions/server_actions";
import { clearChannelsFromState } from "../../actions/channel_actions";
import { deleteMembership } from "../../actions/membership_actions";
import { resetUserState } from "../../actions/user_actions";
import ServerIndexItem from "./server_index_item"
import { withRouter } from 'react-router-dom';



const mapStateToProps = (state) => {
    return {
        current_user_id: state.session.currentUserId,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestServer: (serverId) => dispatch(requestServer(serverId)),
        deleteServer: (serverId) => dispatch(deleteServer(serverId)),
        clearServerErrors: () => dispatch(clearServerErrors()),
        clearChannelsFromState: () => dispatch(clearChannelsFromState()),
        deleteMembership: (membership) => dispatch(deleteMembership(membership)),
        resetUserState: (currentUserId) => dispatch(resetUserState(currentUserId)),

    }
}

export default withRouter(connect(null, mapDispatchToProps)(ServerIndexItem));