import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const List = props => {
    const columns = useSelector(state => state.columns);

    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h2 className={styles.title}>Things to do<span>soon</span></h2>
            </header>
            <p className={styles.description}>Interesting things I want to chck out</p>
            <section className={styles.columns}>
                {console.log(columns)}
                {columns.map(column => <Column key={column.id} {...column} />)}
            </section>
            <ColumnForm />
        </div>
    );
};

export default List; 