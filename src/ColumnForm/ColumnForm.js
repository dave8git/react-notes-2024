import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addColumn } from '../redux/store';
import shortid from 'shortid';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    console.log('title', title);
    console.log('icon', icon);
    console.log('props', props);

    const handleSubmit = e => {
        e.preventDefault();
        if(title !== '' && icon !== '') {
            dispatch(addColumn({title: title, icon: icon, listId: props.listId })); 
            setIcon('');
        } else {
            alert('Proszę uzupełnić wszystkie pola!');
        }
    }
    
    const dispatch = useDispatch();

    return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            Title: <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            Icon: <input type="text" value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
    )
}

export default ColumnForm;