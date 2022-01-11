import { connect } from "react-redux"
import ChannelContent from "./channel_content"
import { withRouter } from 'react-router-dom';
import { requestServer } from "../../actions/server_actions";
const mapStateToProps = (state, ownProps) => {
    return {
        channels: Object.values(state.entities.channels)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestServer: (serverId) => dispatch(requestServer(serverId)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelContent));