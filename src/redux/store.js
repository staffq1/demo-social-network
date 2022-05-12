import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"

let store = {
    _state: {
        profilePage: {
            postsArr: [
                { id: 0, message: 'Hi', likesCount: '11' },
                { id: 1, message: 'i good', likesCount: '8' },
            ],
            newPostText: 'IT-com'
        },
        dialogsPage: {
            dialogsArr: [
                { id: 0, name: 'Pitbull' },
                { id: 1, name: 'Staff-terier' },
                { id: 2, name: 'German-shloisberg' },
                { id: 3, name: 'Duberman' }
            ],
            messagesArr: [
                { id: 0, message: 'Hi' },
                { id: 1, message: 'How are you' },
                { id: 2, message: 'Yo' }
            ],
            newMessageText: 'IT-Mes'
        },
        sidebar: {
            frendsArr: [
                { id: 0, avatar: 'https://sun9-69.userapi.com/impg/w50G1yCms3u9z2_bgWapylDDzJWB1WGJEJIqfg/vbe2wsXACbY.jpg?size=320x400&quality=96&sign=fc5d0076011be9329e27905a51eb7723&c_uniq_tag=xWpTW_yTs8bwvQZpGf3Z1p0Nd2lWySrj-Ca5JSOyHH0&type=album', name: 'Pitbull' },
                { id: 1, avatar: 'https://sun9-69.userapi.com/impg/w50G1yCms3u9z2_bgWapylDDzJWB1WGJEJIqfg/vbe2wsXACbY.jpg?size=320x400&quality=96&sign=fc5d0076011be9329e27905a51eb7723&c_uniq_tag=xWpTW_yTs8bwvQZpGf3Z1p0Nd2lWySrj-Ca5JSOyHH0&type=album', name: 'Staff-terier' },
                { id: 2, avatar: 'https://sun9-69.userapi.com/impg/w50G1yCms3u9z2_bgWapylDDzJWB1WGJEJIqfg/vbe2wsXACbY.jpg?size=320x400&quality=96&sign=fc5d0076011be9329e27905a51eb7723&c_uniq_tag=xWpTW_yTs8bwvQZpGf3Z1p0Nd2lWySrj-Ca5JSOyHH0&type=album', name: 'German-shloisberg' }
            ]
        }
    },
    _callSubscriber() {
        console.log('state изменился')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer // наблюдатель (патрн) // publisher-subsciber
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)  
    }
}

window.store = store
export default store
