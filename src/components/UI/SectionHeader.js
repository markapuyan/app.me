import { Fragment } from "react"
import Button from './Button'
import classes from './SectionHeader.module.css';
const SectionHeader = (props) => {
    let sectionClasses = [classes['section-header']]
    if (props.isSubPage) sectionClasses.push(classes['sub-page'])
    return <Fragment>
        <div className={sectionClasses}>
            <div className={classes['section-header__container']}>
                <h1 className={classes['section-header__title']}>
                <span>{ props.title }</span>
                </h1>
                { props.subheading && 
                <h6 className={classes['section-header__subheading']}>
                    { props.subheading }
                </h6>}

                { props.showCta && <Button
                  link={props.ctaLink}
                  name={props.ctaTitle}/>}
            </div>
           
        </div>
    </Fragment>
}


export default SectionHeader