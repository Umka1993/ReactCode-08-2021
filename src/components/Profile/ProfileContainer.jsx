import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatus,
    getUserProfile, savePhoto,
    updateStatus
} from "../../REDUX/profileReducer";
import { withRouter} from "react-router-dom";

import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

class ProfileContainer extends React.Component{

    refreshProfile() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId=this.props.authorizedUserId
            if(!userId){
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
       this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // debugger
        if ( this.props.match.params.userId !=  prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
               <Profile {...this.props}
                        profile={this.props.profile}
                        status={this.props.status}
                        isOwner={!this.props.match.params.userId}
                        updateStatus={this.props.updateStatus}
                        savePhoto={this.props.savePhoto}
               />
            </div>
        )
    }
}
// debugger
const mapStateToProps = (state) =>({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth

})
export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus,savePhoto}),
    withAuthRedirect)
(withRouter(ProfileContainer));

