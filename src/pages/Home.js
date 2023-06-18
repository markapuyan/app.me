import { Fragment } from "react"
import SectionHeader from "../components/UI/SectionHeader"
import SectionAbout from '../components/UI/SectionAbout'

const Home = () => {
    return <Fragment>
        <SectionHeader
            title="frontend developer"
            subheading="I'm MJ, a ui designer and frontend software engineer based in Valenzuela, Philippines."
            showCta
            ctaLink='/app.me/about'
            ctaTitle='Contact Me'/>
        <SectionAbout/>
        {/* <SectionHeader title="About" isSubPage/>
        <section id="about">
            <h1 className={classes['fancy']}><span>PERSONAL   //</span></h1>
            <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>
        </section>
        
        <SectionHeader title="Recent Projects" isSubPage/>
        <section>
            <WorkItem/>
            <WorkItem/>
            <WorkItem/>
        </section> */}
    </Fragment>
}

export default Home