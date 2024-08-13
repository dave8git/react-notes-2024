import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';

const Favorite = () => {

    return (
        <>
            <div className={styles.container}>
                <PageTitle>Favorite</PageTitle>
            </div>
            <div className={styles["bottom-left"]}>
                <h3>Lorem Ipsum</h3>
            </div>
        </>
    );
};

export default Favorite; 