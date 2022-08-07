import { Fragment } from "react"
import SectionHeader from "../components/UI/SectionHeader"
import WorkItem from "../components/UI/WorkItem"
import classes from './Home.module.css'
import image from '../assets/coding.png'
const Home = () => {
    return <Fragment>
        <SectionHeader 
        title="ui designer / frontend developer"
        subheading="I'm Mark Joseph Apuyan, a ui designer and frontend developer based in Valenzuela, Philippines."
        img={image}
        showCta
        ctaLink='/app.me/about'
        ctaTitle='About Me'/>

        {/* <section className={classes['home-main']}>
            <h6 className={classes['home-caption']}>Recent Works</h6>
            <h2>Recent Works</h2>
            <WorkItem/>
            <WorkItem/>
        </section> */}
    </Fragment>
}

export default Home