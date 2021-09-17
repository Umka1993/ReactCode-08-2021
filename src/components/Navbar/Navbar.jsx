import React from "react";
import s from './Navbar.module.sass'
import {NavLink} from "react-router-dom";
// import Users from '../Users/Users'




const Navbar = (props) => {
// debugger
    return (
        <div className={s.nav}>
            <nav >
                <ul>
                    <li>
                        <NavLink to='/profile' activeClassName={s.activeLink} >Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dialogs' activeClassName={s.activeLink} >Messages</NavLink>
                    </li>
                    <li>
                        <NavLink to='/users' activeClassName={s.activeLink} >Users</NavLink>
                    </li>
                    <li>
                        <NavLink to='/news' activeClassName={s.activeLink} >News</NavLink>
                    </li>
                    <li>
                        <NavLink to='/music' activeClassName={s.activeLink} >Music</NavLink>
                    </li>
                    <li>
                        <NavLink to='/settings' activeClassName={s.activeLink} >Settings</NavLink>
                    </li>
                </ul>
            </nav>
            {/*<Users/>*/}
        </div>

    )

}

export default Navbar