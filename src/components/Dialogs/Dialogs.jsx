import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Duglas'},
        {id: 4, name: 'Robertos'},
        {id: 5, name: 'Javani'},
        {id: 6, name: 'Jorjio'},
    ]


    let messages = [
        {id: 1, message: 'message'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'Where are u?'},
        {id: 4, message: 'I\'m Javany Jorjio'},
        {id: 5, message: 'Pip pip'},
    ]

    let dialogsElements = dialogs.map(d => {
        return <DialogItem name={d.name} id={d.id}/>
    });

    let messagesElements = messages.map(m => {
        return <Message message={m.message}/>
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}

            </div>
        </div>

    )
}

export default Dialogs;