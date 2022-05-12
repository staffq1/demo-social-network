import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

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
    isFetching: true,
    followingInProgress: []
}



const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users,  action.userId, 'id', {followed: true})
                // users: state.users.map(item => {
                //     if (item.id === action.userId) {
                //         return { ...item, followed: true }
                //     }
                //     return item
                // })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users,  action.userId, 'id', {followed: false})
                // users: state.users.map(item => {
                //     if (item.id === action.userId) {
                //         return { ...item, followed: false }
                //     }
                //     return item
                // })
            }
        case SET_USERS:
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id != action.userId)]
            }
        default:
            return state
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUeserCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUeserCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const getUsersThunkCreator = (currentPage, pageSize) => {// requestUsers  
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let res = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(res.data.items))
        dispatch(setTotalUsersCount(res.data.totalCount))
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId))
    let data = await apiMethod(userId)
    if (data.resultCode == 0) {
        return dispatch(actionCreator(userId)) && dispatch(toggleFollowingProgress(false, userId))
    }
}

export const follow = (userId) => {
    return async (dispatch) => {

        followUnfollowFlow(dispatch, userId, usersAPI.postUser.bind(usersAPI), followSuccess)
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {

        followUnfollowFlow(dispatch, userId, usersAPI.deleteUser.bind(usersAPI), unfollowSuccess)
    }
}

// export const follow = (userId) => {
//     return async (dispatch) => {
//         dispatch(toggleFollowingProgress(true, userId))
//         let res = await usersAPI.postUser(userId)
//         if (res.data.resultCode == 0) {
//             return dispatch(followSuccess(userId)) && dispatch(toggleFollowingProgress(false, userId))
//         }
//     }
// }

// export const unfollow = (userId) => {
//     return async (dispatch) => {
//         dispatch(toggleFollowingProgress(true, userId))
//         let data = await usersAPI.deleteUser(userId)
//         if (data.resultCode == 0) {
//             return dispatch(unfollowSuccess(userId)) && dispatch(toggleFollowingProgress(false, userId))
//         }
//     }
// }

export default usersReducer