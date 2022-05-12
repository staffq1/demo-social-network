import React from 'react'
import { NavLink as BaseNavLink } from 'react-router-dom'
import classes from './Navbar.module.css'
import store from '../../redux/redux-store'

const Navbar = (props) => {
// debugger
  const NavLink = React.forwardRef(
    
    ({ activeClassName, activeStyle, ...props }, ref) => {
      return (
        <BaseNavLink
          ref={ref}
          {...props}
          className={({ isActive }) =>
            [
              props.className,
              isActive ? activeClassName : null
            ]
              .filter(Boolean)
              .join(" ")
          }
          style={({ isActive }) => ({
            ...props.style,
            ...(isActive ? activeStyle : null)
          })}
        />
      );
    }
  );
// debugger
  const frends = store.getState().sidebar.frendsArr.map(frendObj => {
    return <div className={classes.frend} key={frendObj.id}>
      <img src={frendObj.avatar} />
      <p>{frendObj.name}</p>
    </div>
  })

  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        {<NavLink to={`/profile/*`} activeClassName={classes.active}>Profile</NavLink>}
      </div>
      <div className={classes.item}>
        <NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/music' activeClassName={classes.active}>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/users' activeClassName={classes.active}>Users</NavLink>
      </div>
      <div className={classes.item}>
        <h1>Frends</h1>
        <div className={classes.frends}>
          {frends}
        </div>
      </div>
    </nav>
  )
}

export default Navbar