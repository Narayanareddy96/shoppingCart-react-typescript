import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './components/Home';
import { Store } from './components/Store';
import { About } from './components/About';
function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/store" element={<Store />}>
          Store
        </Route>
        <Route path="/about" element={<About />}>
          About
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
