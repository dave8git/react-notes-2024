import Hero from './Hero/Hero';
import SearchForm from './SearchForm/SearchForm';
import List from './List/List';
import Container from './Container/Container';
import styles from './Container/Container.module.scss';

const App = () => {
  return (
    <Container>
      <Hero />
      <SearchForm />
      <List />
    </Container>
  );
};

export default App;
