import { connect } from "react-redux"
import { requestChannels, requestChannel, createChannel, deleteChannel, clearChannelErrors, clearChannelsFromState } from "../../actions/channel_actions";
import { requestServer } from "../../actions/server_actions";
import MemberIndex from "./member_index"
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {
        members: Object.values(state.entities.users)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default withRouter(connect(mapStateToProps, null)(MemberIndex));