import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    toggleIsFetching,
    unfollow, toggleFollowingInProgress, requestUsers,
} from "../../REDUX/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPagESize,
    getTotalUsersCount, getUsers,
} from "../../REDUX/usersSelectors";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

class UsersContainer extends React.Component {
    componentDidMount() {
        const{currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) =>{

        this.props.requestUsers(pageNumber, this.props.pageSize)

    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);

        let pages = [];
        for(let i=1; i <= pagesCount; i++){
            pages.push(i)
        }

        return <>
            {this.props.isFetching? <Preloader/>: null }

            <Users
                totalUsersCount = {this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage= {this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}



const mapStateToProps =(state) =>{
    // debugger
    return {
        users: getUsers(state),
        pageSize: getPagESize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)

    }
}

export default compose(
    connect (mapStateToProps,
        {follow,unfollow,
            setCurrentPage,toggleIsFetching,
            toggleFollowingInProgress, requestUsers})
)(UsersContainer)

