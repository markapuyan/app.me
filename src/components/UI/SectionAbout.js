import { Fragment } from "react";
import IconDisplay from "../UI/IconDisplay";
import htmlIcon from "../../assets/skills-icons/html5-svgrepo-com.svg";
import cssIcon from "../../assets/skills-icons/css-3-svgrepo-com.svg";
import jsIcon from "../../assets/skills-icons/js-svgrepo-com.svg";
import nuxtIcon from "../../assets/skills-icons/nuxtjs-svgrepo-com.svg";
import vueIcon from "../../assets/skills-icons/vuejs-svgrepo-com.svg";
import reactIcon from "../../assets/skills-icons/react-svgrepo-com.svg";
import vuetifyIcon from "../../assets/skills-icons/vuetify-svgrepo-com.svg";
import wordPressIcon from "../../assets/skills-icons/wordpress-svgrepo-com.svg";
import sassIcon from "../../assets/skills-icons/sass-svgrepo-com.svg";
import bootstrapIcon from "../../assets/skills-icons/bootstrap-svgrepo-com.svg";
import classes from "./SectionAbout.module.css";
const SectionAbout = (props) => {
  return (
    <Fragment>
      <section className={classes.about}>
        <h1 className={classes["section-header-main"]}>About</h1>

        <div className={classes["section-container"]}>
          <div>
            <h1 className={classes["fancy"]}>
              <span>More about me</span>
            </h1>
          </div>
        </div>
        <div className={classes["section-container"]}>
          <div>
            <h1 className={classes["fancy"]}>
              <span>My Technology Stack</span>
            </h1>

            <p className={classes["section-description"]}>
              These are the some of the technologies I use to create for the
              web.
            </p>
            <div className={classes["about-icon-container"]}>
              <IconDisplay img={htmlIcon} name="HTML 5" />
              <IconDisplay img={cssIcon} name="CSS 3" />
              <IconDisplay img={jsIcon} name="JavaScript" />
              <IconDisplay img={vueIcon} name="Vue" />
              <IconDisplay img={nuxtIcon} name="Nuxt.js" />
              <IconDisplay img={reactIcon} name="React" />
              <IconDisplay img={vuetifyIcon} name="Vuetify" />
              <IconDisplay img={wordPressIcon} name="Word Press" />
              <IconDisplay img={sassIcon} name="Sass" />
              <IconDisplay img={bootstrapIcon} name="Bootstrap" />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SectionAbout;
