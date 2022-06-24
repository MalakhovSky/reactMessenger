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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name="Sasha" id="1"/>
                <DialogItem name="Vanya" id="2"/>
                <DialogItem name="Robert" id="3"/>
                <DialogItem name="Duglas" id="4"/>
                <DialogItem name="Riki Marin" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="Where are u?"/>
                <Message message="I'm Javany Jorjio"/>
                <Message message="Pip pip"/>
            </div>
        </div>

    )
}

export default Dialogs;