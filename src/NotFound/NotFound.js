import PageTitle from '../PageTitle/PageTitle';
import styles from './NotFound.module.scss';

const NotFound = () => {

    return (
        <>
            <div className={styles.container}>
                <PageTitle>There's is nothing here! just 404 ;)</PageTitle>
            </div>
            <div className={styles["bottom-left"]}>
                <h3>Lorem Ipsum</h3>
            </div>
        </>
    );
};

export default NotFound; 