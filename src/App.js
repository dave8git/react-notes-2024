import Container from './Container/Container';
import styles from './Container/Container.module.scss';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import About from './About/About';
import Favorite from './Favorite/Favorite';


const App = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Home />
        <About />
        <Favorite />
      </Container>
    </>
  );
};

export default App;
