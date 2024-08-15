import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import styles from './Favorite.module.scss';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getFavorite } from '../redux/cardsRedux';
import { useNavigate } from 'react-router-dom';


const Favorite = () => {
    const navigate = useNavigate();
    const cards = useSelector(state => getFavorite(state));
    console.log('cards', cards);
    useEffect(() => {
        if(cards.length === 0) {
            navigate('/');
        }
    }, [cards, navigate])
   


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