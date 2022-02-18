import { connect } from "react-redux"
import { clearChannelsFromState } from "../../actions/channel_actions";
import { requestChannels, requestChannel, createChannel, deleteChannel, clearChannelErrors } from "../../actions/channel_actions";
import ChannelIndexItem from "./channel_index_item"
import { withRouter } from 'react-router-dom';



const mapStateToProps = (state, ownProps) => {
    return {
        currentChannelId: ownProps.match.params.channelId,
        currentServerId: ownProps.match.params.serverId,
        currentServer: state.entities.servers[ownProps.match.params.serverId],
        currentUserId: state.session.currentUserId,
        generalChannel: Object.values(state.entities.channels)[0],
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestChannels: () => dispatch(requestChannels()),
        requestChannel: (channel) => dispatch(requestChannel(channel)),
        createChannel: (channel) => dispatch(createChannel(channel)),
        deleteChannel: (channelId) => dispatch(deleteChannel(channelId)),
        clearChannelErrors: () => dispatch(clearChannelErrors()),
        requestServer: (serverId) => dispatch(requestServer(serverId)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelIndexItem));