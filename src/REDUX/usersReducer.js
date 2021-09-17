import {usersApi} from "../api/api";
import {updateObjectArray} from "../utils/object_helpers";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}
const usersReducer = (state = initialState, action) => {
// debugger
    switch (action.type) {
        case FOLLOW:
            // debugger
            return {
                ...state,
                users: updateObjectArray(state.users,action.userId, 'id', {followed: true})
            }

        case UNFOLLOW:
            // debugger
            return {
                ...state,
                users:updateObjectArray(state.users,action.userId, 'id', {followed: false})
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}
//создаем  экшен крейтер
export const followSuccess = (userId) => ({type: FOLLOW, userId})

//создаем  экшен крейтер
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})

//создаем  экшен крейтер
export const setUsers = (users) => ({type: SET_USERS, users})

export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})

export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        const data = await usersApi.getUsers(page, pageSize)
        // debugger
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))

    }
}


const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) =>{
    dispatch(toggleFollowingInProgress(true, userId))
    debugger
    const response = await apiMethod(userId)
    // debugger
    if (response.data.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId))
}

export const follow = (userId) => {
    return async (dispatch) => {
        let actionCreator = followSuccess;
        followUnfollowFlow(dispatch, userId, usersApi.follow.bind(usersApi), actionCreator)



    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        let actionCreator = unfollowSuccess
        followUnfollowFlow(dispatch, userId, usersApi.unfollow.bind(usersApi), actionCreator)

    }
}


export default usersReducer