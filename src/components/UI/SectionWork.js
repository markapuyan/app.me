import { Fragment } from "react";

import WorkItem from "./WorkItem";
import work1 from "../../assets/work-image/viaph.png";
import work2 from "../../assets/work-image/lcc.png";
import work3 from "../../assets/work-image/rex.png";
import work4 from "../../assets/work-image/vessell.png";
import classes from "./SectionWork.module.css";
const SectionWork = (props) => {
  return (
    <Fragment>
        <h1 className={classes["section-header-main"]}>Recent Works</h1>
      <WorkItem
        name="Via PH - Italy"
        details="An online platform that facilitates the process of applying for a visa to visit or enter Italy. The website offers a streamlined and convenient way for individuals to submit their visa applications and provide the necessary information and documentation required for visa processing."
        link="test"
        technology="WordPress"
        imageSource={work1}
      />
      <WorkItem
        name="Rex eStore"
        details="An e-commerce website for one of the leading bookshop in the Philippines."
        link="test"
        technology="Quasar"
        imageSource={work3}
      />
      <WorkItem
        name="Shop LCC"
        details="An e-commerce website that caters transaction between the owner and the customers. It is online platform where customers can browse through product listings, select items they want to purchase, add them to a virtual shopping cart, and complete the transaction through a secure payment gateway."
        link="test"
        technology="Vue"
        imageSource={work2}
      />
      <WorkItem
        name="Vessell"
        details="lorem ipsum"
        link="test"
        technology="Vue"
        imageSource={work4}
      />
    </Fragment>
  );
};

export default SectionWork;
