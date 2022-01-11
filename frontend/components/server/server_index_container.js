import {connect} from "react-redux"
import { requestServers, requestServer, createServer, deleteServer, clearServerErrors, clearServersFromState } from "../../actions/server_actions";
import ServerIndex from "./server_index"


const mapStateToProps = (state)=> {
    return {
        current_user_id: state.session.currentUserId,
        servers: Object.values(state.entities.servers),
        errors: state.errors.server,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestServers: () => dispatch(requestServers()),
        clearServersFromState: () => dispatch(clearServersFromState()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex);