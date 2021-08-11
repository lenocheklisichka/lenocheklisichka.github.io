import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./DialogItem.module.css";
import {DialogType} from "../../../redux/types";

const DialogItem: React.FC<DialogType> = (props) => {
    return (
        <div className={classes.boxNames}>
            <div>
                <img src={props.avatar} alt="" className={classes.avatarImg}/>
            </div>
            <div className={classes.names}>
                <NavLink to={"/dialogs/" + props.id} activeClassName={classes.activeLink}>{props.name}</NavLink>
            </div>
        </div>
    );
}

export default DialogItem;