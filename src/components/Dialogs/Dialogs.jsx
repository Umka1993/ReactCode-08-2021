import React from "react";
import s from './Dialogs.module.sass'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";







const Dialogs = (props) => {
    // debugger
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} img={d.img}/>);
    let messageElement = state.messages.map( m => <Message message={m.message} key={m.id}/> )
    // let newMessageBody = state.newMessageBody


    let addNewMessage = (values)=>{
        props.sendMessage(values.newMessageBody)
    }
// debugger;

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
            <div className={s.createMessage}>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}
const maxLength50 = maxLengthCreator(50)

const addMessageForm = (props) =>{

    return(
        <form onSubmit={props.handleSubmit} className={s.enterMessage}>

            <Field component={Textarea} name={'newMessageBody'} placeholder={'Enter your message'}
            validate={[required,maxLength50]}
            />

            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(addMessageForm)

export default Dialogs