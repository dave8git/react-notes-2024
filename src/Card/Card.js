import React from 'react'; 
import styles from './Card.module.scss'; 
import clsx from 'clsx'; 


const Card = ({ title, isFavorite }) => { // destrukturyzacja propsów więc używamy dalej bez props.
    const [favorite, setFavorite] = useState(false);

    // dalej dispatch itd...
    
    return (
        <li className={styles.card}>
            {title}
            {/* <i className={clsx("fa-star", { "fas": isFavorite,  "far": !isFavorite })}></i> */}
            <i className={clsx("fa-star", isFavorite === true ?  "fas" : "far" )}></i> 
        </li>
    );
};

export default Card;