import { Fragment } from "react"
import SectionHeader from "../components/UI/SectionHeader"
import IconDisplay from '../components/UI/IconDisplay'
import classes from './About.module.css'
const About = () => {
    return <Fragment>
        <SectionHeader title="About" isSubPage/>
        <section>
            <h1 className={classes['about-header', 'fancy']}><span>PERSONAL</span></h1>
            <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>
        </section>
        <section>
            <h1 className={classes['about-header', 'fancy']}><span>TECHNOLOGIES I USE</span></h1>
            <IconDisplay/>
        </section>
    </Fragment>
}

export default About