import PageTitle from '../PageTitle/PageTitle';
import styles from './About.module.scss';

const About = () => {

    return (
        <>
            <div className={styles.container}>
                <PageTitle>About</PageTitle>
            </div>
            <div className={styles["bottom-left"]}>
                <h3>Lorem Ipsum</h3>
            </div>
        </>
    );
};

export default About; 