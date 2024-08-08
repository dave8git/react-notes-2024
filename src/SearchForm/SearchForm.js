import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = () => {
    return (
        <form className={styles.searchForm}>
            <TextInput />
            <Button><span className="fa fa-search" />Search</Button>
        </form>
    );
};

export default SearchForm; 