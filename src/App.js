import Container from './Container/Container';
import styles from './Container/Container.module.scss';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import About from './About/About';
import Favorite from './Favorite/Favorite';
import List from './List/List';
import NotFound from './NotFound/NotFound';
import {Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
