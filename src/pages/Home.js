import { Fragment } from "react"
import SectionHeader from "../components/UI/SectionHeader"
import SectionAbout from '../components/UI/SectionAbout'
import SectionWork from '../components/UI/SectionWork'
const Home = () => {
    return <Fragment>
        <SectionHeader
            title="frontend developer"
            subheading="I'm MJ, a ui designer and frontend software engineer based in Valenzuela, Philippines."
            showCta
            ctaLink='/app.me/about'
            ctaTitle='Contact Me'/>
        <SectionAbout/>
        <SectionWork/>
    </Fragment>
}

export default Home