import React from "react";
import s from './Posts.module.sass'


const Posts = (props) => {

    return (

            <div >
                <div className={s.item}>
                    <div className={s.img}>
                        <img src="https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg" alt="userPhoto"/>
                    </div>
                    <div>
                        <p>{props.message}</p>
                    </div>

                </div>
                <div className={s.likes}>
                    <span>{props.likes} like</span>
                </div>
            </div>

    )
}

export default Posts