import { connect } from 'react-redux';
import { requestChannels, requestChannel, createChannel, deleteChannel, clearChannelErrors } from "../../actions/channel_actions";
import ChannelForm from './channel_form';
import { withRouter } from 'react-router-dom';
const mapStateToProps = (state, ownProps) => {
    return {
        current_server_id: ownProps.match.params.serverId,
        errors: state.errors.channel,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createChannel: (channel) => dispatch(createChannel(channel)),
        clearChannelErrors: () => dispatch(clearChannelErrors())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelForm));