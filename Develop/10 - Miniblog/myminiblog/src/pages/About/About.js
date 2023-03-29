import { Link } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles.about}>
            <h2>Sobre o Mini <span>Blog</span></h2>
            <p>This project is a blog made using the React framework in the front-end and Firebase in the back-end</p>
            <Link to="/posts/create" className="btn">Create Post</Link>
        </div>
    )
};

export default About;