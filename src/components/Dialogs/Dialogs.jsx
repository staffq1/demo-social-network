import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
// import { sendMessageCreator, updateNewMessageTextCreator } from "../../redux/dialogs-reducer"
import { Navigate } from 'react-router-dom'
import { Field } from 'redux-form'
import { reduxForm } from 'redux-form'
import { Textarea } from '../commen/FormsControls/FormsControls'
import { maxLengthCreator, required } from '../../utils/validators/validators'

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogsArr.map(dialogObj => <DialogItem name={dialogObj.name} key={dialogObj.name} id={dialogObj.id} />)
    let messagesElements = state.messagesArr.map(messagesObj => <Message name={messagesObj.message} key={messagesObj.message} />)
    // let newMessageText = state.newMessageText

    // let onSendMessageClick = () => {
    //     props.sendMessage()
    // }

    // let onNewMessageChange = (ev) => {
    //     let text = ev.target.value
    //     props.updateNewMessageText(text)
    // }

    let addNewMessage = (value) => {
      
        props.sendMessage(value.newMessageText)
    }

    if (!props.isAuth) return <Navigate to={'/login'} />

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const maxLength = maxLengthCreator(10)

const AddMessageForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
        <Field component={Textarea} validate={[required, maxLength]} name='newMessageText' placeholder='Enter'/>
        {/* <Field component={'textarea'} name='newMessageText' placeholder='Enter'/> */}
        </div>
        <div><button>Add message</button></div>
    </form>
}

const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs