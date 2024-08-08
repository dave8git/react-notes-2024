import styles from './List.module.scss';
import Column from '../Column/Column';

const List = () => {
    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h2 className={styles.title}>Things to do<span>soon</span></h2>
            </header>
            <p className={styles.description}>Interesting things I want to chck out</p>
            <section className={styles.columns}>
                <Column title="Books" icon="book" />
                <Column title="Music" icon="music" />
                <Column title="Movies" icon="film"/>
            </section>
        </div>
    );
};

export default List; 