import React from "react";
import { Link } from "react-router-dom";
import "./Homenav.css";

const Homenav = props => {
    return (
        <div className="nav-main">
            <div className="nav-content">
                <Link to="/">
                    <p> [ Home ] </p>
                </Link>
                <p>/</p>
                <p style={{color: "#90ee90"}}>{props.name}</p>
            </div>
        </div>
    )
}

export default Homenav;