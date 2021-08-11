import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/types";

export type DialogsPropsType = {
    dialogsPage: DialogsPageType
    updateNewMessageBody: (newMessage: string) => void
    onSendMessageClick: () => void
    newMessageBody: string
}

const Dialogs = (props: DialogsPropsType) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}
                                                                         avatar={d.avatar}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>);

    let onSendMessageClick = () => {
        props.onSendMessageClick()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        console.log("Check function before " + e.target.value)
        props.updateNewMessageBody(e.currentTarget.value)
        console.log("Check function after " + e.target.value)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea className={classes.text} value={props.newMessageBody}
                                  placeholder={"Enter your message..."}
                                  onChange={onNewMessageChange}>
                        </textarea>
                    </div>
                    <div>
                        <button className={classes.button}
                                onClick={onSendMessageClick}>Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
