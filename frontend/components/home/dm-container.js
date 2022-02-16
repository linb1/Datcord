import { connect } from "react-redux"
import Dm from "./dm"
import { withRouter } from 'react-router-dom';
import { requestServer } from "../../actions/server_actions";
import { requestDm } from "../../actions/dm_actions";
const mapStateToProps = (state, ownProps) => {
    return {
        dmId: ownProps.match.params.dmId,
        currentDm: state.entities.dms[ownProps.match.params.dmId],
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestDm: (dmId) => dispatch(requestDm(dmId)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dm));