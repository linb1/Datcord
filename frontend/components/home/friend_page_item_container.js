import { connect } from "react-redux"
import { createDm, deleteDm } from "../../actions/dm_actions";
import FriendPageItem from "./friend_page_item"
import { withRouter } from 'react-router-dom';
import { deleteFriendship } from "../../actions/friendship_actions";

const getDm = (state, ownProps) => {
    let dms = Object.values(state.entities.dms);
    let dm = dms.filter(dm => dm.friend_id === ownProps.friend.id)
    return dm.first
}

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.currentUserId],
        currentUserId: state.session.currentUserId,
        currentDm: getDm(state, ownProps),
        ownProps: ownProps,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createDm: (dm) => dispatch(createDm(dm)),
        deleteDm: (dmId) => dispatch(deleteDm(dmId)),
        deleteFriendship: (friendship) => dispatch(deleteFriendship(friendship))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FriendPageItem));