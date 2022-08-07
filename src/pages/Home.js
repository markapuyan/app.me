import { Fragment } from "react"
import SectionHeader from "../components/UI/SectionHeader"
import IconDisplay from '../components/UI/IconDisplay'
import classes from './Home.module.css'

import htmlIcon from '../assets/skills-icons/html5-svgrepo-com.svg';
import cssIcon from '../assets/skills-icons/css-3-svgrepo-com.svg';
import jsIcon from '../assets/skills-icons/js-svgrepo-com.svg'
import nuxtIcon from '../assets/skills-icons/nuxtjs-svgrepo-com.svg'
import vueIcon from '../assets/skills-icons/vuejs-svgrepo-com.svg'
import reactIcon from '../assets/skills-icons/react-svgrepo-com.svg'
import vuetifyIcon from '../assets/skills-icons/vuetify-svgrepo-com.svg'
import wordPressIcon from '../assets/skills-icons/wordpress-svgrepo-com.svg'
import sassIcon from '../assets/skills-icons/sass-svgrepo-com.svg'
import bootstrapIcon from '../assets/skills-icons/bootstrap-svgrepo-com.svg'
import WorkItem from "../components/UI/WorkItem";
const Home = () => {
    return <Fragment>
        <SectionHeader
            title="ui designer / frontend developer"
            subheading="I'm Mark Joseph Apuyan, a ui designer and frontend developer based in Valenzuela, Philippines."
            showCta
            ctaLink='/app.me/about'
            ctaTitle='Contact Me'/>
        <SectionHeader title="About" isSubPage/>
        <section id="about">
            <h1 className={classes['fancy']}><span>PERSONAL   //</span></h1>
            <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>
        </section>
        <section>
            <h1 className={classes['fancy']}><span>SKILLS   //</span></h1>
            <p className={classes['section-description']}>These are the some of the technologies I use to create for the web.</p>
            <div className={classes['about-icon-container']}>
                <IconDisplay img={htmlIcon} name="HTML 5"/>
                <IconDisplay img={cssIcon} name="CSS 3"/>
                <IconDisplay img={jsIcon} name="JavaScript"/>
                <IconDisplay img={vueIcon} name="Vue"/>
                <IconDisplay img={nuxtIcon} name="Nuxt.js"/>
                <IconDisplay img={reactIcon} name="React"/>
                <IconDisplay img={vuetifyIcon} name="Vuetify"/>
                <IconDisplay img={wordPressIcon} name="Word Press"/>
                <IconDisplay img={sassIcon} name="Sass"/>
                <IconDisplay img={bootstrapIcon} name="Bootstrap"/>
            </div>
        </section>
        <SectionHeader title="Recent Projects" isSubPage/>
        <section>
            <WorkItem/>
            <WorkItem/>
            <WorkItem/>
        </section>
    </Fragment>
}

export default Home