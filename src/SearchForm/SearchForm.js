import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addSearchString } from '../redux/store';

const SearchForm = () => {
    const [searchString, setSearchString] = useState('');
    const dispatch = useDispatch();

    const handleChange = e => {
        setSearchString(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault(); 
        dispatch(addSearchString(searchString));
    }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput 
                value={searchString} 
                onChange={handleChange} 
                placeholder="Search..."
            />
            <Button><span className="fa fa-search" />Search</Button>
        </form>
    );
};

export default SearchForm; 