import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_COLUMN', newColumn: {title: title, icon: icon}});
        setTitle('');
        setIcon('');
    }

    const dispatch = useDispatch(); 

    return(
        <form onSubmit={handleSubmit}>
        Title: <input type="text" title={title} onChange={e => setTitle(e.target.value)} />
        Icon: <input type="text" icon={icon} onChange={e => setIcon(e.target.value)} />
        <Button>Add column</Button>
        </form>
    )
   
}

export default ColumnForm; 