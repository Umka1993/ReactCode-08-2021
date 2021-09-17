import {createSelector} from "reselect";


const getUsersSelector = (state) =>{
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelector, (users) => {
    // debugger
    return users.filter(u=> true)
})
export const getPagESize = (state) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state) => {

    return state.usersPage.followingInProgress
}