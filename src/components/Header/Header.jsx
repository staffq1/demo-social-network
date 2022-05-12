import React from 'react'
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    
    return (
        <header className={classes.header}>
            <img src='https://us.123rf.com/450wm/sila5775/sila57751611/sila5775161100456/66642715-samurai-mask-designed-on-line-circle-background-graphic-vector-.jpg?ver=6'/>
            <div className={classes.loginBlock}>
                {props.isAuth 
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header