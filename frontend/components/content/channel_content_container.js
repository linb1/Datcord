import { connect } from "react-redux"
import ChannelContent from "./channel_content"
import { withRouter } from 'react-router-dom';
import { requestServer } from "../../actions/server_actions";
import { requestChannel } from "../../actions/channel_actions";
const mapStateToProps = (state, ownProps) => {
    return {
        channels: Object.values(state.entities.channels)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestServer: (serverId) => dispatch(requestServer(serverId)),
        requestChannel: (channelId) => dispatch(requestChannel(channelId)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelContent));