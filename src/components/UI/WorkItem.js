import { Fragment } from "react";
import classes from "./WorkItem.module.css";
const WorkItem = (props) => {
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes["featured-img"]}>
          <img src={props.imageSource} alt="test" />
        </div>
        <div className={classes["featured-title"]}>
          <h1 className={classes["work-title"]}>
            <span>{props.name}</span>
          </h1>
          <div>
            <p className={classes["work-technology"]}>{props.technology}</p>
            <p>{props.details}</p>
            <button className={classes["work-redirect"]}><a href={props.link} target="blank">View</a></button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WorkItem;
