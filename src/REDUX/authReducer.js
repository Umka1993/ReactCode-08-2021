import {authApi} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
    userId: null,
    email: null,
    login: null,
    iSAuth: false

}
const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,


            }
        default:
            return state;
    }

}
//создаем  экшен крейтер
export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})

export const getAuthUserData = () => async (dispatch) => {
    const response = await authApi.me()
    // debugger
    if (response.data.resultCode === 0) {
        // debugger
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }

}
//санка  для логина
export const login = (email, password, rememberMe) => async (dispatch) => {
    // debugger
    const response = await authApi.login(email, password, rememberMe)
// debugger
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    }
}

export const logout = () => async (dispatch) => {
    const response = await authApi.logout()

    if (response.data.resultCode === 0) {
        // debugger
        dispatch(setAuthUserData(null, null, null, false))
    }
}


export default authReducer