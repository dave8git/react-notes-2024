import React from 'react'; 
import styles from './Card.module.scss'; 
import clsx from 'clsx'; 
import { useState } from 'react';
import { toggleCardFavorite } from '../redux/store';
import { useDispatch } from 'react-redux';


const Card = ({ id, title, isFavorite }) => { // destrukturyzacja propsów więc używamy dalej bez props.
    const [favorite, setFavorite] = useState(false);
    const dispatch = useDispatch();
    // dalej dispatch itd...
    const handleSubmit = e => {
        e.preventDefault();
        console.log('id', id);
        dispatch(toggleCardFavorite(id));
    }

    return (
        <li className={styles.card}>
            {title}
            {/* <i className={clsx("fa-star", { "fas": isFavorite,  "far": !isFavorite })}></i> */}
            <i onClick={handleSubmit} className={clsx("fa-star", isFavorite === true ?  "fas" : "far" )}></i> 
        </li>
    );
};

export default Card;