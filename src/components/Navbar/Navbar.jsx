import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";


const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div><NavLink to='/profile'  className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink></div>
            <div><NavLink to='/dialogs' className={`${s.item} ${s.active}`}>Messages</NavLink></div>
            <div><NavLink to='/news' className={s.item}>News</NavLink></div>
            <div><NavLink to='/music' className={s.item}>Music</NavLink></div>
            <div><NavLink to='/settings' className={s.item}>Settings</NavLink></div>
            <Friends state = {props.state}/>
        </nav>
    )
}
export default Navbar;