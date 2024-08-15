import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import styles from './Favorite.module.scss';
import { useSelector } from 'react-redux';
import { getFavorite } from '../redux/store';
import { useNavigate } from 'react-router-dom';


const Favorite = () => {
    const navigate = useNavigate();
    const cards = useSelector(state => getFavorite(state));



    console.log('cards', cards)

    return (
        <>
            <div className={styles.container}>
                <PageTitle>Favorite</PageTitle>
        <article className={styles.column}>
            <ul className={styles.cards}>
                {cards.map(card =>  <Card key={card.id} {...card} />)}
            </ul>

            </article>
            </div>
            <div className={styles["bottom-left"]}>
                <h3>That's all folks!</h3>
            </div>
        </>
    );
};

export default Favorite; 