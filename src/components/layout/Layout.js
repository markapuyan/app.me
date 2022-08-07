import { Fragment } from "react"
import MainNavigation from "./MainNavigation"
import classes from './Layout.module.css'
import SectionFooter from "../UI/SectionFooter"
const Layout = (props) => {
    return <Fragment>
        <MainNavigation/>
        <main className={classes.main}>
            <div className={classes.wrapper}>
             { props.children }
            </div>
           
        </main>
        <SectionFooter/>
    </Fragment>
}


export default Layout