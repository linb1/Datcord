import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { resetUserState, requestFriends } from "../../actions/user_actions";
import Profile from './profile';

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.currentUserId],
        current_user_id: state.session.currentUserId,
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    resetUserState: (currentUserId) => dispatch(resetUserState(currentUserId)),
    requestFriends: () => dispatch(requestFriends()),
    
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);