import { connect } from 'react-redux';
import { requestServers, requestServer, createServer, deleteServer, clearServerErrors } from "../../actions/server_actions";
import { clearChannelsFromState } from '../../actions/channel_actions';
import ServerForm from './server_form';
import { withRouter } from 'react-router-dom';
const mapStateToProps = (state) => {
    return {
        current_user_id: state.session.currentUserId,
        errors: state.errors.server,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createServer: (server) => dispatch(createServer(server)),
        clearServerErrors: () => dispatch(clearServerErrors()),
        clearChannelsFromState: () => dispatch(clearChannelsFromState()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerForm));