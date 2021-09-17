import React from "react";
import s from './Profile.module.sass'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/Profileinfo";
import {newPostText, updateNewPostText} from "../../REDUX/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";


const Profile = (props) => {

    return (
        <div>

            <ProfileInfo profile={props.profile} isOwner={props.isOwner} savePhoto={props.savePhoto} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile