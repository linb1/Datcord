import { connect } from "react-redux"
import Dm from "./dm"
import { withRouter } from 'react-router-dom';
import { requestServer } from "../../actions/server_actions";
import { requestChannel } from "../../actions/channel_actions";
const mapStateToProps = (state, ownProps) => {
    return {
        friendId: ownProps.match.params.friendId,
        currentDm: state.entities.dms
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dm));