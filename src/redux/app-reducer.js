import { stopSubmit } from "redux-form"
import { authAPI } from "../api/api"
import { getAuthUserData } from "./auth-reducer"

const SET_INITIALIZED_SUCCESS = 'SET_INITIALIZED_SUCCESS'

let initialState = {
    initializaed: false
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                initializaed: true 
            }
        default:
            return state
    }
}

export const initializaedSuccess = () => ({ type: SET_INITIALIZED_SUCCESS })

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(()=>{
        dispatch(initializaedSuccess())
    })
    
}

export default appReducer