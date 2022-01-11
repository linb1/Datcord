import { connect } from "react-redux"
import ServerContent from "./server_content"
import { withRouter } from 'react-router-dom';
import { requestServer, deleteServer } from "../../actions/server_actions";
import { deleteMembership } from "../../actions/membership_actions";
const mapStateToProps = (state, ownProps) => {
    return {
        currentUserId: state.session.currentUserId,
        servers: Object.values(state.entities.servers)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestServer: (serverId) => dispatch(requestServer(serverId)),
        deleteMembership: (membership) => dispatch(deleteMembership(membership)),
        deleteServer: (serverId) => dispatch(deleteServer(serverId)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerContent));