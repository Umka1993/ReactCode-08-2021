import React from "react";
import s from "./User.module.sass";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/photo/userPhoto.png";


const User = ({user,followingInProgress,unfollow,follow}) => {

    return (
        <div>
            <div className={s.user}>
               <span>
                    <div >
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt="" className={s.userImg}/>
                        </NavLink>
                </div>
                    <div>
                        {user.followed ?
                            <button disabled={followingInProgress
                                .some(id=> id === user.id)}
                                    onClick={() => {unfollow(user.id)}}>
                                Unfollow</button>


                            : <button disabled={followingInProgress
                                .some(id=> id === user.id)}
                                      onClick={() => {follow(user.id)}}>
                                Follow</button>
                        }


                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                    <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </span>
            </div>

        </div>

)
}

export default User