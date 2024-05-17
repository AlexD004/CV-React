import './styles.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {Routes, Route, NavLink} from 'react-router-dom';
import Accueil from './pages/Accueil';
import Services from './pages/Services';
import Realisations from './pages/Realisations';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';
import Footer from './assets/components/Footer';

function App() {

  return (
    <div className="App">
      <div className="Nav">
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top">
          <Container>
            <Navbar.Brand>
              <NavLink className="nav-link text-light text-uppercase" to="/"> John Doe </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                  <NavLink className="nav-link text-light text-uppercase" to="/"> Accueil </NavLink>
                  <NavLink className="nav-link text-light text-uppercase" to="/services"> Services </NavLink>
                  <NavLink className="nav-link text-light text-uppercase" to="/realisations"> Réalisations </NavLink>
                  <NavLink className="nav-link text-light text-uppercase" to="/blog"> Blog </NavLink>
                  <NavLink className="nav-link text-light text-uppercase" to="/contact"> Me contacter </NavLink>
              </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
          <Routes>
            <Route path="/" element={ <Accueil/> }></Route>
            <Route path="/services" element={ <Services/> }></Route>
            <Route path="/realisations" element={ <Realisations/> }></Route>
            <Route path="/blog" element={ <Blog/> }></Route>
            <Route path="/contact" element={ <Contact/> }></Route>
            <Route path="/mentions-legales" element={ <MentionsLegales/> }></Route>
          </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
