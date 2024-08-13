import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addCard } from '../redux/store';

const CardForm = props => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();  // Ensure useDispatch is called at the top

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addCard({ title, columnId: props.columnId }));
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            Title: <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add Card</Button> {/* Changed label to match functionality */}
        </form>
    );
};

export default CardForm;
