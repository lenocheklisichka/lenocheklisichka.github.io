
import {sendMessageActionCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {DialogsPageType, RootStateType} from "../../redux/types";
import {AppDispatch} from "../../redux/redux-store";
import {connect} from "react-redux";

type MapStateToPropsType = {
    dialogsPage: DialogsPageType;
    newMessageBody: string
}

type MapDispatchToPropsType = {
    onSendMessageClick: () => void;
    updateNewMessageBody: (newMessage: string) => void;
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}

let mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageActionCreator());
        },
        updateNewMessageBody: (newMessage: string) => {
            dispatch(updateNewMessageBodyCreator(newMessage))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
