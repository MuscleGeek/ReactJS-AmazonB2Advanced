import React from "react";
import classes from "./Topbar.module.css";

const Topbar = (props) => {
    const logo = "https://i.dlpng.com/static/png/197684_preview.png";
    return(
        <header className="App-header">
            <nav className={classes.Topbar}>
              <img src={logo} alt="Amazon Logo"/>
            </nav>
        </header>
    );
}
export default Topbar;