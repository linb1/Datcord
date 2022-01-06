import { connect } from "react-redux"
import { requestServers, requestServer, createServer, deleteServer, clearServerErrors, clearServersFromState } from "../../actions/server_actions";
import ServerIndexItem from "./server_index_item"
import { withRouter } from 'react-router-dom';



const mapStateToProps = (state) => {
    return {
        current_user_id: state.session.currentUserId,
        servers: Object.values(state.entities.servers),
        errors: state.errors.server,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteServer: (serverId) => dispatch(deleteServer(serverId)),
        clearServerErrors: () => dispatch(clearServerErrors()),
        clearServersFromState: () => dispatch(clearServersFromState()),
    }
}

export default withRouter(connect(null, mapDispatchToProps)(ServerIndexItem));