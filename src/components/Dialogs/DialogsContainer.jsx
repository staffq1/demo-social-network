import { connect } from "react-redux"
import { sendMessageCreator, 
    // updateNewMessageTextCreator
 } from "../../redux/dialogs-reducer"
import Dialogs from './Dialogs'
import { withAuthRedirect } from './../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) =>{
    return {
        dialogsPage: state.dialogsPage,
        // isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        // updateNewMessageText: (text)=>{
        //     dispatch(updateNewMessageTextCreator(text))
        // },
        sendMessage: (newMessageText)=>{
            dispatch(sendMessageCreator(newMessageText))
        }
    }
}



// let AuthRedirectComponent = withAuthRedirect(Dialogs)

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

// export default DialogsContainer 
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)