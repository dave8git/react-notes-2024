import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addList } from '../redux/store';
import shortid from 'shortid';  

const ListForm = props => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({
            id: toString(shortid.generate()), 
            title: title,
            description: description
        }));
        setTitle('');
        setDescription('');
    }

    return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            Title: <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            Description: <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
            <Button>Add List</Button>
        </form>
    )
}

export default ListForm;