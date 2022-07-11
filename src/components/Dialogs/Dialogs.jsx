import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from 'react';


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => {
        return <DialogItem name={d.name} id={d.id}/>
    });

    let messagesElements = props.state.messages.map(m => {
        return <Message message={m.message}/>
    })

    let newMessage = React.createRef();
    let addMessage = () =>{
        let text = newMessage.current.value;
        alert(text)

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.messageForm}>
                <textarea ref={newMessage}></textarea>
                <button onClick={addMessage}>Push</button>
            </div>
        </div>

    )
}

export default Dialogs;