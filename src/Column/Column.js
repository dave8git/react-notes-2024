import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredCards } from '../redux/cardsRedux';
const Column = props => {
    const searchString = useSelector(state => state.searchString);

    const cards = useSelector(state => getFilteredCards(state, props.id));
    
    console.log('column props', props);

    return (
        <article className={styles.column}>
            <h2 className={styles.title}> <span className={`icon fa fa-${props.icon}`}></span>{props.title}</h2>
            <ul className={styles.cards}>
                {cards.map(card =>  <Card key={card.id} {...card} />)}
            </ul>
            <CardForm columnId={props.id} action={props.addCard} listId={props.listId} />
        </article>
    );
};

export default Column; 