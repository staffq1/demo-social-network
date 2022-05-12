const SEND_MESSAGE = 'SEND-MESSAGE'
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case SEND_MESSAGE:
            let newMessage = action.newMessageText
            // stateCopy.newMessageText = ''
            // stateCopy.messagesArr.push({id: 6, message: newMessage})
            return {
                ...state,
                messagesArr: [...state.messagesArr, {id: 6, message: newMessage}],
                // newMessageText: '',
            }
        // case UPDATE_NEW_MESSAGE_TEXT:
        //     // stateCopy.newMessageText = action.newMessageText
        //     return {
        //         ...state,
        //         newMessageText: action.newMessageText
        //     }
    default:
        return state
    }

}

export const sendMessageCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText})
// export const updateNewMessageTextCreator = (text) => 
// ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text})

export default dialogsReducer