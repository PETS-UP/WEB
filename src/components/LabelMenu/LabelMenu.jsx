import React from "react";
import "./labelMenu.css"

export default function LabelMenu(props){
    return(
        <div className="label-menu">
            <img src={props.img} alt="" />
            <label htmlFor="">
                {props.item}
            </label>
        </div>
    );
} 