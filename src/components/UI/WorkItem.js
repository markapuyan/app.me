import { Fragment } from "react"
import classes from './WorkItem.module.css'
const WorkItem = (props) => {
    return <Fragment>
        <div className={classes.container}>
            <div className={classes['featured-img']}>
                <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e" alt="test"/>
                
            </div>
            <div className={classes['featured-title']}>
                <h1>asdasdasd</h1>
            </div>
            
        </div>
    </Fragment>
}

export default WorkItem