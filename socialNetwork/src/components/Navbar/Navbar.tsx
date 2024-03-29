import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./Navbar.module.css"

function Navbar() {
    return (
        <div className={classes.nav}>
            <div className={classes.item}>
                <NavLink to={"/profile"} activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/dialogs"} activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/news"} activeClassName={classes.activeLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/musics"} activeClassName={classes.activeLink}>Music</NavLink>
            </div>
            <div className={classes.itemSettings}>
                <NavLink to={"/settings"} activeClassName={classes.activeLink}>Settings</NavLink>
            </div>
        </div>
    );
}

export default Navbar;