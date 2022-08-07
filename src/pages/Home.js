import { Fragment } from "react"
import SectionHeader from "../components/UI/SectionHeader"
const Home = () => {
    return <Fragment>
        <SectionHeader 
        title="ui designer / frontend developer"
        subheading="I'm Mark Joseph Apuyan, a ui designer and frontend developer based in Valenzuela, Philippines."
        showCta
        ctaLink='/app.me/about'
        ctaTitle='About Me'/>

    </Fragment>
}

export default Home