import classes from './IconDisplay.module.css'

const IconDisplay = (props) => {
    return (
        <div className={classes['icon-container']}>
            <img src={props.img} alt={props.name}/>
            <div><p>{props.name}</p></div>
        </div>
    )
}

export default IconDisplay