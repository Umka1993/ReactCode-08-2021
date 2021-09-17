import React from "react";
import s from './Users.module.sass'
import userPhoto from '../../assets/photo/userPhoto.png'
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

import User from "./User/User";


let Users = ({currentPage,selectedPage,onPageChanged,totalUsersCount, pageSize,users,...props}) => {
// debugger

    return (
        <div className={s.users}>
            <Paginator currentPage ={currentPage}
                       onPageChanged={onPageChanged}
                       totalUsersCount={totalUsersCount}
                       pageSize={pageSize}/>
            <div className={s.usersBlock}>
                {users.map(u => <User className={s.user}
                                             key={u.id}
                                             user={u}
                                             unfollow={props.unfollow}
                                             follow={props.follow}
                                             followingInProgress={props.followingInProgress}>
                </User>)}
            </div>

        </div>
    )

}

export default Users