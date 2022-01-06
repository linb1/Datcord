import { connect } from "react-redux"
import { requestChannels, requestChannel, createChannel, deleteChannel, clearChannelErrors } from "../../actions/channel_actions";
import Channel from "./channel"


const mapStateToProps = (state) => {
    return {
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestChannels: () => dispatch(requestChannels()),
        requestChannel: (channel) => dispatch(requestChannel(channel)),
        createChannel: (channel) => dispatch(createChannel(channel)),
        deleteChannel: (channelId) => dispatch(deleteChannel(channelId)),
        clearChannelErrors: () => dispatch(clearChannelErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Channel);