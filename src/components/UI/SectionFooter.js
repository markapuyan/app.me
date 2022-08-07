import { Fragment } from "react"
import classes from './SectionFooter.module.css'
import Linkedin from '../../assets/footer-icons/iconmonstr-linkedin-1.svg'
import Github from '../../assets/footer-icons/iconmonstr-github-1.svg'
import Behance from '../../assets/footer-icons/iconmonstr-behance-1.svg'
const SectionFooter = () => {
    return <Fragment>
        <section className={classes.footer}>
            <div className={classes['footer-icons']}>
                <a target="blank" href="https://www.linkedin.com/in/markapuyan/">
                    <img className={classes.icon} src={Linkedin} alt="Linkedin Logo" />
                </a>
                <a target="blank" href="https://github.com/markapuyan">
                    <img className={classes.icon} src={Github} alt="Github Logo" />
                    </a>
                <a target="blank" href="https://www.behance.net/markapuyan">
                    <img className={classes['behance-icon']} src={Behance} alt="Behance Logo" />
                </a>
            </div>
            
            <div>
                Copyright 2022 Mark Apuyan
            </div>
        </section>
    </Fragment>
}


export default SectionFooter