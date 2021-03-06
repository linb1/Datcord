import { connect } from "react-redux"
import { requestChannels, requestChannel, createChannel, deleteChannel, clearChannelErrors, clearChannelsFromState } from "../../actions/channel_actions";
import { requestServer } from "../../actions/server_actions";
import ChannelIndex from "./channel_index"
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {
        channels: Object.values(state.entities.channels)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        clearChannelErrors: () => dispatch(clearChannelErrors()),
        requestServer: (serverId) => dispatch(requestServer(serverId)),
        clearChannelsFromState: () => dispatch(clearChannelsFromState()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelIndex));