import {connect} from "react-redux"
import { requestServers, requestServer, createServer, deleteServer, clearServerErrors, clearServersFromState } from "../../actions/server_actions";
import ServerIndex from "./server_index"

// const getCurrentUserServers = (state) => {
//     let current_user_id = state.session.currentUserId;
//     let allServers = Object.values(state.entities.servers);
//     let currentUserServers = [];
//     allServers.forEach( server => {
//         if (server.owner_id === current_user_id){
//             currentUserServers.push(server);
//         }
//     })
//     return currentUserServers;
// }

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
        requestServer: (server) => dispatch(requestServer(server)),
        createServer: (server) => dispatch(createServer(server)),
        deleteServer: (serverId) => dispatch(deleteServer(serverId)),
        clearServerErrors: () => dispatch(clearServerErrors()),
        clearServersFromState: () => dispatch(clearServersFromState()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex);