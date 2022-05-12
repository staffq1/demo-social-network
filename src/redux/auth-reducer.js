import { stopSubmit } from "redux-form"
import { authAPI } from "../api/api"

const SET_USER_DATA = 'project/auth/SET_USER_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload // payload - это data
            }
        default:
            return state
    }
}


export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })

// export const getAuthUserData = () => (dispatch) => {
//      authAPI.me().then(res => {
//         if (res.data.resultCode === 0) {
//             let { id, login, email } = res.data.data
//             return dispatch(setAuthUserData(id, email, login, true))
//         }
//     })
// }

export const getAuthUserData = () => async (dispatch) => {
    let res = await authAPI.me()
    if (res.data.resultCode === 0) {
        let { id, login, email } = res.data.data
        return dispatch(setAuthUserData(id, email, login, true))
    }
}


// export const login = (email, password, rememberMe) =>  (dispatch) => {
//     authAPI.login(email, password, rememberMe).then(res => {
//          if (res.data.resultCode === 0) {
//              dispatch(setAuthUserData())
//          } else {
//              let message = res.data.message.length > 0 ? res.data.message[0] : 'Some error'
//              dispatch(stopSubmit("login", { _error: message }))
//          }
//     })
// }

export const login = (email, password, rememberMe) => async (dispatch) => {
    let res = await authAPI.login(email, password, rememberMe)
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData())
    } else {
        let message = res.data.message.length > 0 ? res.data.message[0] : 'Some error'
        dispatch(stopSubmit("login", { _error: message }))
    }
}

export const logout = () => async (dispatch) => {
    let res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        return dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer