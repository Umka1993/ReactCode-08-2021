import React from "react";
import s from '../../Users/Users.module.sass'



let Paginator = ({totalUsersCount, pageSize,currentPage,onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount/pageSize);

    let pages = [];
    for(let i=1; i <= pagesCount; i++){
        pages.push(i)
    }
    return (
        <div className={s.users}>
            <div className={s.btnBlock}>
                {pages.map(p => {
                    return <span className={currentPage === p && s.selectedPage}
                                 onClick={(e) => {
                                     onPageChanged(p);
                                 }}>{p}</span>
                })}
            </div>
        </div>)

}

export default Paginator