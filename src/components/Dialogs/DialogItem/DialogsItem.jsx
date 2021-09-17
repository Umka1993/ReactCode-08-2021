import React from "react";
import s from './../Dialogs.module.sass'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogs/'+ props.id

  return(
      <div className={`${s.dialog} + ' ' ${s.active}`}>
          <NavLink to={path}>
              <div>
                  <img src={props.img} alt="Dimych"/>
              </div>
              <p>
                  {props.name}
              </p>
          </NavLink>
      </div>
  )
}


export default DialogItem