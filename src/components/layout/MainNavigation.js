import { NavLink } from "react-router-dom"
import classes from './MainNavigation.module.css';
const MainNavigation = () => {
    return  <header className={classes.header}>
        <nav>
            <ul>
                <li className={classes.link}>
                    <NavLink to="/app.me/#/about">About</NavLink>
                </li>
                <li className={classes.link}>
                    <NavLink to="/app.me/works">Works</NavLink>
                </li>
                <li className={classes.link}>
                    <NavLink to="/app.me/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    </header>
}


export default MainNavigation