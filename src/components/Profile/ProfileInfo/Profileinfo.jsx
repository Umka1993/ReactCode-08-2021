import React from "react";
import s from './Profileinfo.module.sass'
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/photo/userPhoto.png";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";




const ProfileInfo = ({profile, status,updateStatus,isOwner,savePhoto}) => {
    if(!profile){
        return <Preloader/>
    }
// debugger,
    const onMainPhotoSelected = (e) => {
       if( e.target.files.length){
           savePhoto(e.target.files[0])
       }
    }

    return (
        <div className={s.profile}>

                <div className={s.user}>
                    <div>
                        <img
                            src={profile.photos.large != null ? profile.photos.large: userPhoto}
                            alt="cat"/>
                    </div>
                    <div>
                        <h2>{profile.fullName}</h2>
                        <ProfileStatusWithHooks status ={status} updateStatus={updateStatus}/>
                    </div>
                </div>
            {isOwner && <input onChange={onMainPhotoSelected} type={'file'}/> }
            </div>
            )
            }

export default ProfileInfo