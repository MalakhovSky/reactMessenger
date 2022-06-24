import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div><NavLink to='/profile'  className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink></div>
            <div><NavLink to='/dialogs' className={`${s.item} ${s.active}`}>Messages</NavLink></div>
            <div><NavLink to='/news' className={s.item}>News</NavLink></div>
            <div><NavLink to='/music' className={s.item}>Music</NavLink></div>
            <div><NavLink to='/settings' className={s.item}>Settings</NavLink></div>
        </nav>
    )
}
export default Navbar;